import { useEffect } from 'react';
import { Modal, Backdrop } from '@mui/material';
import svg from '../../images/icons.svg';
import s from './Modal.module.css';

const Modal = ({ open, onClose, children }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (open) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onClose]);

  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 200,
        sx: { backgroundColor: 'rgba(21, 21, 21, 0.3' },
      }}
    >
      <div className={s.modalContainer}>
        <button className={s.closeButton} onClick={onClose}>
          <svg className={s.iconModal}>
            <use href={`${svg}#icon-plus`}></use>
          </svg>
        </button>
        {children}
      </div>
    </Modal>
  );
};

export default Modal;