import { Suspense, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Loader from '../Loader/Loader';

import { getUserThunk } from '../../redux/auth/authOperations';
import { setTheme } from '../../redux/auth/authSlice';
import { selectTheme } from '../../redux/auth/authSelectors';

import s from './Layout.module.css';

export const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const onBurgerClick = () => setIsSidebarOpen(!isSidebarOpen);
  const dispatch = useDispatch();
  const sidebarRef = document.getElementById('sidebar');
  const theme = useSelector(selectTheme);

  const handleClickOutside = event => {
    if (sidebarRef && !sidebarRef.contains(event.target)) {
      setIsSidebarOpen(false);
    }
  };
  useEffect(() => {
    dispatch(setTheme());
    dispatch(getUserThunk());
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarOpen, dispatch, theme]);

  return (
    <div className={s.page}>
      <div className={s.wrapper}>
        <Sidebar isOpen={isSidebarOpen} onClose={onBurgerClick} />
        <main className={s.main}>
          <Header onBurgerClick={onBurgerClick} />
          <div className={s.outlet}>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
