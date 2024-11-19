import * as Yup from 'yup';

export const addCardSchema = Yup.object({
  title: Yup.string()
    .min(1, 'Name must be at least 1 character')
    .max(50, 'A maximum of 50 characters is allowed')
    .required('Title is required'),
  description: Yup.string()
    .min(1, 'Name must be at least 1 character')
    .max(300, 'A maximum of 300 characters is allowed')
    .required('Description is required'),
});
