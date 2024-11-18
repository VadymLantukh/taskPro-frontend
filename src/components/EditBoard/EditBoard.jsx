import BoardForm from './BoardForm';

const EditForm = ({ boardToEdit }) => {
  const handleUpdateBoard = (updatedBoardData) => {
    console.log('Board Updated:', updatedBoardData);
  };

  return (
    <BoardForm
      initialTitle={boardToEdit.title}
      initialSelectedIcon={boardToEdit.icon}
      initialSelectedBackground={boardToEdit.background}
      formTitle="Edit board"
      buttonText="Update"
      onSubmit={handleUpdateBoard}
    />
  );
};

export default EditForm;
