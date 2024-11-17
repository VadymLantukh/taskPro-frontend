import svg from '../images/icons.svg';

export function addSvg(name, size = 28, cl = 'icon') {
  return (
    <svg width={size} height={size} className={cl} fill="none">
      <use href={`${svg}#${name}`}></use>
    </svg>
  );
}
