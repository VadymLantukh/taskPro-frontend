import HeaderColumn from './HeaderColumn/HeaderColumn.jsx';
import Button from '../Button/Button.jsx';
import TasksList from '../TasksList/TasksList.jsx';

import s from "./Column.module.css"

export const Column = () => {

  return (
    <div className={s.container}>
      <HeaderColumn />
      {/*<TasksList /> */}
      <div className={s["tasks-list"]}>
        {new Array(8).fill(0).map((_, index) => (
          <div
            key={index}
            className={s.item}
          >
            Task {index + 1}
          </div>
        ))}
      </div>
      <Button text="Add another card" showIcon={true} />
    </div>
  );
};

export default Column;
