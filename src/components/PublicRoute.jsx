import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from '../redux/auth/authSelectors.js';
import Loader from './Loader/Loader.jsx';

export const PublicRoute = ({ component: Component }) => {
  const location = useLocation();

  const isLoggedIn = useSelector(selectIsLoggedIn);

  const isRefreshing = useSelector(selectIsRefreshing);

  if (isRefreshing) {
    return <Loader />;
  }

  return isLoggedIn ? <Navigate to={location?.state || '/home'} /> : Component;
};
