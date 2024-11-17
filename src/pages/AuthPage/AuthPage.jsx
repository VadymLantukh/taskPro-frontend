// import { useState } from 'react';
import { useLocation } from 'react-router';
import LoginForm from '../../components/LoginForm/LoginForm';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import { NavLink } from 'react-router-dom';
// import { useNavigate } from 'react-router';

const AuthPage = () => {
  const location = useLocation();

  // const [isRegister, setIsRegister] = useState(true);
  // const navigate = useNavigate();

  // const handleSwitch = isRegisterMode => {
  //   setIsRegister(isRegisterMode);
  //   navigate(isRegisterMode ? '/auth/register' : '/auth/login');
  // };

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          marginBottom: '20px',
        }}
      >
        <NavLink
          to="/auth/register"
          style={({ isActive }) => ({
            color: isActive ? '#6ee7b7' : '#aaa', // Активний - зелений, неактивний - сірий
            textDecoration: 'none',
            paddingBottom: '5px',
            fontWeight: 'bold',
          })}
        >
          Registration
        </NavLink>
        <NavLink
          to="/auth/login"
          style={({ isActive }) => ({
            color: isActive ? '#6ee7b7' : '#aaa',
            textDecoration: 'none',
            paddingBottom: '5px',
            fontWeight: 'bold',
          })}
        >
          Log In
        </NavLink>
      </div>
      <div>
        {location.pathname === '/auth/register' && <RegisterForm />}
        {location.pathname === '/auth/login' && <LoginForm />}
      </div>
    </div>
    // <div>
    //   <div>
    //     <button onClick={() => handleSwitch(true)}>Registration</button>
    //     <button onClick={() => handleSwitch(false)}>Log In</button>
    //   </div>
    //   <div>{isRegister ? <RegisterForm /> : <LoginForm />}</div>
    // </div>
  );
};

export default AuthPage;
