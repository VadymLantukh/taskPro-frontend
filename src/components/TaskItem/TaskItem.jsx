import ReactEllipsisText from 'react-ellipsis-text';
import icons from '../../images/icons.svg';
import data from '../../taskTest.json';
import s from './TaskItem.module.css';
import clsx from 'clsx';
import { IconBase } from 'react-icons';
import Icon from '../Icon/Icon';

const TaskItem = () => {
  const taskArr = data;

  const getPriorityClass = priority => {
    const priorityMap = {
      without: s.priority_without,
      low: s.priority_low,
      medium: s.priority_medium,
      high: s.priority_high,
    };
    return priorityMap[priority.toLowerCase()] || s.priority_without;
  };

  const parseDeadline = dateString => {
    const [day, month, year] = dateString.split('/');
    return new Date(year, month - 1, day);
  };

  const isDeadlineToday = deadlineString => {
    const today = new Date();
    const deadline = parseDeadline(deadlineString);

    return (
      today.getDate() === deadline.getDate() &&
      today.getMonth() === deadline.getMonth() &&
      today.getFullYear() === deadline.getFullYear()
    );
  };

  return (
    <>
      {taskArr.map(taskCard => {
        return (
          <div
            key={taskCard.id}
            className={clsx(s.card_item, getPriorityClass(taskCard.priority))}
          >
            <h4 className={s.task_title}>{taskCard.title}</h4>
            <ReactEllipsisText
              className={s.task_description}
              text={taskCard.description}
              length={'90'}
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
              <div className={s.task_meta}>
                <span>{taskCard.deadline}</span>
              </div>
              <div className={s.actions}>
                {isDeadlineToday(taskCard.deadline) && (
                  <Icon className={s.bell_icon} name="icon-bell" />
                )}
                <button className={s.action_button}>
                  <Icon className={s.icon} name="icon-right" />
                </button>
                <button className={s.action_button}>
                  <Icon className={s.icon} name="icon-pencil" />
                </button>
                <button className={s.action_button}>
                  <Icon className={s.icon} name="icon-trash" />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TaskItem;
