import { useDispatch} from 'react-redux';
import { addBoard } from '../../redux/board/boardOperations';  
import BoardForm from '../BoardForm/BoardForm';

const NewBoard = ({ onClose }) => {
  const dispatch = useDispatch();

  const handleCreateBoard = async boardData => {
    const requestData = {
      title: boardData.title,
      icon: boardData.selectedIcon,
    };
  
    if (boardData.selectedBackground !== 'iconBackground') {
      requestData.backgroundImage = boardData.selectedBackground;
    }
  
    try {
      await dispatch(addBoard(requestData)).unwrap();
      console.log('New Board Created:', requestData);
      onClose();
    } catch (err) {
      console.error('Failed to create board:', err.response?.data || err.message);
    }
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
