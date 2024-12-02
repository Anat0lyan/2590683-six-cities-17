import { Link } from 'react-router-dom';

type CardImgProps = {
  redirectPath: string;
  imgPath: string;
};
export default function CardImg({ redirectPath, imgPath }: CardImgProps) {
  return (
    <Link to={redirectPath}>
      <img
        className="place-card__image"
        src={imgPath}
        width="260"
        height="200"
        alt="Place image"
      />
    </Link>
  );
}
