import { NavLink } from 'react-router-dom';
import s from './BoardsItem.module.css';
import { addSvg } from '../../utils/useSvg';
const BoardsItem = ({ title, id, icon }) => {
  return (
    <li>
      <NavLink to={id} className={s.list_item}>
        {addSvg(icon, 18, s.icon)}
        <p className={s.title}>{title}</p>
        <button>{addSvg('icon-pencil', 16)}</button>
        <button>{addSvg('icon-trash', 16)}</button>
      </NavLink>
    </li>
  );
};

export default BoardsItem;
