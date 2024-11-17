import s from './Modal.module.css';
import svg from '../../images/icons.svg';

const Modal = ({ onClose, children }) => {
  return (
    <div className={s.modalBackdrop} onClick={onClose}>
      <div className={s.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={s.closeBtn} onClick={onClose}>
          <svg className={s.closeIcon}>
            <use href={`${svg}#icon-close`} />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;