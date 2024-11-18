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
                  <Icon
                    name="icon-bell"
                    width="16"
                    height="16"
                    fill="none"
                    stroke="#BEDBB0"
                  />
                )}
                <button className={s.action_button}>
                  <svg width="16" height="16" fill="none" stroke="#161616">
                    <use href={icons + '#icon-house'} />
                  </svg>
                </button>
                <button className={s.action_button}>
                  <svg width="16" height="16" fill="none" stroke="#161616">
                    <use href={icons + '#icon-pencil'} />
                  </svg>
                </button>
                <button className={s.action_button}>
                  <Icon
                    name="icon-trash"
                    width="16"
                    height="16"
                    fill="none"
                    stroke="#161616"
                  />
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
