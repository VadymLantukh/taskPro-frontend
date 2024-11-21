import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectIsLoggedIn } from '../redux/auth/authSelectors.js';
// import { isLoggedIn } from '../utils/devHelper';

// export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
//   const isLoggedIn = useSelector(selectIsLoggedIn);

//   return isLoggedIn ? Component : <Navigate to={redirectTo} />;
// };
export const PrivateRoute = ({ component: Component }) => {
  const location = useLocation();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? (
    Component
  ) : (
    <Navigate to="/welcome" replace state={location} />
  );
};
