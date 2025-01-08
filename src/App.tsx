import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/main/mainPage';
import { LoginPage } from './pages/login/loginPage';
import FavoritesPage from './pages/favorites/favoritesPage';
import OfferPage from './pages/offer/offerPage';
import { OfferInterface, mockOffers } from './mocks/offers';
import { reviewsArray } from './mocks/reviews';
import PrivateRoute from './components/Private-Route/PrivateRoute';
import NotFoundPage from './pages/NotFound/NotFoundPage';

type AppProps = {
  cards: OfferInterface[];
};

function App({ cards }: AppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage cards={cards} />} />
        <Route path="login" element={<LoginPage />} />
        <Route
          path="favorites"
          element={
            <PrivateRoute element={<FavoritesPage offers={mockOffers} />} />
          }
        />
        <Route
          path="offer/:id"
          element={
            <OfferPage mockDetailedOffers={mockOffers} reviews={reviewsArray} />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
