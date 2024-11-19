import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getUserThunk } from '../../redux/auth/authOperations';
import { selectUser } from '../../redux/auth/authSelectors';
import HeaderDashboard from '../../components/HeaderDashboard/HeaderDashboard.jsx';
import MainDashboard from '../../components/MainDashboard/MainDashboard.jsx';

import s from './ScreensPage.module.css';
import { fetchBoard } from '../../redux/board/boardOperations';

const ScreensPage = () => {
  const dispatch = useDispatch();

  const { boardId } = useParams();

  useEffect(() => {
    dispatch(fetchBoard(boardId));
  }, [dispatch, boardId]);

  return (
    <div className={s.container}>
      <HeaderDashboard title={boardId} />
      <MainDashboard />
    </div>
  );
};

export default ScreensPage;
