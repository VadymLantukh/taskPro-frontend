import { useEffect } from 'react';
import { Modal, Backdrop } from '@mui/material';
import svg from '../../images/icons.svg';
import s from './ModalWrapper.module.css';
import clsx from 'clsx';
const ModalWrapper = ({ open, onClose, children, className = '' }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (open) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onClose]);
  const UpdatedModalContainer = clsx(s.modalContainer, className);
  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 200,
        sx: { backgroundColor: 'rgba(21, 21, 21, 0.3)' },
      }}
    >
      <div className={UpdatedModalContainer}>
        <button className={s.closeButton} onClick={onClose}>
          <svg className={s.iconModal}>
            <use href={`${svg}#icon-close`}></use>
          </svg>
        </button>
        {children}
      </div>
    </Modal>
  );
};

export default ModalWrapper;
