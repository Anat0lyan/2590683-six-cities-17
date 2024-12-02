import { CardType } from '../Card/cardType';

type RatingItemPropsType = {
  rating: CardType['rating'];
};

export default function RatingItem({ rating }: RatingItemPropsType) {
  const getRatingWidth = () => rating * 2 * 10;

  return (
    <div className="place-card__rating rating">
      <div className="place-card__stars rating__stars">
        <span style={{ width: getRatingWidth() }}></span>
        <span className="visually-hidden">Rating</span>
      </div>
    </div>
  );
}
