import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Button from '../Button/Button';
import {
  addColumn,
  updateColumn,
} from '../../redux/columns/columnsOperations.js';

import s from '../BoardForm/BoardForm.module.css';
import t from '../../styles/Forms.module.css';

const AddColumn = ({
  title = '',
  columnId = null,
  onClose,
  formName = 'Add column',
  buttonText = 'Add',
}) => {
  const dispatch = useDispatch();
  const { boardId } = useParams();

  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .trim()
      .min(3, 'The title must have at least 3 characters.')
      .max(30, 'The title must not exceed 30 characters.')
      .required('The title is required.'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    const trimmedTitle = values.title.trim();

    if (trimmedTitle === '') {
      setSubmitting(false);
      return;
    }

    try {
      if (columnId !== null) {
        dispatch(updateColumn({ id: columnId, title: trimmedTitle }));
      } else {
        dispatch(addColumn({ boardId, title: trimmedTitle }));
      }
      onClose();
    } catch (error) {
      console.error('Error adding/updating column:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={s.boardContainer}>
      <h2 className={s.newBoardTitle} style={{ marginBottom: '24px' }}>
        {formName}
      </h2>
      <Formik
        initialValues={{ title }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={s.form}>
            <Field
              type="text"
              name="title"
              placeholder="Title"
              className={t.input}
            />
            <ErrorMessage name="title" component="span" className={s.error} />
            <Button
              type="submit"
              text={buttonText}
              disabled={isSubmitting}
              showIcon={true}
              style={{ marginTop: '24px' }}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddColumn;
