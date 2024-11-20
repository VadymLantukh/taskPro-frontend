import s from './Sidebar.module.css';
import LogoComponent from './LogoComponent/LogoComponent.jsx';
import NeedHelp from '../NeedHelp/NeedHelp.jsx';
import CreateBoard from './CreateBoard/CreateBoard.jsx';
import LogOut from './Logout/Logout.jsx';
import BoardsList from '../BoardsList/BoardsList.jsx';
// import { useState } from 'react';
// import { useSelector, useDispatch} from 'react-redux';

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`${s.sidebar} ${isOpen ? s.sidebarOpen : ''}`}>
      <div>
        <LogoComponent />
      </div>
      <p className={s.sidebarTitle}>My boards</p>
      <div>
        <CreateBoard />
      </div>
      <div className={s.project}>
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
