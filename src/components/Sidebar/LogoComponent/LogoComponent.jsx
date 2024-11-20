import { Link } from 'react-router-dom';
import s from './LogoComponent.module.css';
import Icon from '../../Icon/Icon';

const LogoComponent = () => {
  return (
    <Link to="/HomePage" className={s.logoBox}>
      <div className={s.box}>
        <Icon name="icon-lightning" className={s.logo} />
      </div>
      <h2 className={s.text}>Task Pro</h2>
    </Link>
  );
};
export default LogoComponent;
