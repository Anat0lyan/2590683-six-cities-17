import Main from './Pages/mainPage';
import { CardType } from './Mock/index';
import LoginPage from './Pages/loginPage';
import Favorites from './Pages/favorites';
import Offer from './Pages/offer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFoundPage from './Pages/notFoundPage';

interface AppProps {
  offers: CardType[];
}

function App({ offers }: AppProps) {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<Main offers={offers} />}></Route>
          <Route path='login' element={<LoginPage/>}></Route>
          <Route path='favorites' element={<Favorites/>}></Route>
          <Route path='offer' element={<Offer/>}></Route>
          <Route path='*' element={<NotFoundPage/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;
