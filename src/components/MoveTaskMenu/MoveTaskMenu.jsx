import { Menu, MenuItem } from '@mui/material';

import Icon from '../Icon/Icon';

import s from './MoveTaskMenu.module.css';

const MoveTaskMenu = ({
  columns,
  anchorEl,
  taskToEdit,
  handleCloseMenu,
  handleMoveTask,
}) => (
  <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseMenu}>
    {columns
      .filter(column => column._id !== taskToEdit?.columnId)
      .map(column => (
        <MenuItem key={column._id} onClick={() => handleMoveTask(column._id)}>
          {column.title}
          <div className={s.iconBox}>
            <Icon className={s.icon} name="icon-right" />
          </div>
        </MenuItem>
      ))}
  </Menu>
);

export default MoveTaskMenu;
