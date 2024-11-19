import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { useEffect } from 'react';

const ScreensPage = () => {
  const { boardId } = useParams();

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
