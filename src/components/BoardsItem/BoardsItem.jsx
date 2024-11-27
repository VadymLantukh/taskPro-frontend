import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';

import { selectIsLoading, selectUser } from '../../redux/auth/authSelectors.js';
import Icon from '../Icon/Icon';
import { deleteBoard } from '../../redux/board/boardOperations';
import Modal from '../ModalWrapper/ModalWrapper';
import EditBoard from '../EditBoard/EditBoard';
import { useToggle } from '../../hooks/useToggle.js';
import { setIsSidebarOpen } from '../../redux/auth/authSlice.js';
import { truncateString } from '../../utils/cateString.js';

import s from './BoardsItem.module.css';

const buildLinkClass = ({ isActive }) => {
  return clsx(s.list_item, isActive && s.list_item_active);
};

const BoardsItem = ({ title, id, icon, backgroundImage }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { boards } = useSelector(selectUser);
  const { open, handleClose, handleOpen } = useToggle();

  const isLoading = useSelector(selectIsLoading);

  const board = { id, title, icon, background: backgroundImage };

  const handleDeleteBoard = async () => {
    const currentIndex = boards.findIndex(board => board._id === id);
    const previousBoard =
      currentIndex > 0 ? boards[currentIndex - 1] : boards[currentIndex + 1];

    await dispatch(deleteBoard(id));

    if (boards.length === 1) {
      navigate('/home');
    } else if (previousBoard) {
      navigate(`/home/${previousBoard._id}`);
    }
  };

  return (
    <>
      <li>
        <NavLink
          to={id}
          className={buildLinkClass}
          onClick={() => dispatch(setIsSidebarOpen(false))}
        >
          <Icon
            name={icon}
            width={18}
            height={18}
            fill="none"
            className={s.board_style}
          />
          <p className={s.title}>{truncateString(title)}</p>
          <button
            onClick={e => {
              e.stopPropagation();
              e.preventDefault();
              handleOpen();
            }}
          >
            <Icon
              name={'icon-pencil'}
              className={s.icon_color}
              width={16}
              height={16}
            />
          </button>
          <button
            onClick={e => {
              e.stopPropagation();
              e.preventDefault();
              handleDeleteBoard();
            }}
          >
            {isLoading ? (
              <div className={s.loader}></div>
            ) : (
              <Icon
                name={'icon-trash'}
                className={s.icon_color}
                width={16}
                height={16}
              />
            )}
          </button>
        </NavLink>
      </li>
      {open && (
        <Modal open={open} onClose={handleClose}>
          <EditBoard boardToEdit={board} onClose={handleClose} />
        </Modal>
      )}
    </>
  );
};

export default BoardsItem;
