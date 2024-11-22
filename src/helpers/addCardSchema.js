import * as Yup from 'yup';

export const addCardSchema = Yup.object({
  title: Yup.string()
    .max(50, 'A maximum of 50 characters is allowed')
    .required('Title is required'),
  description: Yup.string()
    .max(300, 'A maximum of 300 characters is allowed')
    .required('Description is required'),
  priority: Yup.mixed()
    .oneOf(['Without', 'Low', 'Medium', 'High'], 'Invalid priority')
    .required('Priority is required'),
  deadline: Yup.date()
    .nullable()
    .notRequired()
    .min(new Date(), 'Deadline cannot be in the past'),
});
