import AddColumn from '../AddColumn/AddColumn';

const EditColumn = ({ title, columnId }) => {
  return <AddColumn title={title} columnId={columnId} formName="Edit column" />;
};

export default EditColumn;
