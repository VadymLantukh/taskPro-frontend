import Icons from '../../images/icons.svg';

export const Icon = ({ name, ...props }) => {
  return (
    <svg {...props}>
      <use href={`${Icons}#${name}`}></use>
    </svg>
  );
};
export default Icon;
