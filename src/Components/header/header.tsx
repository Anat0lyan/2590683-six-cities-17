import { useLocation } from 'react-router-dom';
import { email, isAuth } from '../../Mock';

export default function Header() {
  // const location = useLocation();
  // console.log(location.pathname);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link header__logo-link--active">
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width="81"
                height="41"
              />
            </a>
          </div>

          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <a
                  className="header__nav-link header__nav-link--profile"
                  href="#"
                >
                  <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                  {isAuth? 
                  <>
                  <span className="header__user-name user__name">{email}</span>
                        <span className="header__favorite-count">3</span> 
                  
                  </>
                  : 
                  <span className="header__login">Sign in</span>
                  }
                  
                </a>
              </li>
              <li className="header__nav-item">
                <a className="header__nav-link" href="#">
                  <span className="header__signout">Sign out</span>
                </a>
              </li>
            </ul>
          </nav>

        </div>
      </div>
    </header>
  );
}