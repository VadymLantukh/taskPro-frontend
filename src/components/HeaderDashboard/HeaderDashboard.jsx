import { useSelector } from 'react-redux';
import { selectBoard } from '../../redux/board/boardSelectors.js';
import { useToggle } from '../../hooks/useToggle.js';

import Icon from '../Icon/Icon';
import Filter from '../Filter/Filter.jsx';

import s from './HeaderDashboard.module.css';

export const HeaderDashboard = () => {
  const {open, handleOpen, handleClose} = useToggle()

  const board = useSelector(selectBoard);
  const title = board?.title ?? ""


  return (
    <div className={s.container}>
      <h2 className={s.title}>{title}</h2>
      <button className={s.button} onClick={()=> handleOpen()}>
        <Icon name="icon-filter" width={16} height={16} className={s.icon}/>
        Filters
      </button>
      {open && <Filter open={open} handleClose={handleClose}/>}
  </div>
  );
};

export default HeaderDashboard;
