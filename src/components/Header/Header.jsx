import Icon from '../Icon/Icon';
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <div>
        <Icon name={'icon-menu'} className={s.menu_icon} />
      </div>
      <div className={s.theme_user_wrap}>
        <div className={s.theme}>
          <span>Theme</span>
          <Icon name={'icon-arrowDown'} className={s.arrow_icon} />
        </div>
        <div className={s.profile}>
          <span>name</span>
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className={s.profile_image}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
