import s from './Sidebar.module.css';
import LogoComponent from './LogoComponent/LogoComponent.jsx';
import NewBoard from '../NewBoard/NewBoard.jsx';
import NeedHelp from '../NeedHelp/NeedHelp.jsx';
import svg from '../../images/icons.svg';
import LogOut from './Logout/Logout.jsx';

const Sidebar = () => {
  return (
    <div className={s.sidebar}>
      <div>
        <LogoComponent />
      </div>
      <p className={s.sidebarTitle}>My boards</p>
      <div className={s.createNew}>
        <p>Create a new board</p>
        <button className={s.createBoardBtn}>
          <svg className={s.btnPlus}>
            <use href={`${svg}#icon-plus`}></use>
          </svg>
        </button>
      </div>
      <div className={s.project}>
        <NewBoard />
        {/* тут у нас дошки треба щоб можна було бачити всi */}
      </div>
      <div>
        <NeedHelp />
      </div>
      <div>
        <LogOut />
      </div>
    </div>
  );
};

export default Sidebar;
