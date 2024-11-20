import Icon from '../Icon/Icon';
import HeaderTheme from '../HeaderTheme/HeaderTheme';
import s from './Header.module.css';

const Header = ({ onBurgerClick }) => {
  return (
    <header className={s.header}>
      <div>
        <Icon
          onClick={() => onBurgerClick()}
          name={'icon-menu'}
          className={s.menu_icon}
        />
      </div>
      <div className={s.theme_user_wrap}>
        <HeaderTheme />
        {/* <div className={s.theme}>
          <span>Theme</span>
          <Icon name={'icon-arrowDown'} className={s.arrow_icon} />
        </div> */}
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
