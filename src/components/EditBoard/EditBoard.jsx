import BoardForm from '../BoardForm/BoardForm';

const EditBoard = ({ boardToEdit = {} }) => {

  const defaultBoard = {
    title: 'Sample Board',               
    icon: 'icon_2',                      
    background: 'bg_0'                   
  };

 
  const { title, icon, background } = { ...defaultBoard, ...boardToEdit };

  const handleUpdateBoard = (updatedBoardData) => {
    console.log('Board Updated:', updatedBoardData);
  };

  return (
    <BoardForm
      initialTitle={title}
      initialSelectedIcon={icon}
      initialSelectedBackground={background}
      formTitle="Edit board"
      buttonText="Edit"
      onSubmit={handleUpdateBoard}
    />
  );
};

export default EditBoard;
