import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUserThunk } from '../../redux/auth/authOperations';
import { useEffect } from 'react';
import { selectUser } from '../../redux/auth/authSelectors';

const ScreensPage = () => {
  const { boardId } = useParams();
  // const { id } = useSelector(selectUser);
  console.log('getter');

  useEffect(() => {
    // const board = dispatch(getBoard(boardId))
  });

  return (
    <div>
      ScreensPage
      {boardId}
    </div>
  );
};

export default ScreensPage;
