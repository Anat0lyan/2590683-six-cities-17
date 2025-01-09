import React from 'react';
import ReactDOM from 'react-dom/client';
import { mockOffers } from './mocks/offers';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App cards={mockOffers}></App>
  </React.StrictMode>
);
