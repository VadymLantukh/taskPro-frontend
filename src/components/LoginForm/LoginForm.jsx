import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { logIn } from '../../redux/auth/authOperations.js';
import s from './LoginForm.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();

  const initialValues = { email: '', password: '' };

  const logInSchema = Yup.object({
    email: Yup.string()
      .min(3, 'To short email')
      .max(50, 'To long email')
      .required('Is required'),
    password: Yup.string()
      .min(8, 'To short password')
      .max(50, 'To long password')
      .required('Is required'),
  });

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
      >
        <Form className={s.form}>
          <h2 className={s.title}>Login</h2>
          <label className={s.label}>
            Email
            <Field
              type="email"
              name="email"
              className={s.input}
              placeholder=" Enter your email..."
            />
            <ErrorMessage name="email" component="span" />
          </label>

          <label className={s.label}>
            Password
            <Field
              type="password"
              name="password"
              className={s.input}
              placeholder=" Enter your password..."
            />
            <ErrorMessage name="password" component="span" />
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
