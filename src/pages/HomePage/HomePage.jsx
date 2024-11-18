import { useState } from 'react';

import ModalWrapper from '../../components/ModalWrapper/ModalWrapper';
import s from './HomePage.module.css';
import AddCard from '../../components/AddCard/AddCard';

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <div className={s.homePage}>
        {/* HomePage */}
        <button onClick={handleOpenModal}>Open Add Card</button>
      </div>
      <ModalWrapper open={isModalOpen} onClose={handleCloseModal}>
        <AddCard />
      </ModalWrapper>
    </>
  );
};

export default HomePage;
