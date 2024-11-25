import { useSelector } from 'react-redux';
import TaskItem from '../TaskItem/TaskItem';
import s from './TasksList.module.css';
import { selectTasksForColumn } from '../../redux/tasks/tasksSelectors';

const TasksList = ({ columnId, boardId }) => {
  const tasks = useSelector(state => selectTasksForColumn(state, columnId));

  return (
    <div className={s.taskItem}>
      <TaskItem tasks={tasks} boardId={boardId} />
    </div>
  );
};

export default TasksList;
