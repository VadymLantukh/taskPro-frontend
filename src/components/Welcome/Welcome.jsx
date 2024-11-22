import { Link } from 'react-router-dom';

import Icon from '../Icon/Icon';
import PersonMobile1x from '../../images/person_mobile@1x.webp';
import PersonMobile2x from '../../images/person_mobile@2x.webp';
import PersonDesktop1x from '../../images/person_desktop@1x.webp';
import PersonDesktop2x from '../../images/person_desktop@2x.webp';

import s from './Welcome.module.css';

const Welcome = () => {
  return (
    <div className={s.wrapper}>
      <picture className={s.mainImage}>
        <source
          media="(min-width: 768px)"
          srcSet={`${PersonDesktop1x} 1x, ${PersonDesktop2x} 2x`}
        />
        <source
          media="(max-width: 767px)"
          srcSet={`${PersonMobile1x} 1x, ${PersonMobile2x} 2x`}
        />
        <img
          src={PersonMobile1x}
          srcSet={`${PersonMobile1x} 1x, ${PersonMobile2x} 2x`}
          alt="User with laptop"
        />
      </picture>
      <div className={s.iconProject}>
        <Icon name={'icon_6'} className={s.iconName} />

        <h1 className={s.projectName}>Task Pro</h1>
      </div>
      <p className={s.description}>
        Supercharge your productivity and take control of your tasks with Task
        Pro - Don&apos;t wait, start achieving your goals now!
      </p>
      <ul className={s.list}>
        <li>
          <Link className={s.register} to="/auth/register">
            Registration
          </Link>
        </li>
        <li>
          <Link className={s.login} to="/auth/login">
            Log In
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Welcome;
