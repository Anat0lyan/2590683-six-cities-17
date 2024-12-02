import Card from '../Components/Card/Card';
import Header from '../Components/header/header';
import LocationItem from '../Components/location-item/locationItem';
import SortBy from '../Components/sort/sortBy';
import { CardType } from '../Components/Card/cardType';
import { Cities } from '../Mock/index';
import { isAuth } from '../Mock/index';

interface MainProps {
  offers: CardType[];
}

function Main({ offers }: MainProps) {
  return (
    <div className="page page--gray page--main">
      <Header />
      <main
        className={`page__main page__main--index
        ${!isAuth ? 'page__main--index-empty' : ''}`}
      >
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            {Cities && (
              <ul className="locations__list tabs__list">
                {Cities.map((city) => (
                  <li className="locations__item" key={city}>
                    <LocationItem
                      type={'mainPage'}
                      city={city}
                      key={city}
                      isActive
                    />
                  </li>
                ))}
              </ul>
            )}
          </section>
        </div>
        <div className="cities">
          {isAuth ? (
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">
                  {offers.length} places to stay in Amsterdam
                </b>
                <SortBy />
                <div className="cities__places-list places__list tabs__content">
                  {offers &&
                    offers.map((card: CardType) => (
                      <Card type={'cities'} card={card} key={card.id}></Card>
                    ))}
                </div>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map"></section>
              </div>
            </div>
          ) : (
            <div className="cities__places-container cities__places-container--empty container">
              <section className="cities__no-places">
                <div className="cities__status-wrapper tabs__content">
                  <b className="cities__status">No places to stay available</b>
                  <p className="cities__status-description">
                    We could not find any property available at the moment in
                    Dusseldorf
                  </p>
                </div>
              </section>
              <div className="cities__right-section"></div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
export default Main;
