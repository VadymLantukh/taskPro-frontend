// import s from './CreateBoard.module.css';
// import svg from '../../../images/icons.svg';

// const CreateBoard = () => {
//   return (
//     <div className={s.createNew}>
//       <p>Create a new board</p>
//       <button className={s.createBoardBtn}>
//         <svg className={s.btnPlus}>
//           <use href={`${svg}#icon-plus`}></use>
//         </svg>
//       </button>
//     </div>
//   );
// };

// export default CreateBoard;

import { useState } from 'react';
import s from './CreateBoard.module.css';
import svg from '../../../images/icons.svg';
import Modal from '../../NewBoard/Modal';
import NewBoard from '../../NewBoard/NewBoard';

const CreateBoard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className={s.createNew}>
      <p>Create a new board</p>
      <button className={s.createBoardBtn} onClick={handleOpenModal}>
        <svg className={s.btnPlus}>
          <use href={`${svg}#icon-plus`}></use>
        </svg>
      </button>

      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <NewBoard />
        </Modal>
      )}
    </div>
  );
};

export default CreateBoard;
