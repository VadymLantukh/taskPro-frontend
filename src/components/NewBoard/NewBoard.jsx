import BoardForm from "../BoardForm/BoardForm"; 

const NewBoard = () => {
  const handleCreateBoard = (boardData) => {
    console.log('New Board Created:', boardData);
  };

  return (
    <BoardForm
      formTitle="New board"
      buttonText="Create"
      onSubmit={handleCreateBoard}
    />
  );
};

export default NewBoard;
