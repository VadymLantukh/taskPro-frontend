import Button from '../Button/Button.jsx';

import s from "./MainDashboard.module.css"

export const MainDashboard = () => {
  const isEmptyColumn = true;
  return (
    <div>
      {isEmptyColumn &&
      <Button showIcon={true} text="Add another column" className={s.button}/>
      }
    </div>
  );
};

export default MainDashboard;
