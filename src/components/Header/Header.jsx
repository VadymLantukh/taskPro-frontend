import Icon from '../Icon/Icon';
import HeaderTheme from '../HeaderTheme/HeaderTheme';
import s from './Header.module.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/authSelectors';
import { useScreenWidth } from '../../hooks/useScreenWidth';

const Header = ({ onBurgerClick }) => {
  const user = useSelector(selectUser);
  const { isLargeScreen } = useScreenWidth();

  return (
    <header className={s.header}>
      {!isLargeScreen && (
        <button onClick={() => onBurgerClick()}>
          <Icon name={'icon-menu'} className={s.menu_icon} />
        </button>
      )}
      <div className={s.theme_user_wrap}>
        <HeaderTheme />
        <div className={s.profile}>
          <p className={s.userName}>{user.name}</p>
          <button>
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
      </div>
    </header>
  );
};

export default Header;
