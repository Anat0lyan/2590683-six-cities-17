import { formatDate } from '../../helpers/format-date';
import { ReviewType } from '../../mocks/reviews';
import RatingItem from '../rating-item/rating-item';

type OneReviewPropsType = {
  review: ReviewType;
};

function OneReview({ review }: OneReviewPropsType) {
  const formattedDate = formatDate(review.date);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={review.user.avatarUrl}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{review.user.name}</span>
      </div>
      <div className="reviews__info">
        <RatingItem rating={review.rating} type={'review'} />
        <p className="reviews__text">{review.comment}</p>
        <time
          className="reviews__time"
          // dateTime="2019-04-24"
        >
          {formattedDate}
        </time>
      </div>
    </li>
  );
}

export default OneReview;
