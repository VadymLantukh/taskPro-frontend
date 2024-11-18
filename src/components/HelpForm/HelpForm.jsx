import ModalWrapper from '../Modal/Modal';

const HelpForm = () => {
  return (
    <ModalWrapper>
      <div>
        {' '}
        <h2 className={s.HelpFormTitle}>Need help</h2>
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
    </ModalWrapper>
  );
};

export default HelpForm;
