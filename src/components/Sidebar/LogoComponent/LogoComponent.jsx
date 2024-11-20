import s from './LogoComponent.module.css';
import Icon from '../../Icon/Icon';

const LogoComponent = () => {
  const handleRefreshClick = () => {
    window.location.reload();
  };
  return (
    <div className={s.logoBox} onClick={handleRefreshClick}>
      <div className={s.box}>
        <Icon name="icon-lightning" className={s.logo} />
      </div>
      <h2 className={s.text}>Task Pro</h2>
    </div>
  );
};

export default LogoComponent;
