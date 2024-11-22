import { NavLink } from 'react-router-dom';
import s from './BoardsItem.module.css';
import Icon from '../Icon/Icon';
import { deleteBoard, updateBoard } from '../../redux/board/boardOperations';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import Modal from '../ModalWrapper/ModalWrapper';
import EditBoard from '../EditBoard/EditBoard';

const BoardsItem = ({ title, id, icon, backgroundImage }) => {
  const board = { id, title, icon, background: backgroundImage };
  const dispatch = useDispatch();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false); 


  const handleEditOpen = () => setIsEditModalOpen(true);
  const handleEditClose = () => setIsEditModalOpen(false);

  return (
    <>
    <li>
      <NavLink to={id} className={s.list_item}>
        <Icon name={icon} fill="none" width={18} height={18} />
        <p className={s.title}>{title}</p>
        <button onClick={handleEditOpen}>
          <Icon name={'icon-pencil'} fill="none" width={16} height={16} />
        </button>
        <button onClick={() => dispatch(deleteBoard(id))}>
          <Icon name={'icon-trash'} fill="none" width={16} height={16} />
        </button>
      </NavLink>
    </li>
    {isEditModalOpen && (
      <Modal open={isEditModalOpen} onClose={handleEditClose}>
        <EditBoard
          boardToEdit={board}
          onClose={handleEditClose}
        />
      </Modal>
    )}
    </>
  );
};

export default BoardsItem;
