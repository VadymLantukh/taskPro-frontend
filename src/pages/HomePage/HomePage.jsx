import MainDashboard from '../../components/MainDashboard/MainDashboard';
import TasksList from '../../components/TasksList/TasksList';
import s from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={s.homePage}>
      Before starting your project, it is essential
      <button onClick={() => console.log('click')}> to create a board</button>
      to create a board to visualize and track all the necessary tasks and
      milestones. This board serves as a powerful tool to organize the workflow
      and ensure effective collaboration among team members.
      <TasksList />
    </div>
  );
};

export default HomePage;
