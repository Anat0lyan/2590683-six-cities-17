import Main from './Pages/mainPage';
import { CardType } from './Mock/index';
import LoginPage from './Pages/loginPage';
import Favorites from './Pages/favorites';
import Offer from './Pages/offer';
import OfferNotLogged from './Pages/offerNotLogged';

interface AppProps {
  offers: CardType[];
}

function App({ offers }: AppProps) {
  return (
    <>
      <Main offers={offers} isEmpty />
      <LoginPage />
      <Favorites />
      <Offer />
      <OfferNotLogged />
    </>
  );
}
export default App;
