import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Loader from '../Loader/Loader';

import s from './Layout.module.css';

export const Layout = () => {
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
