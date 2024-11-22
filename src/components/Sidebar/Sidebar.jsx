import s from './Sidebar.module.css';
import LogoComponent from './LogoComponent/LogoComponent.jsx';
import NeedHelp from '../NeedHelp/NeedHelp.jsx';
import CreateBoard from './CreateBoard/CreateBoard.jsx';
import LogOut from './Logout/Logout.jsx';
import BoardsList from '../BoardsList/BoardsList.jsx';
import clsx from 'clsx';
import { useScreenWidth } from '../../hooks/useScreenWidth.js';
import { useEffect } from 'react';

const Sidebar = ({ isOpen, onClose }) => {
  const handleSidebarClick = e => {
    e.stopPropagation();
  };
  const { isSmallScreen, isMediumScreen, isLargeScreen } = useScreenWidth();
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      // document.body.style.overflow = 'hidden'; (це блок скролла)
      // } else {
      //   document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);
  return (
    <div
      id="sidebar"
      className={clsx(
        s.sidebar,
        isSmallScreen || isMediumScreen ? s.mobile : '',
        isOpen || isLargeScreen ? s.sidebarOpen : s.sidebarClose
      )}
      onClick={handleSidebarClick}
    >
      <div>
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
      </div>
      <div>
        <div>
          <NeedHelp />
        </div>
        <div>
          <LogOut />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
