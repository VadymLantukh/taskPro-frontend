import { useState } from 'react';

import Modal from '../../components/ModalWrapper/ModalWrapper.jsx';
import NewBoard from '../../components/NewBoard/NewBoard.jsx';

import s from './HomePage.module.css';

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className={s.homePage_container}>
      <p className={s.text}>
        Before starting your project, it is essential&nbsp;
        <button className={s.btn} onClick={handleOpenModal}>
          to create a board&nbsp;
        </button>
        to visualize and track all the necessary tasks and milestones. This
        board serves as a powerful tool to organize the workflow and ensure
        effective collaboration among team members.
      </p>
      {isModalOpen && (
        <Modal open={isModalOpen} onClose={handleCloseModal}>
          <NewBoard onClose={handleCloseModal} />
        </Modal>
      )}
    </div>
  );
};

export default HomePage;
