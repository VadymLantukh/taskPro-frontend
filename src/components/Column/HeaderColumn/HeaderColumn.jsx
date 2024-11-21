import IconButton from '../../IconButton/IconButton.jsx';

import s from "./HeaderColumn.module.css"

export const HeaderColumn = ({title}) => {

  return (
    <div className={s.container}>
      <h3 className={s.title}>{title}</h3>
      <div className={s["icon-container"]}>
        <IconButton name="icon-pencil"/>
        <IconButton name="icon-trash"/>
      </div>
    </div>
  );
};

export default HeaderColumn;
