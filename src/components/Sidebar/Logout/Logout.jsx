import { useDispatch } from 'react-redux';

import Icon from '../../Icon/Icon.jsx';
import { logOutThunk } from '../../../redux/auth/authOperations.js';

import s from './Logout.module.css';

const LogOut = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOutThunk());
  };
  return (
    <div className={s.sidedbarLogout}>
      <button className={s.logoutBtn} onClick={handleLogOut}>
        <Icon name="icon-logout" className={s.iconlogout} />
        <p className={s.textLogout}>Log out</p>
      </button>
    </div>
  );
};

export default LogOut;
