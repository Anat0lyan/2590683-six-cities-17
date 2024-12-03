import PremiumItem from '../premium/premiumItem';
import RatingItem from '../rating/ratingItem';
import CardImg from './cardImg';
import { CardType } from './cardType';

interface CardProps {
  card: CardType;
  type: 'cities' | 'favorites';
}

function Card({ type, card }: CardProps) {
  // console.log(card);

  return (
    <article className={`${type}__card place-card`}>
      {card.isPremium && <PremiumItem />}

      <div className={`${type}__image-wrapper place-card__image-wrapper`}>
        <CardImg redirectPath={''} imgPath={card.previewImage} />
      </div>

      <div
        className={`${card.isFavorite && 'favorites__card-info'} 
          place-card__info`}
      >
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{card.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button ${
              card.isFavorite ? 'place-card__bookmark-button--active' : ''
            } button`}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">
              {card.isFavorite ? 'In bookmarks' : 'To bookmarks'}
            </span>
          </button>
        </div>

        <RatingItem rating={card.rating} />

        <h2 className="place-card__name">
          <a href="#">{card.title}</a>
        </h2>
        <p className="place-card__type">{card.type}</p>
      </div>
    </article>
  );
}
export default Card;
