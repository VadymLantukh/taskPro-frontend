import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import Button from '../../Button/Button';
import ModalWrapper from '../../ModalWrapper/ModalWrapper';

import { selectEmailLoading } from '../../../redux/emails/emailsSelectors';
import { validationSchema } from '../../../helpers/emailSchema';
import { sendEmail } from '../../../redux/auth/authOperations';
import { clearStatus } from '../../../redux/emails/emailsSlice';

import st from './HelpForm.module.css';
import s from '../../../styles/Forms.module.css';

const HelpForm = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const loading = useSelector(selectEmailLoading);

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const res = await dispatch(sendEmail(values));
      dispatch(clearStatus());
      resetForm();
      onClose();
      return res.message;
    } catch (error) {
      toast.error(`${error.message}`, {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      dispatch(clearStatus());
    } finally {
      setSubmitting(false);
    }
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <ModalWrapper
      open={open}
      onClose={handleClose}
      className={st.helpContainer}
    >
      <div>
        <h2 className={st.HelpFormTitle}>Need help</h2>
        <Formik
          initialValues={{ email: '', comment: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className={s.form}>
              <div className={s.fieldBox}>
                <Field
                  name="email"
                  type="email"
                  placeholder="Email address"
                  className={s.input}
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className={s.errorMessage}
                />
              </div>

              <div className={s.fieldBox}>
                <Field
                  as="textarea"
                  name="comment"
                  placeholder="Comment"
                  className={s.textarea}
                />
                <ErrorMessage
                  name="comment"
                  component="p"
                  className={s.errorMessage}
                />
              </div>

              <Button
                type="submit"
                text="Send"
                showIcon={true}
                disabled={isSubmitting}
                isLoading={loading}
              />
            </Form>
          )}
        </Formik>
      </div>
    </ModalWrapper>
  );
};

export default HelpForm;

// const HelpForm = ({ open, onClose }) => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const dispatch = useDispatch();

//   const loading = useSelector(selectEmailLoading);
//   const success = useSelector(selectEmailSuccess);
//   const error = useSelector(selectEmailError);

//   const onSubmit = async data => {
//     try {
//       const message = await dispatch(sendHelpRequestEmail(data));
//       alert(message);
//       onClose();
//     } catch (error) {
//       console.log(error);

//       alert('Failed to send email. Please try again.');
//     }
//   };

//   const handleClose = () => {
//     onClose();
//   };

//   return (
//     <ModalWrapper open={open} onClose={handleClose}>
//       <div>
//         <h2 className={s.HelpFormTitle}>Need help</h2>
//         <form className={s.helpForm} onSubmit={handleSubmit(onSubmit)}>
//           <input
//             {...register('email', {
//               required: 'Email is required',
//               pattern: {
//                 value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//                 message: 'Invalid email address',
//               },
//             })}
//             placeholder="Email"
//             className={s.input}
//           />
//           {errors.email && <p className={s.error}>{errors.email.message}</p>}

//           <textarea
//             {...register('comment', {
//               required: 'Comment is required.',
//               minLength: {
//                 value: 4,
//                 message: 'Comment must be at least 4 characters',
//               },
//               maxLength: {
//                 value: 500,
//                 message: 'Comment must be less than 500 characters',
//               },
//             })}
//             placeholder="Comment"
//             className={s.input}
//           ></textarea>
//           {errors.comment && (
//             <p className={s.error}>{errors.comment.message}</p>
//           )}

//           {loading && <p>Sending...</p>}
//           {error && <p className={s.error}>{error}</p>}
//           {success && <p className={s.success}>{success}</p>}

//           <Button type="submit" text="Send" showIcon={false} />
//         </form>
//       </div>
//     </ModalWrapper>
//   );
// };

// export default HelpForm;
