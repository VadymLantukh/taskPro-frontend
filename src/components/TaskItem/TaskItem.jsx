import { useState } from 'react';
import { useDispatch } from 'react-redux';
import ReactEllipsisText from 'react-ellipsis-text';
import clsx from 'clsx';

import Icon from '../Icon/Icon';
import ModalWrapper from '../../components/ModalWrapper/ModalWrapper';
import EditCard from '../../components/EditCard/EditCard';

import { deleteTask } from '../../redux/tasks/tasksOperations';
import { setCurrentTask } from '../../redux/tasks/tasksSlice';

import s from './TaskItem.module.css';

const TaskItem = ({ tasks }) => {
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = taskCard => {
    dispatch(setCurrentTask(taskCard));

    setIsModalOpen(true);
  };
  const handleCloseModal = () => setIsModalOpen(false);

  const taskArr = tasks;

  const getPriorityClass = priority => {
    const priorityMap = {
      without: s.priority_without,
      low: s.priority_low,
      medium: s.priority_medium,
      high: s.priority_high,
    };
    return priorityMap[priority.toLowerCase()] || s.priority_without;
  };

  // const parseDeadline = dateString => {
  //   const [day, month, year] = dateString.split('/');
  //   return new Date(year, month - 1, day);
  // };

  // const isDeadlineToday = deadlineString => {
  //   const today = new Date();
  //   const deadline = parseDeadline(deadlineString);

  //   return (
  //     today.getDate() === deadline.getDate() &&
  //     today.getMonth() === deadline.getMonth() &&
  //     today.getFullYear() === deadline.getFullYear()
  //   );
  // };

  return (
    <>
      {taskArr?.length > 0 &&
        taskArr.map(taskCard => {
          return (
            <div
              key={taskCard._id}
              className={clsx(s.card_item, getPriorityClass(taskCard.priority))}
            >
              <h4 className={s.task_title}>{taskCard.title}</h4>
              <ReactEllipsisText
                className={s.task_description}
                text={taskCard.description}
                length={90}
              />
              <span className={s.separator}></span>
              <div className={s.task_footer}>
                <div
                  className={clsx(
                    s.task_priority,
                    getPriorityClass(taskCard.priority)
                  )}
                >
                  <span>{taskCard.priority}</span>
                </div>
                {taskCard.deadline && (
                  <div className={s.task_meta}>
                    <span>{taskCard.deadline}</span>
                  </div>
                )}
                <div className={s.actions}>
                  {/* {isDeadlineToday(taskCard.deadline) && (
                    <Icon className={s.bell_icon} name="icon-bell" />
                  )} */}
                  <button className={s.action_button}>
                    <Icon className={s.icon} name="icon-right" />
                  </button>
                  <button
                    className={s.action_button}
                    onClick={() => handleOpenModal(taskCard)}
                  >
                    <Icon className={s.icon} name="icon-pencil" />
                  </button>
                  <button
                    onClick={() => {
                      dispatch(
                        deleteTask({
                          id: taskCard._id,
                          columnId: taskCard.columnId,
                        })
                      );
                    }}
                    className={s.action_button}
                  >
                    <Icon className={s.icon} name="icon-trash" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      <ModalWrapper open={isModalOpen} onClose={handleCloseModal}>
        <EditCard onSuccess={handleCloseModal} />
      </ModalWrapper>
    </>
  );
};

export default TaskItem;
