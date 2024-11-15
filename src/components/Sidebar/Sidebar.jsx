import s from './Sidebar.module.css';
import LogoComponent from './LogoComponent/LogoComponent.jsx';

const Sidebar = () => {
  return (
    <div className={s.sidebar}>
      <LogoComponent />
    </div>
  );
};

export default Sidebar;
