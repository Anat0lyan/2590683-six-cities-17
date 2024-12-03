import Main from './pages/mainPage';
import LoginPage from './pages/loginPage';
import Favorites from './pages/favorites';
import Offer from './pages/offer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFoundPage from './pages/notFoundPage';
import { CardType } from './components/card/cardType';
import { RoutesTo } from '../src/const';

interface AppProps {
  offers: CardType[];
}

function App({ offers }: AppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Main offers={offers} />}></Route>
          <Route path={RoutesTo.LOGIN} element={<LoginPage />}></Route>
          <Route path={RoutesTo.FAVORITES} element={<Favorites isEmpty />} />
          <Route path={RoutesTo.OFFER} element={<Offer />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
