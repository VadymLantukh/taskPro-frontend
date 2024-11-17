import TaskItem from '../TaskItem/TaskItem';
import s from './TasksList.module.css';
const TasksList = () => {
  return (
    <div className={s.taskItem}>
      <TaskItem />
    </div>
  );
};

export default TasksList;
