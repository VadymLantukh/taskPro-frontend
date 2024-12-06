import { Link } from 'react-router-dom';

import Icon from '../../Icon/Icon';

import s from './LogoComponent.module.css';

const LogoComponent = () => {
  return (
    <Link to="/HomePage" className={s.logoBox}>
      <div className={s.box}>
        <Icon name="icon_6" className={s.logo} width={16} height={18} />
      </div>
      <h2 className={s.text}>Task Pro</h2>
    </Link>
  );
};

export default LogoComponent;
