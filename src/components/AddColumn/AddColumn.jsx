import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useParams } from 'react-router-dom';
import Button from '../Button/Button';
import {
  addColumn,
  updateColumn,
} from '../../redux/columns/columnsOperations.js';
import s from '../BoardForm/BoardForm.module.css';
import t from '../../styles/Forms.module.css';
import { useDispatch } from 'react-redux';

const AddColumn = ({
  title = '',
  columnId = null,
  onClose,
  formName = 'Add column',
  buttonText = 'Add',
}) => {
  const dispatch = useDispatch();
  const { boardId } = useParams();

  const handleSubmit = (values, { setSubmitting }) => {
    const trimmedTitle = values.title.trim();

    if (trimmedTitle === '') {
      setSubmitting(false);
      return;
    }

    try {
      if (columnId !== null) {
        console.log(
          'editing column: columnId: ',
          columnId,
          ', title: ',
          trimmedTitle
        );

        dispatch(updateColumn({ id: columnId, title: trimmedTitle }));
      } else {
        console.log(
          'adding column: boardId: ',
          boardId,
          ', title: ',
          trimmedTitle
        );
        dispatch(addColumn({ boardId, title: trimmedTitle }));
      }
      onClose();
    } catch (error) {
      console.error('Error adding/updating column:', error);
    } finally {
      setSubmitting(false);
    }
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().trim().required('Title is required'),
  });

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
