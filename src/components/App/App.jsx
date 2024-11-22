import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { PrivateRoute } from '../PrivateRoute';
import { PublicRoute } from '../PublicRoute';
import Loader from '../Loader/Loader';

import '../../styles/common.css';
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../redux/auth/authSelectors';
import 'react-toastify/dist/ReactToastify.css';

// import { selectIsRefreshing } from '../../redux/auth/selectors';
import {
  selectIsRefreshing,
  selectTheme,
} from '../../redux/auth/authSelectors';

const Layout = lazy(() => import('../Layout/Layout'));
const AuthPage = lazy(() => import('../../pages/AuthPage/AuthPage'));
const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const ScreensPage = lazy(() => import('../../pages/ScreensPage/ScreensPage'));
const WelcomePage = lazy(() => import('../../pages/WelcomePage/WelcomePage'));

import '../../styles/common.css';
import { getUserThunk } from '../../redux/auth/authOperations';

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const theme = useSelector(selectTheme);
  const toastTheme = theme === 'violet' ? 'light' : theme;

  useEffect(() => {
    dispatch(getUserThunk());
  }, [dispatch]);

  return isRefreshing ? (
    <div>
      <Loader />
    </div>
  ) : (
    <Suspense fallback={<Loader />}>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={toastTheme}
      />
      <Routes>
        <Route
          path="/home"
          element={
            <PrivateRoute redirectTo="/welcome" component={<Layout />} />
          }
        >
          <Route index element={<HomePage />} />
          <Route path=":boardId" element={<ScreensPage />} />
        </Route>
        <Route
          path="/welcome"
          element={
            <PublicRoute redirectTo="/home" component={<WelcomePage />} />
          }
        />
        <Route
          path="/auth/*"
          element={<PublicRoute redirectTo="/home" component={<AuthPage />} />}
        />

        <Route path="*" element={<Navigate to={'/home'} />} />
      </Routes>
    </Suspense>
  );
};

export default App;
