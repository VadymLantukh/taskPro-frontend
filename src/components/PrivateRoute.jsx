import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from '../redux/auth/authSelectors.js';
import Loader from './Loader/Loader.jsx';

export const PrivateRoute = ({ component: Component }) => {
  const location = useLocation();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  if (isRefreshing) {
    return <Loader />;
  }

  return isLoggedIn ? (
    Component
  ) : (
    <Navigate
      to="/welcome
  "
      replace
      state={location}
    />
  );
};
