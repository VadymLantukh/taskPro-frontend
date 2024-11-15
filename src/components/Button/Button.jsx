import s from './Button.module.css';

const Button = ({ onClick, text, icon: Icon, className = '' }) => {
  const buttonClasses = `${s.btn} ${Icon ? s.withIcon : ''} ${className}`;

  return (
    <button onClick={onClick} className={`${s.btn} ${className}`}>
      {Icon && <Icon className={s.icon} />}
      {text && <span className={s.text}>{text}</span>}
    </button>
  );
};

export default Button;
