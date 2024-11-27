import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBoard } from '../../redux/board/boardOperations';
import BoardForm from '../BoardForm/BoardForm';

const NewBoard = ({ onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCreateBoard = async boardData => {
    const requestData = {
      title: boardData.title,
      icon: boardData.selectedIcon,
    };

    if (boardData.selectedBackground !== 'iconBackground') {
      requestData.backgroundImage = boardData.selectedBackground;
    }

    const newBoard = await dispatch(addBoard(requestData)).unwrap();
    navigate(`/home/${newBoard._id}`);
    onClose();
  };

  return (
    <div>
      <BoardForm
        formTitle="New board"
        buttonText="Create"
        onSubmit={handleCreateBoard}
      />
    </div>
  );
};

export default NewBoard;
