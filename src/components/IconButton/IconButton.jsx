import Icon from '../Icon/Icon.jsx';
import clsx from 'clsx';

import s from './IconButton.module.css';

export const IconButton = ({
  name,
  className,
  width = 16,
  height = 16,
  onClick,
}) => {
  return (
    <button type="button" onClick={onClick}>
      <Icon
        name={name}
        width={width}
        height={height}
        className={clsx(s.icon, className)}
      />
    </button>
  );
};

export default IconButton;
