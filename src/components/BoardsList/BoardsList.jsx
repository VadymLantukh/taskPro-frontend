import BoardsItem from '../BoardsItem/BoardsItem';

import s from './BoardsList.module.css';
const BoardsList = () => {
  const boardsList = [
    //! TODO:AWAIT
    { _id: '124124124', title: 'Pes', icon: 'icon_1' },
    { _id: '346342422', title: 'Gav', icon: 'icon_2' },
    { _id: '346658432', title: 'Mau', icon: 'icon_3' },
    { _id: '578674453', title: 'Kis', icon: 'icon_4' },
    { _id: '235qasdwe', title: 'Mur', icon: 'icon_5' },
    { _id: 'qwe235346', title: 'Wur', icon: 'icon_6' },
    { _id: '235qwe346', title: 'fur', icon: 'icon_7' },
    { _id: 'qweqwseqw', title: 'gur', icon: 'icon_8' },
  ];
  return (
    <ul className={s.list}>
      {boardsList.map(board => {
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
  );
};

export default BoardsList;
