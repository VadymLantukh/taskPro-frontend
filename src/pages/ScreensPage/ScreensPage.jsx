import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchBoard } from '../../redux/board/boardOperations';

const ScreensPage = () => {
  const dispatch = useDispatch();

  const { boardId } = useParams();

  useEffect(() => {
    dispatch(fetchBoard(boardId));
  }, [dispatch, boardId]);

  return (
    <div>
      ScreensPage
      {boardId}
    </div>
  );
};

export default ScreensPage;
