import { useParams } from 'react-router-dom';

const ScreensPage = () => {
  const { boardId } = useParams();
  return (
    <div>
      ScreensPage
      {boardId}
    </div>
  );
};

export default ScreensPage;
