import clsx from 'clsx';

import Icon from '../Icon/Icon';

import s from './Button.module.css';

const Button = ({
  onClick,
  text,
  showIcon = false,
  className = '',
  isLoading = false,
  ...props
}) => {
  const buttonClasses = clsx(s.btn, showIcon ? s.withIcon : '', className);

  return (
    <button
      onClick={onClick}
      className={buttonClasses}
      {...props}
      disabled={isLoading}
    >
      {isLoading ? (
        <div className={s.loader}></div>
      ) : (
        <>
          {showIcon && (
            <span className={s.iconWrapper}>
              <Icon name="icon-plus" className={s.icon} />
            </span>
          )}
          {text && <span className={s.text}>{text}</span>}
        </>
      )}
    </button>
  );
};

export default Button;
