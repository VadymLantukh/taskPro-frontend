import { useToggle } from '../../hooks/useToggle.js';

import HeaderColumn from './HeaderColumn/HeaderColumn.jsx';
import Button from '../Button/Button.jsx';
import TasksList from '../TasksList/TasksList.jsx';
import ModalWrapper from '../../components/ModalWrapper/ModalWrapper';
import AddCard from '../../components/AddCard/AddCard';

import s from './Column.module.css';

export const Column = ({ column }) => {
  const { open, handleOpen, handleClose } = useToggle();
  const title = column?.title ?? '';

  return (
    <div className={s.container}>
      <HeaderColumn title={title} columnId={column?._id} />
      <TasksList columnId={column?._id} boardId={column?.boardId} />
      <Button text="Add another card" showIcon={true} onClick={handleOpen} />
      <ModalWrapper open={open} onClose={handleClose}>
        <AddCard
          boardId={column?.boardId}
          columnId={column?._id}
          onSuccess={handleClose}
        />
      </ModalWrapper>
    </div>
  );
};

export default Column;
