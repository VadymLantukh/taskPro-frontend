import Icon from '../Icon/Icon';
import s from './HeaderDashboard.module.css';
import { useSelector } from 'react-redux';
import { selectBoard } from '../../redux/board/boardSelectors.js';

export const HeaderDashboard = () => {
  const board = useSelector(selectBoard);
  const title = board?.title ?? ""

  return (
    <div className={s.container}>
      <h2 className={s.title}>{title}</h2>
      <button className={s.button}>
        <Icon name="icon-filter" width={16} height={16} className={s.icon}/>
        Filters
      </button>
  </div>
  );
};

export default HeaderDashboard;
