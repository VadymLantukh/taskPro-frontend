import { useSelector } from 'react-redux';
import TaskItem from '../TaskItem/TaskItem';
import s from './TasksList.module.css';
import { selectTasksForColumn } from '../../redux/tasks/tasksSelectors';

const TasksList = ({ columnId }) => {
  const tasks = useSelector(state => selectTasksForColumn(state, columnId));
  console.log(tasks);

  return (
    <div className={s.taskItem}>
      <TaskItem tasks={tasks} />
    </div>
  );
};

export default TasksList;
