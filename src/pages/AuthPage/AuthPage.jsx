import { useLocation } from 'react-router';
import LoginForm from '../../components/LoginForm/LoginForm';
import RegisterForm from '../../components/RegisterForm/RegisterForm';

const AuthPage = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname === '/auth/register' && <RegisterForm />}
      {location.pathname === '/auth/login' && <LoginForm />}
    </div>
  );
};

export default AuthPage;
