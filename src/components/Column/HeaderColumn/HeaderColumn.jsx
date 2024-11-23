import { useDispatch } from 'react-redux';

import { useToggle } from '../../../hooks/useToggle.js';
import { deleteColumn } from '../../../redux/columns/columnsOperations.js';
import IconButton from '../../IconButton/IconButton.jsx';
import Modal from '../../ModalWrapper/ModalWrapper.jsx';
import EditColumn from '../../EditColumn/EditColumn.jsx';

import s from './HeaderColumn.module.css';

export const HeaderColumn = ({ title, columnId }) => {
  const {open,  handleClose, handleOpen} = useToggle()
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteColumn(columnId));
  };

  return (
    <div className={s.container}>
      {title && <h3 className={s.title}>{title}</h3>}
      <div className={s['icon-container']}>
        <IconButton name="icon-pencil" onClick={handleOpen} />
        <IconButton name="icon-trash" onClick={handleDelete}  />

        {open && (
          <Modal open={open} onClose={handleClose}>
            <EditColumn
              onClose={handleClose}
              columnId={columnId}
              title={title}
            />
          </Modal>
        )}
      </div>
    </div>
  );
};

export default HeaderColumn;
