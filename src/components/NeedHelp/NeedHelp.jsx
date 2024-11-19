import s from '../NeedHelp/NeedHelp.module.css';
import Icon from '../Icon/Icon';
import flowerpot from '../../images/flowerpot.webp';

const NeedHelp = () => {
  const handleClick = () => {
    alert('кукусики');
  };

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
          <Icon name="icon-help" className={s.icon} />
          <button className={s.button} onClick={handleClick}>
            Need help?
          </button>
        </div>
      </div>
    </>
  );
};

export default NeedHelp;
