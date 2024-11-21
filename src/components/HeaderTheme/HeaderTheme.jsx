import { useEffect, useState } from 'react';
import { Menu, MenuItem } from '@mui/material';

import Icon from '../Icon/Icon';

import s from './HeaderTheme.module.css';
import { useDispatch } from 'react-redux';
import { updateUserThemeThunk } from '../../redux/auth/authOperations';

const HeaderTheme = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();

  const handleOpenMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleThemeChange = selectedTheme => {
    dispatch(updateUserThemeThunk(selectedTheme));
    handleCloseMenu();
  };

  return (
    <div className={s.themeWrapper}>
      <div className={s.themeToggle} onClick={handleOpenMenu}>
        <span>Theme</span>
        <Icon name={'icon-arrowDown'} className={s.arrowIcon} />
      </div>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        classes={{ paper: s.menuPaper }}
      >
        <MenuItem
          onClick={() => handleThemeChange('light')}
          className={s.menuItem}
        >
          Light
        </MenuItem>
        <MenuItem
          onClick={() => handleThemeChange('dark')}
          className={s.menuItem}
        >
          Dark
        </MenuItem>
        <MenuItem
          onClick={() => handleThemeChange('violet')}
          className={s.menuItem}
        >
          Violet
        </MenuItem>
      </Menu>
    </div>
  );
};

export default HeaderTheme;
