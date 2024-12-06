import AddColumn from '../AddColumn/AddColumn';

const EditColumn = ({ title, columnId, onClose }) => {
  return (
    <AddColumn
      title={title}
      columnId={columnId}
      formName="Edit column"
      buttonText="Add"
      onClose={onClose}
    />
  );
};

export default EditColumn;
