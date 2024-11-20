import HeaderColumn from './HeaderColumn/HeaderColumn.jsx';
import Button from '../Button/Button.jsx';
import TasksList from '../TasksList/TasksList.jsx';

import s from "./Column.module.css"

export const Column = ({column}) => {
  const title = column?.title ?? ""

  return (
    <div className={s.container}>
      <HeaderColumn title={title}/>
      <TasksList columnId={column?._id }/>
      <Button text="Add another card" showIcon={true} />
    </div>
  );
};

export default Column;
