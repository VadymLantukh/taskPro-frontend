import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Menu, MenuItem } from '@mui/material';

import Icon from '../Icon/Icon';
import { updateUserThemeThunk } from '../../redux/auth/authOperations';
import { changeTheme } from '../../redux/auth/authSlice';

import s from './HeaderTheme.module.css';

const HeaderTheme = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      setAnchorEl(null);
    };
  }, []);

  const handleOpenMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleThemeChange = selectedTheme => {
    dispatch(updateUserThemeThunk(selectedTheme));
    dispatch(changeTheme(selectedTheme));
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
      >
        <MenuItem onClick={() => handleThemeChange('light')}>Light</MenuItem>
        <MenuItem onClick={() => handleThemeChange('dark')}>Dark</MenuItem>
        <MenuItem onClick={() => handleThemeChange('violet')}>Violet</MenuItem>
      </Menu>
    </div>
  );
};

export default HeaderTheme;
