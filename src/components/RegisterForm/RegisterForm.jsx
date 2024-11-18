import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { MdOutlineRemoveRedEye, MdOutlineVisibilityOff } from 'react-icons/md';

import { ErrorMessage, Field, Form, Formik } from 'formik';

import { register } from '../../redux/auth/authOperations';
import { registrationSchema } from '../../helpers/registrationSchema';

import s from './RegisterForm.module.css';

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [checkStatus, setCheckStatus] = useState(false);

  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (values, action) => {
    const response = await dispatch(register(values));
    if (response.payload.status === 201) setCheckStatus(true);
    action.resetForm();
  };

  return (
    <div className={s.container}>
      {checkStatus && <Navigate to="/auth/login" replace={true} />}
      <div className={s.wrapper}>
        <nav className={s.linkNav}>
          <Link to="/auth/register" className={s.registerLink}>
            Registration
          </Link>
          <Link to="/auth/login" className={s.loginLink}>
            Log In
          </Link>
        </nav>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={registrationSchema}
          validateOnBlur={true}
        >
          <Form className={s.form}>
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
    </div>
  );
};

export default RegisterForm;
