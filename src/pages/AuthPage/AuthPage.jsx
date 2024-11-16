import { useState } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import { useNavigate } from 'react-router';

const AuthPage = () => {
  const [isRegister, setIsRegister] = useState(true);
  const navigate = useNavigate();

  const handleSwitch = isRegisterMode => {
    setIsRegister(isRegisterMode);
    navigate(isRegisterMode ? '/auth/register' : '/auth/login');
  };

  return (
    <div>
      <div>
        <button onClick={() => handleSwitch(true)}>Registration</button>
        <button onClick={() => handleSwitch(false)}>Log In</button>
      </div>
      <div>{isRegister ? <RegisterForm /> : <LoginForm />}</div>
    </div>
  );
};

export default AuthPage;
