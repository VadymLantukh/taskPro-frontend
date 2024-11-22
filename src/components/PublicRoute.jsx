import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectIsLoggedIn } from '../redux/auth/authSelectors.js';
// import { isLoggedIn } from '../utils/devHelper';

// export const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
//   const isLoggedIn = useSelector(selectIsLoggedIn);
//   return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
// };
export const PublicRoute = ({ component: Component }) => {
  const location = useLocation();

  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={location?.state || '/home'} /> : Component;
};
