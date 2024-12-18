import { useDispatch } from 'react-redux';

import { updateBoard } from '../../redux/board/boardOperations';
import BoardForm from '../BoardForm/BoardForm';

const EditBoard = ({ boardToEdit = {}, onClose }) => {
  const dispatch = useDispatch();

  const defaultBoard = {
    title: 'Sample Board',
    icon: 'icon_2',
    background: 'iconBackground',
  };

  const { title, icon, background } = { ...defaultBoard, ...boardToEdit };

  const handleUpdateBoard = async updatedBoardData => {
    const updatedData = {
      title: updatedBoardData.title,
      icon: updatedBoardData.selectedIcon,
    };
    updatedData.backgroundImage =
      updatedBoardData.selectedBackground === 'iconBackground'
        ? null
        : updatedBoardData.selectedBackground;

    await dispatch(
      updateBoard({ id: boardToEdit.id, data: updatedData })
    ).unwrap();

    onClose();
  };

  return (
    <BoardForm
      initialTitle={title}
      initialSelectedIcon={icon}
      initialSelectedBackground={
        background === null ? 'iconBackground' : background
      }
      formTitle="Edit board"
      buttonText="Edit"
      onSubmit={handleUpdateBoard}
    />
  );
};

export default EditBoard;
