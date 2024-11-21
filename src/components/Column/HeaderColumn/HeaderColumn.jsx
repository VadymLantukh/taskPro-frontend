import { useState } from 'react';
import IconButton from '../../IconButton/IconButton.jsx';
import Modal from '../../ModalWrapper/ModalWrapper.jsx';

import s from './HeaderColumn.module.css';
import EditColumn from '../../EditColumn/EditColumn.jsx';

export const HeaderColumn = ({ title, columnId }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const openEditModal = () => setIsEditModalOpen(true);
  const closeEditModal = () => setIsEditModalOpen(false);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const openDeleteModal = () => setIsDeleteModalOpen(true);
  const closeDeleteModal = () => setIsDeleteModalOpen(false);

  const handlePencilClick = () => {
    openEditModal();
  };
  const handleTrashClick = () => {
    openDeleteModal();
  };
  return (
    <div className={s.container}>
      <h3 className={s.title}>{title}</h3>
      <div className={s['icon-container']}>
        <IconButton name="icon-pencil" onClick={handlePencilClick} />
        <IconButton name="icon-trash" onClick={handleTrashClick} />

        {isEditModalOpen && (
          <Modal open={isEditModalOpen} onClose={closeEditModal}>
            <EditColumn
              onClose={closeEditModal}
              columnId={columnId}
              title={title}
            />
          </Modal>
        )}

        {isDeleteModalOpen && (
          <Modal open={isDeleteModalOpen} onClose={closeDeleteModal}>
            <EditColumn onClose={closeDeleteModal} />
            {/* //! Change to Delete */}
          </Modal>
        )}
      </div>
    </div>
  );
};

export default HeaderColumn;
