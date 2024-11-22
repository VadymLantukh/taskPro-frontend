import { useSelector } from 'react-redux';
import { selectBoard } from '../../redux/board/boardSelectors.js';
import { selectColumnsForBoard } from '../../redux/columns/columnsSelectors.js';
import { useToggle } from '../../hooks/useToggle.js';

import Button from '../Button/Button.jsx';
import Column from '../Column/Column.jsx';
import Modal from '../ModalWrapper/ModalWrapper.jsx';
import AddColumn from '../AddColumn/AddColumn.jsx';

import s from './MainDashboard.module.css';

export const MainDashboard = () => {
  const {open, handleOpen,handleClose} = useToggle()

  const board = useSelector(selectBoard);
  const columns = useSelector(state => selectColumnsForBoard(state, board.id));
  const isEmptyColumn = board?.columns?.length === 0;

  return (
    <>
      {isEmptyColumn && (
        <div>
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
      )}
      <div className={s['columns-container']}>
        {columns.map(column => (
          <Column key={column._id} column={column} />
        ))}
      </div>
    </>
  );
};

export default MainDashboard;
