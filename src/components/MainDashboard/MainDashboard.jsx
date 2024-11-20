import { useSelector } from 'react-redux';
import { selectBoard } from '../../redux/board/boardSelectors.js';
import { selectColumnsForBoard } from '../../redux/columns/columnsSelectors.js';

import Button from '../Button/Button.jsx';
import Column from '../Column/Column.jsx';

import s from './MainDashboard.module.css';
import { useState } from 'react';
import Modal from '../ModalWrapper/ModalWrapper.jsx';
import AddColumn from '../AddColumn/AddColumn.jsx';

export const MainDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

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
            onClick={handleOpenModal}
          />
          {isModalOpen && (
            <Modal open={isModalOpen} onClose={handleCloseModal}>
              <AddColumn />
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
