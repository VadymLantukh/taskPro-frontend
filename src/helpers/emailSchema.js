import * as Yup from 'yup';

export const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  comment: Yup.string()
    .min(4, 'Comment must be at least 4 characters')
    .max(500, 'Comment must be less than 500 characters')
    .required('Comment is required.'),
});