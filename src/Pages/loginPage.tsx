import { useState } from 'react';
import fetchData, { API } from '../mock';

type AuthDataType = {
  email: string;
  password: string;
};

function LoginPage() {
  const [dataForm, setDataForm] = useState<AuthDataType>({
    email: 'Oliver@gmail.com',
    password: 'pass',
  });

  const handleChangeAuthData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDataForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const response = await fetchData(
      `${API}/six-cities/login`,
      { ...dataForm },
      {
        'Content-Type': 'application/json',
        // 'X-Token': 'T2xpdmVyLmNvbm5lckBnbWFpbC5jb20=',
      }
    );
    // console.log(response);
  };

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width="81"
                  height="41"
                />
              </a>
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
