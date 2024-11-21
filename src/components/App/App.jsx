import { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { PrivateRoute } from '../PrivateRoute';
import { PublicRoute } from '../PublicRoute';
import Loader from '../Loader/Loader';
import { selectTheme } from '../../redux/auth/authSelectors';
// import { selectIsRefreshing } from '../../redux/auth/selectors';

const Layout = lazy(() => import('../Layout/Layout'));
const AuthPage = lazy(() => import('../../pages/AuthPage/AuthPage'));
const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const ScreensPage = lazy(() => import('../../pages/ScreensPage/ScreensPage'));
const WelcomePage = lazy(() => import('../../pages/WelcomePage/WelcomePage'));

import '../../styles/common.css';

const App = () => {
  const theme = useSelector(selectTheme);
  const toastTheme = theme === 'violet' ? 'light' : theme;

  const isRefreshing = false;

  return isRefreshing ? (
    <div>Loading...</div>
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
