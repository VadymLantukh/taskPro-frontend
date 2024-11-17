import * as Yup from 'yup';

export const logInSchema = Yup.object({
  email: Yup.string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Email is not valid!'
    )
    .required('Email is required'),
  password: Yup.string()
    .matches(
      /^[^\s]{8,64}$/,
      'The password must contain from 8 to 64 characters'
    )
    .required('Password is required'),
});
