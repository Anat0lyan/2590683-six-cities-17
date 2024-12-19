import { useState } from 'react';
import { API, fetchPostData } from '../mock';
import { AuthDataResponseType } from '../app';
import { Link, NavLink } from 'react-router-dom';

type AuthDataType = {
  email: string;
  password: string;
};
type LoginPagePropsType = {
  setReponseAuth: (data: AuthDataResponseType) => void;
};

function LoginPage({ setReponseAuth }: LoginPagePropsType) {
  const [dataForm, setDataForm] = useState<AuthDataType>({
    email: 'Oliver.conner@gmail.com',
    password: 'password1',
  });

  const handleChangeAuthData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDataForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const response: AuthDataResponseType = await fetchPostData(
      `${API}/six-cities/login`,
      { ...dataForm },
      {
        'Content-Type': 'application/json',
        // 'X-Token': 'T2xpdmVyLmNvbm5lckBnbWFpbC5jb20=',
      }
    );
    setReponseAuth(response);
    <NavLink to="/"></NavLink>;
  };

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to="/">
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width="81"
                  height="41"
                />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post">
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  value={dataForm.email}
                  onChange={handleChangeAuthData}
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  value={dataForm.email}
                  onChange={handleChangeAuthData}
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
                onClick={submitHandler}
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
