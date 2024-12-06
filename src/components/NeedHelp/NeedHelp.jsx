import { useState } from 'react';

import Icon from '../Icon/Icon';
import flowerpot from '../../images/flowerpot.webp';
import HelpForm from './HelpForm/HelpForm.jsx';

import s from '../NeedHelp/NeedHelp.module.css';

const NeedHelp = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
          <Icon name="icon-help" className={s.icon} width={20} height={20} />
          <button className={s.button} onClick={handleOpen}>
            <p className={s.textHelp}> Need help?</p>
          </button>
        </div>
      </div>
      <HelpForm open={open} onClose={handleClose} />
    </>
  );
};

export default NeedHelp;
