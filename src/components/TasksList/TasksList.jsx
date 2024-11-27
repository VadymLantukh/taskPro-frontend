import { useSelector } from 'react-redux';

import TaskItem from '../TaskItem/TaskItem';
import { selectTasksForColumn } from '../../redux/tasks/tasksSelectors';

import s from './TasksList.module.css';

const TasksList = ({ columnId, boardId }) => {
  const tasks = useSelector(state => selectTasksForColumn(state, columnId));

  return (
    <div className={s.taskItem}>
      <TaskItem tasks={tasks} boardId={boardId} />
    </div>
  );
};

export default TasksList;
