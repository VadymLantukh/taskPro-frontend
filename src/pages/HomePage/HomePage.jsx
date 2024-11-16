import TasksList from '../../components/TasksList/TasksList';
import s from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={s.homePage}>
      HomePage
      <TasksList />
    </div>
  );
};

export default HomePage;
