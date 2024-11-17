import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { ErrorMessage, Field, Form, Formik } from 'formik';

import { register } from '../../redux/auth/authOperations';
import { registrationSchema } from '../../helpers/registrationSchema';

import { MdOutlineRemoveRedEye, MdOutlineVisibilityOff } from 'react-icons/md';

import s from './RegisterForm.module.css';

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (values, action) => {
    dispatch(register(values));
    action.resetForm();
  };

  return (
    <div className={s.wrapper}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={registrationSchema}
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
                type="text"
                name="name"
                className={s.input}
                placeholder="Enter your name"
              />
            </div>
            <ErrorMessage
              name="name"
              component="span"
              className={s.errorMessage}
            />
          </label>
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
                placeholder="Create a password"
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
            Register Now
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;
