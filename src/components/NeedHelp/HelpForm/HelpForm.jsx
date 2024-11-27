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
