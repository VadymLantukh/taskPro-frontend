import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from '../Button/Button';
import s from '../BoardForm/BoardForm.module.css';
import t from '../../styles/Forms.module.css';

const AddColumn = ({ title = '', columnId = null }) => {
  const [newTitle, setNewTitle] = useState('title');

  const handleTitleChange = e => {
    setNewTitle(e.target.value);
  };

  const addColumnHandleClick = e => {
    e.preventDefault();

    if (newTitle.trim() === '') {
      console.log('Title is required');
    } else {
      if (columnId !== null) {
        console.log('Column renamed: ', e.target.value);
      } else {
        console.log('New column added: ', e.target.value);
      }
    }
  };

  const validationSchema = Yup.object().shape({
    newTitle: Yup.string().trim().required('Title is required'),
  });

  const initialValues = {
    title: newTitle,
  };

  return (
    <div className={s.boardContainer}>
      <h2 className={s.newBoardTitle} style={{ marginBottom: '24px' }}>
        Add column
      </h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={addColumnHandleClick}
      >
        <Form className={s.form}>
          <Field
            type="text"
            name="title"
            placeholder="Title"
            className={t.input}
          />
          <ErrorMessage name="title" component="span" className={s.error} />
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
