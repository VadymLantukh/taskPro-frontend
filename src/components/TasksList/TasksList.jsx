import TaskItem from '../TaskItem/TaskItem';
import s from './TasksList.module.css';
const TasksList = ({columnId}) => {
  return (
    <div className={s.taskItem}>
      <TaskItem />
    </div>
  );
};

export default TasksList;
