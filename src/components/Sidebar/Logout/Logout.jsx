import svg from '../../../images/icons.svg';
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
        <svg className={s.iconlogout}>
          <use href={`${svg}#icon-logout`}></use>
        </svg>
        <p className={s.textLogout}>Log out</p>
      </button>
    </div>
  );
};

export default LogOut;
