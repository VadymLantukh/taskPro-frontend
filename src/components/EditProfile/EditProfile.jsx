import { useDispatch, useSelector } from 'react-redux';
import ModalWrapper from '../ModalWrapper/ModalWrapper';
import { ErrorMessage, Field, Form, Formik } from 'formik';

import { selectUser } from '../../redux/auth/authSelectors';
import Button from '../Button/Button';

const EditProfile = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const { name, email } = useSelector(selectUser);

  const handleClose = () => {
    onClose();
  };

  return (
    <ModalWrapper open={open} onClose={handleClose}>
      <div>
        <h2>Edit profile</h2>
        <Formik>
          <div>
            <Form>
              <div>
                <Field name="username" />
                <ErrorMessage />
              </div>
              <div>
                <Field name="email" />
                <ErrorMessage />
              </div>
              <div>
                <Field name="password" />
                <ErrorMessage />
              </div>
              <Button type="submit" text="Send" />
            </Form>
          </div>
        </Formik>
      </div>
    </ModalWrapper>
  );
};

export default EditProfile;
