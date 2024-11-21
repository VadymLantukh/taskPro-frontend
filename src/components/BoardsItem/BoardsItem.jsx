import { NavLink } from 'react-router-dom';
import s from './BoardsItem.module.css';
import Icon from '../Icon/Icon';
import { deleteBoard, updateBoard } from '../../redux/board/boardOperations';
import { useDispatch } from 'react-redux';
const BoardsItem = ({ title, id, icon, backgroundImage }) => {
  const board = { title, id, icon, backgroundImage };
  const dispatch = useDispatch();
  return (
    <li>
      <NavLink to={id} className={s.list_item}>
        <Icon name={icon} fill="none" width={18} height={18} />
        <p className={s.title}>{title}</p>
        <button onClick={() => dispatch(updateBoard(board))}>
          <Icon name={'icon-pencil'} fill="none" width={16} height={16} />
        </button>
        <button onClick={() => dispatch(deleteBoard(id))}>
          <Icon name={'icon-trash'} fill="none" width={16} height={16} />
        </button>
      </NavLink>
    </li>
  );
};

export default BoardsItem;
