import { useState } from 'react';
import s from '../NeedHelp/NeedHelp.module.css';
import Icons from '../../../src/images/icons.svg';
import flowerpot from '../../images/flowerpot.webp';
import HelpForm from './HelpForm/HelpForm.jsx';

const NeedHelp = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // const handleClick = () => {
  //   alert('кукусики');
  // };

  return (
    <>
      <div className={s.container}>
        <picture>
          <img
            className={s.flower}
            src={flowerpot}
            srcSet={flowerpot}
            alt="flower"
          />
        </picture>

        <p className={s.p}>
          If you need help with <span className={s.task}>TaskPro</span>, check
          out our support resources or reach out to our customer support team.
        </p>
        <div className={s.needHelp}>
          <svg className={s.icon} width={20} height={20}>
            <use href={`${Icons}#icon-help`} />
          </svg>
          <button className={s.button} onClick={handleOpen}>
            Need help?
          </button>
        </div>
      </div>
      <HelpForm open={open} onClose={handleClose} />
    </>
  );
};

export default NeedHelp;
