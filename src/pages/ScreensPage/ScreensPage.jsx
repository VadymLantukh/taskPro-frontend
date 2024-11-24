import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import HeaderDashboard from '../../components/HeaderDashboard/HeaderDashboard.jsx';
import MainDashboard from '../../components/MainDashboard/MainDashboard.jsx';

import s from './ScreensPage.module.css';
import { fetchBoard } from '../../redux/board/boardOperations';
import { selectBoard } from '../../redux/board/boardSelectors.js';
import Images from '../../images/Image.js';
import { useScreenWidth } from '../../hooks/useScreenWidth.js';

const ScreensPage = () => {
  const board = useSelector(selectBoard);
  const dispatch = useDispatch();

  const { boardId } = useParams();

  useEffect(() => {
    dispatch(fetchBoard({ id: boardId }));
  }, [dispatch, boardId]);

  const backgroundImage = Images[board.backgroundImage];

  const { isSmallScreen, isMediumScreen, isLargeScreen } = useScreenWidth();

  const getBackgroundImage = () => {
    if (!backgroundImage) return null;

    if (isSmallScreen) {
      return backgroundImage.mobile;
    } else if (isMediumScreen) {
      return backgroundImage.tablet;
    } else if (isLargeScreen) {
      return backgroundImage.desktop;
    }
  };

  const selectedBackground = getBackgroundImage();

  const style = selectedBackground
    ? {
        backgroundImage: `
          image-set(
            url(${selectedBackground.x1}) 1x,
            url(${selectedBackground.x2}) 2x
          )
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%',
      }
    : {};

  return (
    <div className={s.container} style={style}>
      <HeaderDashboard />
      <MainDashboard />
    </div>
  );
};

export default ScreensPage;
