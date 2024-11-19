import '../../styles/variables.css'
import s from './Loader.module.css';

const Loader = () => {
  return (
    <div className={s.loader}>
      <div>
        <div className={s.taskIcon}>
          <div className={s.clipboard}>
            <div className={s.clipboardTop}></div>
            <div className={s.line}></div>
            <div className={s.line}></div>
            <div className={s.line}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
