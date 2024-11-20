import { Suspense, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Loader from '../Loader/Loader';

import s from './Layout.module.css';
import { useDispatch } from 'react-redux';
import { getUserThunk } from '../../redux/auth/authOperations';

export const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const onBurgerClick = () => setIsSidebarOpen(!isSidebarOpen);
  const dispatch = useDispatch();
  const sidebarRef = document.getElementById('sidebar');

  const handleClickOutside = event => {
    if (sidebarRef && !sidebarRef.contains(event.target)) {
      setIsSidebarOpen(false);
    }
  };
  useEffect(() => {
    dispatch(getUserThunk());
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarOpen, dispatch]);
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
