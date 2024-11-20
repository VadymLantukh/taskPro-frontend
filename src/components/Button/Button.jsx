import s from './Button.module.css';
import Icon from '../Icon/Icon';
import clsx from 'clsx';

const Button = ({
  onClick,
  text,
  showIcon = false,
  className = '',
  ...props
}) => {
  const buttonClasses = clsx(s.btn, showIcon ? s.withIcon : '', className);

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
