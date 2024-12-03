import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import fetchData from './mock';
import { CardType } from './components/card/cardType';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const offers: CardType[] = await fetchData(
  'https://16.design.htmlacademy.pro/six-cities/offers'
);

root.render(
  <React.StrictMode>
    <App offers={offers} />
  </React.StrictMode>
);
