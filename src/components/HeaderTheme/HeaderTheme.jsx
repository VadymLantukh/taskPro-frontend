import { useEffect, useState } from 'react';
import { Menu, MenuItem } from '@mui/material';

import Icon from '../Icon/Icon';

import s from './HeaderTheme.module.css';

const HeaderTheme = () => {
  const [theme, setTheme] = useState('light');
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    document.documentElement.className = ''; //
    document.documentElement.classList.add(`${theme}-theme`);
  }, [theme]);

  const handleOpenMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleThemeChange = selectedTheme => {
    setTheme(selectedTheme);
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
