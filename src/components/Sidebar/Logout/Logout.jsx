import Icon from '../../Icon/Icon.jsx';
import s from './Logout.module.css';
import { useDispatch } from 'react-redux';
import { logOut } from '../../../redux/auth/authOperations.js';

const LogOut = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
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
