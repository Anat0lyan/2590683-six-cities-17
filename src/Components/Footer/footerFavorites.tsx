import { Link } from 'react-router-dom';

type FooterPropsType = {
  isEmpty: boolean;
};

export default function Footer({ isEmpty }: FooterPropsType) {
  return (
    <footer className={`${isEmpty ? 'footer' : 'footer container'}`}>
      <Link to="/" className="footer__logo-link">
        <img
          className="footer__logo"
          src="img/logo.svg"
          alt="6 cities logo"
          width="64"
          height="33"
        />
      </Link>
    </footer>
  );
}
