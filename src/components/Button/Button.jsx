import s from './Button.module.css';
import Icon from '../Icon/Icon';

const Button = ({
  onClick,
  text,
  showIcon = false,
  className = '',
  ...props
}) => {
  const buttonClasses = `${s.btn} ${showIcon ? s.withIcon : ''} ${className}`;

  return (
    <button onClick={onClick} className={buttonClasses} {...props}>
      {showIcon && (
        <span className={s.iconWrapper}>
          <Icon name="icon-plus" className={s.icon} />
        </span>
      )}
      {text && <span className={s.text}>{text}</span>}
    </button>
  );
};

export default Button;
