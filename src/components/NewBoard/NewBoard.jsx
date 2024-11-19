import { useDispatch, useSelector } from 'react-redux';
import { addBoard } from '../../redux/board/boardOperations';  
import { selectIsLoading, selectIsError } from '../../redux/board/boardSelectors'; 
import BoardForm from '../BoardForm/BoardForm';

const NewBoard = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectIsError);

  const handleCreateBoard = async boardData => {
    const requestData = {
      title: boardData.title,
      icon: boardData.selectedIcon,
      backgroundImage: boardData.selectedBackground,
    };
  
    try {
      await dispatch(addBoard(requestData)).unwrap();
      console.log('New Board Created:', requestData);
    } catch (err) {
      console.error('Failed to create board:', err.response?.data || err.message);
    }
  };
  

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <BoardForm
        formTitle="New board"
        buttonText="Create"
        onSubmit={handleCreateBoard}
      />
    </div>
  );
};

export default NewBoard;
