import svg from '../../../images/icons.svg';
import css from './LogoComponent.module.css';

const LogoComponent = () => {
  return (
    <div className={css.logoBox}>
      <div className={css.box}>
        <svg className={css.logo}>
          <use href={`${svg}#icon-lightning`}></use>
        </svg>
      </div>
      <h2 className={css.text}>Task Pro</h2>
    </div>
  );
};

export default LogoComponent;
