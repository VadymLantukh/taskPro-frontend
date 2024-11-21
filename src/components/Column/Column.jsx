import { useState } from 'react';

import HeaderColumn from './HeaderColumn/HeaderColumn.jsx';
import Button from '../Button/Button.jsx';
import TasksList from '../TasksList/TasksList.jsx';
import ModalWrapper from '../../components/ModalWrapper/ModalWrapper';
import AddCard from '../../components/AddCard/AddCard';

import s from './Column.module.css';

export const Column = ({ column }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const title = column?.title ?? '';

  return (
    <div className={s.container}>
      <HeaderColumn title={title} columnId={column?._id} />
      <TasksList columnId={column?._id} />
      <Button
        text="Add another card"
        showIcon={true}
        onClick={handleOpenModal}
      />
      <ModalWrapper open={isModalOpen} onClose={handleCloseModal}>
        <AddCard boardId={column?.boardId} columnId={column?._id} />
      </ModalWrapper>
    </div>
  );
};

export default Column;
