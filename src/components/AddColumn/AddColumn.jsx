import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from '../Button/Button';
import {
  addColumn,
  updateColumn,
} from '../../redux/columns/columnsOperations.js';
import s from '../BoardForm/BoardForm.module.css';
import t from '../../styles/Forms.module.css';

const AddColumn = ({ title = '', columnId = null, onClose }) => {
  const [newTitle, setNewTitle] = useState(title);

  const handleSubmit = values => {
    console.log('in handle submit');
    console.log(values);

    if (newTitle.trim() === '') {
      console.log('Title is required');
    } else {
      setNewTitle({ values });
      if (columnId !== null) {
        updateColumn({ values });
        console.log('Column renamed: ', { values });
      } else {
        addColumn({ values });
        console.log('New column added: ', { values });
      }
    }
    onClose();
  };

  const validationSchema = Yup.object().shape({
    newTitle: Yup.string().trim().required('Title is required'),
  });

  return (
    <div className={s.boardContainer}>
      <h2 className={s.newBoardTitle} style={{ marginBottom: '24px' }}>
        Add column
      </h2>
      <Formik
        initialValues={{
          title: newTitle,
        }}
        validationSchema={validationSchema}
        onSubmit={() => {
          console.log('submitting: ');
        }}
      >
        <Form className={s.form}>
          <Field
            type="text"
            name="title"
            placeholder="Title"
            className={t.input}
          />
          <ErrorMessage name="title" component="span" className={s.error} />
          <button type="submit" style={{ marginTop: '24px' }}>
            submit
          </button>
          <Button
            type={'submit'}
            text="Add"
            showIcon={true}
            style={{ marginTop: '24px' }}
          />
        </Form>
      </Formik>
    </div>
  );
};

export default AddColumn;
