import BoardForm from '../BoardForm/BoardForm';

const EditBoard = ({ boardToEdit = {} }) => {
  // Заглушка с дефолтными значениями
  const defaultBoard = {
    title: 'Sample Board',               // Дефолтное название
    icon: 'icon_2',                      // Дефолтная иконка
    background: 'bg_0'                   // Дефолтный фон
  };

  // Используем переданные значения, если они есть, иначе берем значения из заглушки
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
