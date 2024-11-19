import { useDispatch, useSelector } from 'react-redux';
import BoardsItem from '../BoardsItem/BoardsItem';

import s from './BoardsList.module.css';
import { selectUser } from '../../redux/auth/authSelectors';
import { useEffect, useState } from 'react';
import { getUserThunk } from '../../redux/auth/authOperations';
const BoardsList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { boards } = useSelector(selectUser);
  const dispatch = useDispatch();

  console.log(boards);

  useEffect(() => {
    dispatch(getUserThunk());
  }, []);
  return (
    <>
      <ul className={s.list}>
        {boards.map(board => {
          return (
            <BoardsItem
              key={board._id}
              title={board.title}
              id={board._id}
              icon={board.icon}
            />
          );
        })}
      </ul>
      {/* {isModalOpen && (
        <Modal open={isModalOpen} onClose={handleCloseModal}>
          <EditBoard />
        </Modal>
      )} */}
    </>
  );
};

export default BoardsList;
