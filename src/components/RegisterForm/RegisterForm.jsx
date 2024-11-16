import { useDispatch } from 'react-redux';
import { ErrorMessage, Field, Form, Formik } from 'formik';

import { register } from '../../redux/auth/authOperations';
import { registrationSchema } from '../../helpers/registrationSchema';

import s from './RegisterForm.module.css';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    email: '',
    password: '',
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
        // validateOnBlur={true}
        validateOnChange={false}
      >
        <Form className={s.form}>
          <label>
            <Field
              type="text"
              name="name"
              className={s.input}
              placeholder="Enter your name"
            />
            <ErrorMessage
              name="name"
              component="span"
              className={s.errorForName}
            />
          </label>
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
              placeholder="Create a password"
            />
            <ErrorMessage
              name="password"
              component="span"
              className={s.errorForPassword}
            />
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
