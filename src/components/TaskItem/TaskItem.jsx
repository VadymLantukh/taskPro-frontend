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

  const formatDate = isoDate => {
    const date = new Date(isoDate);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };

  const isDeadlineToday = isoDate => {
    const deadlineDate = new Date(isoDate).toDateString();
    const todayDate = new Date().toDateString();
    return deadlineDate === todayDate;
  };

  const getPriorityClass = priority => {
    const priorityMap = {
      without: s.priority_without,
      low: s.priority_low,
      medium: s.priority_medium,
      high: s.priority_high,
    };
    return priorityMap[priority.toLowerCase()] || s.priority_without;
  };

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
                <container className={s.task_container_wrapper}>
                  <span className={s.wrapper_title}>Priority</span>
                  <div
                    className={clsx(
                      s.task_priority,
                      getPriorityClass(taskCard.priority)
                    )}
                  >
                    <span className={s.task_priority_text}>
                      {taskCard.priority}
                    </span>
                  </div>
                </container>
                {taskCard.deadline && (
                  <container className={s.task_container_wrapper}>
                    <span className={s.wrapper_title}>Deadline</span>
                    <div className={s.task_deadline}>
                      <span>{formatDate(taskCard.deadline)}</span>
                    </div>
                  </container>
                )}
                <div className={s.actions}>
                  {isDeadlineToday(taskCard.deadline) && (
                    <Icon className={s.bell_icon} name="icon-bell" />
                  )}
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
