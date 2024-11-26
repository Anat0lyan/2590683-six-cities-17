import Main from './Pages/mainPage';
import { CardType } from './Mock/index';
import LoginPage from './Pages/LoginPage';
import Favorites from './Pages/favorites';
import MainEmpty from './Pages/mainPage-empty';
import Offer from './Pages/offer';
import OfferNotLogged from './Pages/offerNotLogged';

interface AppProps {
  offers: CardType[];
}

function App({ offers }: AppProps) {
  return (
    <>
      <Main offers={offers} />
      <MainEmpty />
      <LoginPage />
      <Favorites />
      <Offer />
      <OfferNotLogged />
    </>
  );
}
export default App;
