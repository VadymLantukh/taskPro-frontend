import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { register } from '../../redux/auth/authOperations';
import { ErrorMessage, Field, Form, Formik } from 'formik';

import s from './RegisterForm.module.css';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const registrationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'To short name')
      .max(50, 'To long name')
      .required('Is required'),
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
    dispatch(register(values));
    action.resetForm();
  };

  return (
    <div className={s.wrapper}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={registrationSchema}
      >
        <Form className={s.form}>
          <h2 className={s.title}>Register</h2>
          <label className={s.label}>
            Name
            <Field
              type="text"
              name="name"
              className={s.input}
              placeholder=" Enter your name..."
            />
            <ErrorMessage name="name" component="span" />
          </label>

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
            Register Now
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;
