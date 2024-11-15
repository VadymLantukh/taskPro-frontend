import s from './HomePage.module.css';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import ScreensPage from '../../components/ScreensPage/ScreensPage';

const HomePage = () => {
  return (
    <div className={s.homePage}>
      <Header />
      <Sidebar />
      <ScreensPage />
    </div>
  );
};

export default HomePage;
