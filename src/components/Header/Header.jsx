import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Icon from '../Icon/Icon';
import HeaderTheme from '../HeaderTheme/HeaderTheme';
import { selectUser } from '../../redux/auth/authSelectors';
import { getUserThunk } from '../../redux/auth/authOperations';
import { useScreenWidth } from '../../hooks/useScreenWidth';
import EditProfile from '../EditProfile/EditProfile';

import s from './Header.module.css';

const Header = ({ onBurgerClick }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const { isLargeScreen } = useScreenWidth();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (!user.name) {
      dispatch(getUserThunk());
    }
  }, [dispatch, user.name]);

  return (
    <header className={s.header}>
      {!isLargeScreen && (
        <button onClick={() => onBurgerClick()}>
          <Icon name={'icon-menu'} className={s.menu_icon} />
        </button>
      )}
      <div className={s.theme_user_wrap}>
        <HeaderTheme />

        <button className={s.profile} onClick={handleOpen}>
          <p className={s.userName}>{user.name || 'Loading...'}</p>
          {user?.avatar ? (
            <img
              src={user.avatar}
              alt="user photo"
              className={s.profile_image}
            />
          ) : (
            <div className={s.userIconWrapper}>
              <Icon name={'icon-user'} className={s.userIcon} />
            </div>
          )}
        </button>
      </div>
      <EditProfile open={open} onClose={handleClose} user={user} />
    </header>
  );
};

export default Header;
