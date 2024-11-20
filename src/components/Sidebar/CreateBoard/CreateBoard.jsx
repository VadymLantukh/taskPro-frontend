import s from './CreateBoard.module.css';
import Icon from '../../Icon/Icon.jsx';
import { useState } from 'react';
import Modal from '../../ModalWrapper/ModalWrapper.jsx';
import NewBoard from '../../NewBoard/NewBoard.jsx';
import Button from '../../Button/Button.jsx';

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
      {/* <Button
        onClick={handleOpenModal}
        showIcon={false}
        className={s.createBoardBtn}
      /> */}

      {isModalOpen && (
        <Modal open={isModalOpen} onClose={handleCloseModal}>
          <NewBoard />
        </Modal>
      )}
    </div>
  );
};

export default CreateBoard;

// <Button onClick={handleClick} showIcon={true} className={s.btnCreate} />;
