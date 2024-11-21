import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import dayjs from 'dayjs';
import clsx from 'clsx';

import Button from '../Button/Button.jsx';
import CustomDatePicker from '../CustomDatePicker/CustomDatePicker.jsx';
import PriorityPicker from '../PriorityPicker/PriorityPicker.jsx';

import { addCardSchema } from '../../helpers/addCardSchema.js';
import { addTask } from '../../redux/tasks/tasksOperations.js';
import {
  selectIsError,
  selectIsLoading,
} from '../../redux/tasks/tasksSelectors.js';

import s from './AddCard.module.css';
import t from '../../styles/Forms.module.css';

const AddCard = ({ boardId, columnId }) => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  const initialValues = {
    title: '',
    description: '',
    priority: 'Without',
    deadline: null,
  };

  const [selectedPriority, setSelectedPriority] = useState('Without');
  const [selectedDate, setSelectedDate] = useState(null);

  const handlePriorityChange = value => {
    setSelectedPriority(value);
  };

  const handleSubmit = (values, action) => {
    const task = {
      ...values,
      priority: selectedPriority,
      columnId,
      boardId,
    };

    if (selectedDate) task.deadline = dayjs(selectedDate).toISOString();

    dispatch(addTask(task));

    action.resetForm();
    setSelectedPriority('Without');
    setSelectedDate(null);
  };

  return (
    <div className={s.wrapper}>
      <h3 className={s.title}>Add card</h3>
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
                  setFieldValue(
                    'deadline',
                    date ? dayjs(date).format('YYYY-MM-DD') : null
                  );
                }}
                disablePast
              />
            </label>

            <Button text="Add" showIcon type="submit" />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddCard;
