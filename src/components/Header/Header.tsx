import { Navigation } from '../Navigation/Navigation';
import { ReactComponent as LogoIcon } from '../../assets/icons/logo.svg';
import './Header.scss';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__container container">
        <a className="header__logo" href="#">
          <LogoIcon />
        </a>
        <Navigation />
        <button className="header__button">Download for free</button>
      </div>
    </header>
  );
};
