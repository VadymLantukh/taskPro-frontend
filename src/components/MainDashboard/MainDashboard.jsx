import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import Button from '../Button/Button.jsx';
import Column from '../Column/Column.jsx';
import Modal from '../ModalWrapper/ModalWrapper.jsx';
import AddColumn from '../AddColumn/AddColumn.jsx';

import { selectBoard } from '../../redux/board/boardSelectors.js';
import { selectColumnsForBoard } from '../../redux/columns/columnsSelectors.js';
import { useToggle } from '../../hooks/useToggle.js';

import s from './MainDashboard.module.css';
import t from '../TasksList/TasksList.module.css';

export const MainDashboard = () => {
  const { open, handleOpen, handleClose } = useToggle();

  const board = useSelector(selectBoard);
  const columns = useSelector(state => selectColumnsForBoard(state, board.id));

  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      const handleWheel = event => {
        const isVerticalScrollTarget = event.target.closest(`.${t.taskItem}`);
        const targetElement = event.target.closest(`.${t.taskItem}`);

        if (
          targetElement &&
          targetElement.scrollHeight > targetElement.clientHeight
        ) {
          if (isVerticalScrollTarget) {
            return;
          }
        }
        event.preventDefault();
        container.scrollLeft += event.deltaY;
      };

      container.addEventListener('wheel', handleWheel);

      return () => {
        container.removeEventListener('wheel', handleWheel);
      };
    }
  }, []);

  return (
    <div className={s['columns-container']} ref={containerRef}>
      {columns.map(column => (
        <Column key={column._id} column={column} />
      ))}
      <Button
        showIcon={true}
        text="Add another column"
        className={s.button}
        onClick={handleOpen}
      />
      {open && (
        <Modal open={open} onClose={handleClose}>
          <AddColumn onClose={handleClose} />
        </Modal>
      )}
    </div>
  );
};

export default MainDashboard;
