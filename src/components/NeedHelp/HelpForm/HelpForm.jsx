import { useForm } from 'react-hook-form';
import Button from '../../Button/Button';
import ModalWrapper from '../../ModalWrapper/ModalWrapper';
import s from './HelpForm.module.css';
import '../../../styles/index.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectEmailError,
  selectEmailLoading,
  selectEmailSuccess,
} from '../../../redux/emails/emailsSelectors';
import { sendHelpRequestEmail } from '../../../redux/emails/emailsOperations';

const HelpForm = ({ open, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const loading = useSelector(selectEmailLoading);
  const success = useSelector(selectEmailSuccess);
  const error = useSelector(selectEmailError);

  // Handle form submission
  const onSubmit = async data => {
    try {
      const message = await dispatch(sendHelpRequestEmail(data));
      alert(message);
      onClose();
    } catch (error) {
      alert('Failed to send email. Please try again.');
    }
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <ModalWrapper open={open} onClose={handleClose}>
      <div>
        <h2 className={s.HelpFormTitle}>Need help</h2>
        <form className={s.helpForm} onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: 'Invalid email address',
              },
            })}
            placeholder="Email"
            className={s.input}
          />
          {errors.email && <p className={s.error}>{errors.email.message}</p>}

          <textarea
            {...register('comment', {
              required: 'Comment is required.',
              minLength: {
                value: 4,
                message: 'Comment must be at least 4 characters',
              },
              maxLength: {
                value: 500,
                message: 'Comment must be less than 500 characters',
              },
            })}
            placeholder="Comment"
            className={s.input}
          ></textarea>
          {errors.comment && (
            <p className={s.error}>{errors.comment.message}</p>
          )}

          {loading && <p>Sending...</p>}
          {error && <p className={s.error}>{error}</p>}
          {success && <p className={s.success}>{success}</p>}

          <Button type="submit" text="Send" showIcon={false} />
        </form>
      </div>
    </ModalWrapper>
  );
};

export default HelpForm;
