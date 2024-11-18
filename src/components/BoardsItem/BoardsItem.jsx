import { NavLink } from 'react-router-dom';
import s from './BoardsItem.module.css';
import Icon from '../Icon/Icon';
const BoardsItem = ({ title, id, icon }) => {
  return (
    <li>
      <NavLink to={id} className={s.list_item}>
        <Icon name={icon} fill="none" width={18} height={18} />
        <p className={s.title}>{title}</p>
        <button onClick={() => console.log(`EDIT ${title} BOARD`)}>
          <Icon name={'icon-pencil'} fill="none" width={16} height={16} />
        </button>
        <button onClick={() => console.log(`DELETE ${title} BOARD`)}>
          <Icon name={'icon-trash'} fill="none" width={16} height={16} />
        </button>
      </NavLink>
    </li>
  );
};

export default BoardsItem;
