import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ErrorMessage, Field, Form, Formik } from 'formik';

import { logIn } from '../../redux/auth/authOperations.js';
import { logInSchema } from '../../helpers/logInSchema.js';

import { MdOutlineRemoveRedEye, MdOutlineVisibilityOff } from 'react-icons/md';

import s from './LoginForm.module.css';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  const initialValues = { email: '', password: '' };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (values, action) => {
    dispatch(logIn(values));
    action.resetForm();
  };
  return (
    <div className={s.wrapper}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={logInSchema}
        validateOnBlur={true}
      >
        <Form className={s.form}>
          <div className={s.linkNav}>
            <NavLink to="/auth/register" className={s.registerLink}>
              Registration
            </NavLink>
            <NavLink to="/auth/login" className={s.loginLink}>
              Log In
            </NavLink>
          </div>
          <label>
            <div>
              <Field
                type="email"
                name="email"
                className={s.input}
                placeholder="Enter your email"
              />
            </div>
            <ErrorMessage
              name="email"
              component="span"
              className={s.errorMessage}
            />
          </label>
          <label>
            <div className={s.passwordWrapper}>
              <Field
                type={showPassword ? 'text' : 'password'}
                name="password"
                className={s.input}
                placeholder="Confirm a password"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className={s.eyeButton}
              >
                {showPassword ? (
                  <MdOutlineVisibilityOff size="18" />
                ) : (
                  <MdOutlineRemoveRedEye size="18" />
                )}
              </button>
            </div>
            <ErrorMessage
              name="password"
              component="span"
              className={s.errorMessage}
            />
          </label>
          <button type="submit" className={s.btnSubmit}>
            Log In Now
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
