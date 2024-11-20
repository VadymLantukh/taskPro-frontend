import { useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import dayjs from 'dayjs';
import clsx from 'clsx';

import Button from '../Button/Button.jsx';
import CustomDatePicker from '../CustomDatePicker/CustomDatePicker.jsx';
import PriorityPicker from '../PriorityPicker/PriorityPicker.jsx';

import { addCardSchema } from '../../helpers/addCardSchema.js';

import s from '../AddCard/AddCard.module.css';
import t from '../../styles/Forms.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentTask } from '../../redux/tasks/tasksSelectors.js';
import { updateTask } from '../../redux/tasks/tasksOperations.js';

const EditCard = () => {
  const dispatch = useDispatch();
  const card = useSelector(selectCurrentTask);

  const [selectedPriority, setSelectedPriority] = useState(card.priority);
  const [selectedDate, setSelectedDate] = useState(
    card.deadline ? new Date(card.deadline) : null
  );

  const initialValues = {
    title: card.title,
    description: card.description,
    priority: card.priority || 'none',
    deadline: card.deadline ? new Date(card.deadline) : null,
  };

  const handlePriorityChange = value => {
    setSelectedPriority(value);
  };

  const handleSubmit = (values, action) => {
    const task = {
      ...values,
      priority: selectedPriority,
      deadline: selectedDate ? dayjs(selectedDate).toISOString() : null,
    };

    dispatch(
      updateTask({
        task,
        id: card._id,
      })
    );

    action.resetForm();
  };

  return (
    <div className={s.wrapper}>
      <h3 className={s.title}>Edit card</h3>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={addCardSchema}
      >
        {({ setFieldValue }) => (
          <Form className={t.form}>
            <div className={t.fieldBox}>
              <Field name="title" className={t.input} placeholder="Title" />
              <ErrorMessage
                name="title"
                component="span"
                className={t.errorMessage}
              />
            </div>
            <div className={t.fieldBox}>
              <Field
                as="textarea"
                name="description"
                className={t.textarea}
                placeholder="Description"
              />
              <ErrorMessage
                name="description"
                component="span"
                className={t.errorMessage}
              />
            </div>
            <label className={s.label}>
              Label color
              <PriorityPicker
                selectedValue={selectedPriority}
                onChange={handlePriorityChange}
              />
            </label>
            <label className={clsx(s.label, s.labelDatePicker)}>
              Deadline
              <CustomDatePicker
                value={selectedDate}
                onChange={date => {
                  setSelectedDate(date);
                  setFieldValue('deadline', date ? new Date(date) : null);
                }}
              />
            </label>

            <Button text="Edit" showIcon type="submit" />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditCard;
