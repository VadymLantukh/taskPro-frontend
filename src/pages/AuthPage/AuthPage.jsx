import { useLocation } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';

import LoginForm from '../../components/LoginForm/LoginForm';
import RegisterForm from '../../components/RegisterForm/RegisterForm';

import s from './AuthPage.module.css';

const AuthPage = () => {
  const location = useLocation();

  const animations = {
    initial: {
      clipPath: 'circle(0% at 50% 50%)',
      opacity: 0,
      transform: 'scale(0.8)',
    },
    animate: {
      clipPath: 'circle(100% at 50% 50%)',
      opacity: 1,
      transform: 'scale(1)',
    },
    exit: {
      clipPath: 'circle(0% at 50% 50%)',
      opacity: 0,
      transform: 'scale(0.8)',
    },
    transition: {
      duration: 1.4,
      ease: 'easeInOut',
    },
  };

  return (
    <div className={s.wrapper}>
      <AnimatePresence mode="wait">
        {location.pathname === '/auth/register' && (
          <motion.div key="register" {...animations}>
            <RegisterForm />
          </motion.div>
        )}
        {location.pathname === '/auth/login' && (
          <motion.div key="login" {...animations}>
            <LoginForm />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AuthPage;
