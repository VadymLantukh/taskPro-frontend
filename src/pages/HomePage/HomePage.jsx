import s from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={s.homePage_container}>
      <p className={s.text}>
        Before starting your project, it is essential&nbsp;
        <button className={s.btn} onClick={() => console.log('click')}>
          to create a board&nbsp;
        </button>
        to visualize and track all the necessary tasks and milestones. This
        board serves as a powerful tool to organize the workflow and ensure
        effective collaboration among team members.
      </p>
    </div>
  );
};

export default HomePage;
