import s from './Sidebar.module.css';
import LogoComponent from './LogoComponent/LogoComponent.jsx';
import NeedHelp from '../NeedHelp/NeedHelp.jsx';
import CreateBoard from './CreateBoard/CreateBoard.jsx';
import LogOut from './Logout/Logout.jsx';
import BoardsList from '../BoardsList/BoardsList.jsx';

const Sidebar = () => {
  return (
    <div className={s.sidebar}>
      <div>
        <LogoComponent />
      </div>
      <p className={s.sidebarTitle}>My boards</p>
      <div>
        <CreateBoard />
      </div>

      <div className={s.project}>
        {/* <NewBoard /> */}
        {/* тут у нас дошки треба щоб можна було бачити всi */}
        <BoardsList />
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
