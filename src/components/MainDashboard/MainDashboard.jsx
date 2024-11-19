import { useState } from 'react';
import { useToggle } from '../../hooks/useToggle.js';
import Button from '../Button/Button.jsx';
import Column from '../Column/Column.jsx';

import s from './MainDashboard.module.css';

export const MainDashboard = () => {
  const { open, handleOpen } = useToggle(); // TODO Connect this to the modal AddColumn
  const [columns, setColumns] = useState([]);

  const handleClick = () => {
    // TODO temporary
    const newHeading = `New Column ${columns.length + 1}`;
    setColumns(prev => [...prev, newHeading]);
  };

  const isEmptyColumn = false; // TODO temporary

  return (
    <>
      {isEmptyColumn && (
        <Button
          showIcon={true}
          text="Add another column"
          className={s.button}
          onClick={handleClick}
        />
      )}
      <div className={s['columns-container']}>
        {columns.map((heading, index) => (
          <Column key={index} />
        ))}
      </div>
    </>
  );
};

export default MainDashboard;
