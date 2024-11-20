import { Suspense, useEffect } from 'react';
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
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  useEffect(() => {
    dispatch(getUserThunk());
    dispatch(setTheme());
  }, [dispatch, theme]);
  return (
    <div className={s.page}>
      <div className={s.wrapper}>
        <Sidebar />
        <main className={s.main}>
          <Header />
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
