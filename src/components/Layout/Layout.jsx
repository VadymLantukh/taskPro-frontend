import { Suspense, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Loader from '../Loader/Loader';

import { setTheme } from '../../redux/auth/authSlice';
import { selectTheme } from '../../redux/auth/authSelectors';

import s from './Layout.module.css';

export const Layout = () => {
  const dispatch = useDispatch();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sidebarRef = document.getElementById('sidebar');
  const modalWrapperRef = document.getElementById('wrapperModal');

  const theme = useSelector(selectTheme);

  useEffect(() => {
    dispatch(setTheme());
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarOpen, dispatch, theme]);

  const onBurgerClick = () => setIsSidebarOpen(!isSidebarOpen);

  const handleClickOutside = event => {
    if (sidebarRef && modalWrapperRef && !sidebarRef.contains(event.target)) {
      setIsSidebarOpen(false);
    }
  };

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
      {isSidebarOpen && <div className={s.blur} onClick={onBurgerClick}></div>}
    </div>
  );
};

export default Layout;
