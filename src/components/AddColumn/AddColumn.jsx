import { useState } from 'react';
import Button from '../Button/Button';
import s from '../NewBoard/NewBoard.module.css';

const AddColumn = ({ title = '', columnId = null }) => {
  const [title, setTitle] = useState('');

  const handleTitleChange = e => {
    setTitle(e.target.value);
  };

  const addColumnHandleClick = e => {
    e.preventDefault();

    if (title.trim() === '') {
      setTitleError('Title is required');
      console.log('Title is required');
    } else {
      setTitleError('');
      if (columnId !== null) {
        console.log('Column renamed: ', e.target.value);
      } else {
        console.log('New column added: ', e.target.value);
      }
    }
  };

  return (
    <div>
      <h2 className={s.newBoardTitle}>Add column</h2>
      <form className={s.form}>
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          className={s.newBoardTitleInput}
        />
        <Button onClick={addColumnHandleClick} text="Add" showIcon={true} />
      </form>
    </div>
  );
};

export default AddColumn;
