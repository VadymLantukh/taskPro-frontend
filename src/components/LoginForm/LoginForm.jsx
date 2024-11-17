import { useDispatch } from 'react-redux';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { logIn } from '../../redux/auth/authOperations.js';
import { logInSchema } from '../../helpers/logInSchema.js';

import { MdOutlineRemoveRedEye } from 'react-icons/md';

import s from './LoginForm.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();

  const initialValues = { email: '', password: '' };

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
        validateOnChange={false}
      >
        <Form className={s.form}>
          <label>
            <Field
              type="email"
              name="email"
              className={s.input}
              placeholder="Enter your email"
            />
            <ErrorMessage
              name="email"
              component="span"
              className={s.errorForEmail}
            />
          </label>
          <label>
            <Field
              type="password"
              name="password"
              className={s.input}
              placeholder="Confirm a password"
            />
            <MdOutlineRemoveRedEye />
            <ErrorMessage
              name="password"
              component="span"
              className={s.errorForPassword}
            />
          </label>
          <button type="submit" className={s.btn}>
            Log In Now
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
