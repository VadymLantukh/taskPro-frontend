import { useDispatch, useSelector } from 'react-redux';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useState, useRef } from 'react';
import { MdOutlineRemoveRedEye, MdOutlineVisibilityOff } from 'react-icons/md';

import ModalWrapper from '../ModalWrapper/ModalWrapper';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';

import { getUserThunk, updateUserThunk } from '../../redux/auth/authOperations';
import { validationSchema } from '../../helpers/editUserSchema';
import { selectIsLoading } from '../../redux/auth/authSelectors';

import s from './EditProfile.module.css';

const EditProfile = ({ open, onClose, user }) => {
  const dispatch = useDispatch();
  const { name, email, avatar } = user;
  const [avatarPreview, setAvatarPreview] = useState(avatar);
  const [showPassword, setShowPassword] = useState(false);

  const fileInputRef = useRef(null);

  const isLoading = useSelector(selectIsLoading);

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

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async values => {
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('email', values.email);
    if (values.password) {
      formData.append('password', values.password);
    }
    if (fileInputRef.current?.files[0]) {
      formData.append('avatar', fileInputRef.current.files[0]);
    }

    await dispatch(updateUserThunk(formData));
    await dispatch(getUserThunk());
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
                <div>
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
                </div>
                <label className={s.uploadButton}>
                  <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={handleAvatarChange}
                    hidden
                    className={s.uploadInput}
                  />
                  <span className={s.plusButton}>+</span>
                </label>
              </div>

              <div className={s.fieldWrapper}>
                <div>
                  <Field
                    name="name"
                    type="text"
                    placeholder="Name"
                    className={s.field}
                  />
                </div>
                <ErrorMessage name="name" component="div" className={s.error} />
              </div>
              <div className={s.fieldWrapper}>
                <div>
                  <Field
                    name="email"
                    type="email"
                    placeholder="Email"
                    className={s.field}
                  />
                </div>
                <ErrorMessage
                  name="email"
                  component="div"
                  className={s.error}
                />
              </div>
              <label>
                <div className={s.passwordWrapper}>
                  <Field
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your new password"
                    className={s.field}
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className={s.eyeButton}
                  >
                    {showPassword ? (
                      <MdOutlineVisibilityOff size="18" />
                    ) : (
                      <MdOutlineRemoveRedEye size="18" />
                    )}
                  </button>
                </div>
                <ErrorMessage
                  name="password"
                  component="div"
                  className={s.error}
                />
              </label>
              <Button
                type="submit"
                text="Send"
                disabled={isSubmitting}
                isLoading={isLoading}
              />
            </Form>
          )}
        </Formik>
      </div>
    </ModalWrapper>
  );
};

export default EditProfile;
