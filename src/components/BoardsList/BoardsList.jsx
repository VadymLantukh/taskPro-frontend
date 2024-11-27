import { useSelector } from 'react-redux';

import { selectUser } from '../../redux/auth/authSelectors';
import BoardsItem from '../BoardsItem/BoardsItem';

import s from './BoardsList.module.css';

const BoardsList = () => {
  const { boards } = useSelector(selectUser);

  return (
    <ul className={s.list}>
      {boards.map(board => {
        return (
          <BoardsItem
            key={board._id}
            title={board.title}
            id={board._id}
            icon={board.icon}
            backgroundImage={board.backgroundImage}
          />
        );
      })}
    </ul>
  );
};

export default BoardsList;
