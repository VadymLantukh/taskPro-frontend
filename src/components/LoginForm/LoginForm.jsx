import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { MdOutlineRemoveRedEye, MdOutlineVisibilityOff } from 'react-icons/md';

import { logInThunk } from '../../redux/auth/authOperations.js';
import { logInSchema } from '../../helpers/logInSchema.js';
import Button from '../Button/Button.jsx';
import { selectIsLoading } from '../../redux/auth/authSelectors.js';

import s from './LoginForm.module.css';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const initialValues = { email: '', password: '' };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (values, action) => {
    dispatch(logInThunk(values));
    action.resetForm();
  };
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.linkNav}>
          <Link to="/auth/register" className={s.registerLink}>
            Registration
          </Link>
          <Link to="/auth/login" className={s.loginLink}>
            Log In
          </Link>
        </div>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={logInSchema}
          validateOnBlur={true}
        >
          <Form className={s.form}>
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
            <Button text="Log In Now" type="submit" isLoading={isLoading} />
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;
