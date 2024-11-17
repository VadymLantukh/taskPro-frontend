import s from './Button.module.css';
import svg from '../../images/icons.svg';

const Button = ({ onClick, text, showIcon = false, className = '' }) => {
  const buttonClasses = `${s.btn} ${showIcon ? s.withIcon : ''} ${className}`;

  return (
    <button onClick={onClick} className={buttonClasses}>
      {showIcon && (
        <span className={s.iconWrapper}>
          <svg className={s.icon}>
            <use href={`${svg}#icon-plus`}></use>
          </svg>
        </span>
      )}
      {text && <span className={s.text}>{text}</span>}
    </button>
  );
};

export default Button;
