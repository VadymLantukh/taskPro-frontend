import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactEllipsisText from 'react-ellipsis-text';
import clsx from 'clsx';

import Icon from '../Icon/Icon';
import ModalWrapper from '../../components/ModalWrapper/ModalWrapper';
import EditCard from '../../components/EditCard/EditCard';
import MoveTaskMenu from '../MoveTaskMenu/MoveTaskMenu';

import { deleteTask, updateTask } from '../../redux/tasks/tasksOperations';
import { setCurrentTask } from '../../redux/tasks/tasksSlice';
import { selectColumnsForBoard } from '../../redux/columns/columnsSelectors';

import s from './TaskItem.module.css';

const TaskItem = ({ tasks, boardId }) => {
  const dispatch = useDispatch();
  const columns = useSelector(state => selectColumnsForBoard(state, boardId));

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [taskToEdit, setTaskToEdit] = useState(null);

  useEffect(() => {
    return () => {
      setAnchorEl(null);
    };
  }, []);

  const handleOpenModal = taskCard => {
    dispatch(setCurrentTask(taskCard));
    setIsModalOpen(true);
  };

  const handleCloseModal = () => setIsModalOpen(false);

  const handleOpenMenu = (event, task) => {
    setAnchorEl(event.currentTarget);
    setTaskToEdit(task);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setTaskToEdit(null);
  };

  const handleMoveTask = newColumnId => {
    const task = {
      columnId: newColumnId,
    };

    dispatch(
      updateTask({
        task,
        id: taskToEdit._id,
      })
    );

    handleCloseMenu();
  };

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
        taskArr.map(taskCard => (
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
              <div className={s.task_container_wrapper}>
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
              </div>
              {taskCard.deadline && (
                <div className={s.task_container_wrapper}>
                  <span className={s.wrapper_title}>Deadline</span>
                  <div className={s.task_deadline}>
                    <span>{formatDate(taskCard.deadline)}</span>
                  </div>
                </div>
              )}
              <div className={s.actions}>
                {isDeadlineToday(taskCard.deadline) && (
                  <Icon className={s.bell_icon} name="icon-bell" />
                )}
                <button
                  className={s.action_button}
                  onClick={event => handleOpenMenu(event, taskCard)}
                >
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
        ))}
      <ModalWrapper open={isModalOpen} onClose={handleCloseModal}>
        <EditCard onSuccess={handleCloseModal} />
      </ModalWrapper>
      <MoveTaskMenu
        columns={columns}
        anchorEl={anchorEl}
        taskToEdit={taskToEdit}
        handleCloseMenu={handleCloseMenu}
        handleMoveTask={handleMoveTask}
      />
    </>
  );
};

export default TaskItem;
