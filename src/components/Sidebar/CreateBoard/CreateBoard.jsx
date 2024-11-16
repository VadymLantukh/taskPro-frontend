import s from './CreateBoard.module.css';
import svg from '../../../images/icons.svg';

const CreateBoard = () => {
  return (
    <div className={s.createNew}>
      <p>Create a new board</p>
      <button className={s.createBoardBtn}>
        <svg className={s.btnPlus}>
          <use href={`${svg}#icon-plus`}></use>
        </svg>
      </button>
    </div>
  );
};

export default CreateBoard;
