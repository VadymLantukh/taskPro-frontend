import { useState } from 'react';

import ModalWrapper from '../../components/ModalWrapper/ModalWrapper';
import s from './HomePage.module.css';
import AddCard from '../../components/AddCard/AddCard';

const HomePage = () => {
  return (
    <div className={s.homePage}>
      Before starting your project, it is essential
      <button onClick={() => console.log('click')}> to create a board</button>
      to create a board to visualize and track all the necessary tasks and
      milestones. This board serves as a powerful tool to organize the workflow
      and ensure effective collaboration among team members.
    </div>
  );
};

export default HomePage;
