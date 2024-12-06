import { useState } from 'react';

import Icon from '../../Icon/Icon.jsx';
import Modal from '../../ModalWrapper/ModalWrapper.jsx';
import NewBoard from '../../NewBoard/NewBoard.jsx';

import s from './CreateBoard.module.css';

const CreateBoard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className={s.createNew}>
      <p className={s.createText}>Create a new board</p>
      <button className={s.createBoardBtn} onClick={handleOpenModal}>
        <Icon name="icon-plus" className={s.btnPlus} />
      </button>
      {isModalOpen && (
        <Modal open={isModalOpen} onClose={handleCloseModal}>
          <NewBoard onClose={handleCloseModal} />
        </Modal>
      )}
    </div>
  );
};

export default CreateBoard;
