import * as Yup from 'yup';

export const registrationSchema = Yup.object({
  name: Yup.string()
    .max(10, 'Name cannot be more then 10 characters')
    .matches(
      /^[a-zA-Z0-9\s!@#$%^&*(),.?":{}|<>]{2,32}$/,
      'Name must contain from 2 to 32 characters'
    )
    .required('Name is required'),
  email: Yup.string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Email is not valid!'
    )
    .required('Email is required'),
  password: Yup.string()
    .matches(/^[^\s]{8,64}$/, 'Password must contain from 8 to 64 characters')
    .required('Password is required'),
});
