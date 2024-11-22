import { useDispatch, useSelector } from 'react-redux';
import { ErrorMessage, Field, Form, Formik } from 'formik';

import ModalWrapper from '../ModalWrapper/ModalWrapper';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import { selectUser } from '../../redux/auth/authSelectors';
import { updateUserThunk } from '../../redux/auth/authOperations';
import { validationSchema } from '../../helpers/editUserSchema';

import s from './EditProfile.module.css';
import { useRef, useState } from 'react';

const EditProfile = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const { name, email, avatar } = useSelector(selectUser);
  const [avatarPreview, setAvatarPreview] = useState(avatar);
  const fileInputRef = useRef(null);

  const handleClose = () => {
    onClose();
  };

  const handleAvatarChange = event => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = e => {
        setAvatarPreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = values => {
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('email', values.email);
    if (values.password) {
      formData.append('password', values.password);
    }
    if (fileInputRef.current?.files[0]) {
      formData.append('avatar', fileInputRef.current.files[0]);
    }

    dispatch(updateUserThunk(formData));
    handleClose();
  };

  return (
    <ModalWrapper open={open} onClose={handleClose} className={s.modal}>
      <div className={s.container}>
        <h2 className={s.title}>Edit Profile</h2>
        <Formik
          initialValues={{ name, email, password: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className={s.form}>
              <div className={s.avatarWrapper}>
                {avatarPreview ? (
                  <img
                    src={avatarPreview}
                    alt="User Avatar"
                    className={s.avatar}
                  />
                ) : (
                  <div className={s.userIconWrapper}>
                    <Icon name="icon-user" className={s.userIcon} />
                  </div>
                )}
                <label className={s.uploadButton}>
                  <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={handleAvatarChange}
                    hidden
                  />
                  <span>+</span>
                </label>
              </div>
              <div className={s.fieldWrapper}>
                <Field
                  name="name"
                  type="text"
                  placeholder="Name"
                  className={s.field}
                />
                <ErrorMessage name="name" component="div" className={s.error} />
              </div>
              <div className={s.fieldWrapper}>
                <Field
                  name="email"
                  type="email"
                  placeholder="Email"
                  className={s.field}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className={s.error}
                />
              </div>
              <div className={s.fieldWrapper}>
                <Field
                  name="password"
                  type="password"
                  placeholder="Enter your new password"
                  className={s.field}
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className={s.error}
                />
              </div>
              <Button
                type="submit"
                text="Send"
                disabled={isSubmitting}
                className={s.button}
              />
            </Form>
          )}
        </Formik>
      </div>
    </ModalWrapper>
  );
};

export default EditProfile;
