import { useState } from 'react';
import s from './NewBoard.module.css';
import svg from '../../images/icons.svg';

const icons = [
  'icon-project',
  'icon-star',
  'icon-ball',
  'icon-puzzle',
  'icon-cube',
  'icon-lightning',
  'icon-circles',
  'icon-hexagon',
];

const NewBoard = () => {
  const [selectedIcon, setSelectedIcon] = useState(icons[0]);
  const [selectedBackground, setSelectedBackground] = useState('bg_0'); // По умолчанию bg_0

  const handleIconChange = (event) => {
    setSelectedIcon(event.target.value);
  };

  const handleBackgroundChange = (event) => {
    setSelectedBackground(event.target.value);
  };

  return (
    <div className={s.newBoardContainer}>
      <h2 className={s.newBoardTitle}>New board</h2>
      <form className={s.form}>
        <input type="text" placeholder="Title" className={s.newBoardTitleInput} />

        <h3 className={s.iconText}>Icons</h3>
        <div className={s.iconsContainer}>
          {icons.map((icon) => (
            <label key={icon} className={s.iconLabel}>
              <input
                type="radio"
                name="boardIcon"
                value={icon}
                checked={selectedIcon === icon}
                onChange={handleIconChange}
                className={s.radioInput}
              />
              <svg className={s.icon}>
                <use href={`${svg}#${icon}`} />
              </svg>
            </label>
          ))}
        </div>

        <h3 className={s.backgroundText}>Background</h3>
        <div className={s.backgroundsContainer}>
          {Array.from({ length: 16 }, (_, index) => {
            const bgName = `bg_${index}`;
            return (
              <label
                key={bgName}
                className={`${s.backgroundLabel} ${selectedBackground === bgName ? s.selected : ''}`}
              >
                <input
                  type="radio"
                  name="boardBackground"
                  value={bgName}
                  checked={selectedBackground === bgName}
                  onChange={handleBackgroundChange}
                  className={s.radioInput}
                />
                <img
                  src={`src/images/${bgName}_mobile@1x.webp`}
                  alt={`Background ${index}`}
                  className={s.backgroundImage}
                />
              </label>
            );
          })}
        </div>

        <button type="submit" className={s.createBtn}>Create</button>
      </form>
    </div>
  );
};

export default NewBoard;
