import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { useEffect } from 'react';
import { getUserThunk } from '../../redux/auth/authOperations';
import { selectUser } from '../../redux/auth/authSelectors';
import HeaderDashboard from '../../components/HeaderDashboard/HeaderDashboard.jsx';
import MainDashboard from '../../components/MainDashboard/MainDashboard.jsx';

import s from './ScreensPage.module.css';

const ScreensPage = () => {
  const { boardId } = useParams();

  console.log('getter');

  useEffect(() => {
    // const board = dispatch(getBoard(boardId))
  });

  return (
    <div className={s.container}>
      <HeaderDashboard title={boardId}/>
      <MainDashboard/>
    </div>
  );
};

export default ScreensPage;
