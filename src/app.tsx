import Main from './pages/mainPage';
import LoginPage from './pages/loginPage';
import Favorites from './pages/favorites';
import Offer from './pages/offer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFoundPage from './pages/notFoundPage';
import { CardType } from './components/card/cardType';
import { RoutesTo } from '../src/const';
import { useEffect } from 'react';

interface AppProps {
  offers: CardType[];
}

export type AuthDataResponseType = {
  avatarUrl: string;
  email: string;
  isPro: boolean;
  name: string;
  token: string;
};

function App({ offers }: AppProps) {
  // const [reponseAuth, setReponseAuth] = useState<AuthDataResponseType | {}>({});
  let reponseAuth: AuthDataResponseType = {};
  const setReponseAuth = (data: AuthDataResponseType) => {
    reponseAuth = { ...data };
  };

  useEffect(() => {
    console.log(reponseAuth.token);
  }, [reponseAuth]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={<Main offers={offers} reponseAuth={reponseAuth} />}
          />
          <Route
            path={RoutesTo.LOGIN}
            element={<LoginPage setReponseAuth={setReponseAuth} />}
          />
          <Route path={RoutesTo.FAVORITES} element={<Favorites isEmpty />} />
          <Route path={RoutesTo.OFFER} element={<Offer />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
