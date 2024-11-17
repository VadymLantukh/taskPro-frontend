import { useParams } from 'react-router-dom';
import HeaderDashboard from '../../components/HeaderDashboard/HeaderDashboard.jsx';
import MainDashboard from '../../components/MainDashboard/MainDashboard.jsx';

import styles from './ScreensPage.module.css';

const ScreensPage = () => {
  const { boardId } = useParams();
  return (
    <div className={styles.container}>
      <HeaderDashboard title={boardId}/>
      <MainDashboard/>
    </div>
  );
};

export default ScreensPage;
