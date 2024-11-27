import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import dayjs from 'dayjs';
import clsx from 'clsx';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';

import Button from '../Button/Button.jsx';
import CustomDatePicker from '../CustomDatePicker/CustomDatePicker.jsx';
import PriorityPicker from '../PriorityPicker/PriorityPicker.jsx';

import { addCardSchema } from '../../helpers/addCardSchema.js';
import {
  selectCurrentTask,
  selectIsError,
  selectIsLoading,
} from '../../redux/tasks/tasksSelectors.js';
import { updateTask } from '../../redux/tasks/tasksOperations.js';

import s from '../AddCard/AddCard.module.css';
import t from '../../styles/Forms.module.css';

dayjs.extend(isSameOrAfter);

const EditCard = ({ onSuccess }) => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const card = useSelector(selectCurrentTask);

  const [formActions, setFormActions] = useState(null);
  const [selectedPriority, setSelectedPriority] = useState(card.priority);
  const [selectedDate, setSelectedDate] = useState(
    card.deadline ? new Date(card.deadline) : null
  );

  useEffect(() => {
    if (formActions && !isLoading && !isError) {
      formActions.resetForm();
      setSelectedPriority('Without');
      setSelectedDate(null);
      setFormActions(null);

      if (onSuccess) onSuccess();
    }
  }, [isLoading, isError, formActions, onSuccess]);

  const initialValues = {
    title: card.title,
    description: card.description,
    priority: card.priority || 'none',
    deadline: card.deadline ? new Date(card.deadline) : null,
  };

  const handlePriorityChange = value => {
    setSelectedPriority(value);
  };

  const handleSubmit = (values, actions) => {
    let updatedDeadline =
      selectedDate && dayjs(selectedDate).isSameOrAfter(dayjs().startOf('day'))
        ? dayjs(selectedDate).toISOString()
        : null;

    const task = {
      ...values,
      priority: selectedPriority,
    };

    if (updatedDeadline) {
      task.deadline = updatedDeadline;
    } else {
      delete task.deadline;
    }

    dispatch(
      updateTask({
        task,
        id: card._id,
      })
    );

    setFormActions(actions);
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
                  const validDate =
                    date && dayjs(date).isSameOrAfter(dayjs().startOf('day'))
                      ? date
                      : null;
                  setSelectedDate(validDate);
                  setFieldValue('deadline', date ? new Date(date) : null);
                }}
                disablePast
              />
            </label>

            <Button text="Edit" showIcon type="submit" isLoading={isLoading} />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditCard;
