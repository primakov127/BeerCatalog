import Dotdotdot from "react-dotdotdot";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { removeBeerFavorites } from "../../store/action";
import RoundedImage from "../RoundedImage/roundedImage";

import "./favoriteBeerCard.scss";

interface FavoriteBeerCardProps {
  id: number;
  name: string;
  tagline: string;
  description: string;
  image_url: string;
}

const FavoriteBeerCard = ({ id, name, tagline, description, image_url }: FavoriteBeerCardProps) => {
  const dispatch = useDispatch();

  const beerDetailsPageUrl = `/beers/${id}`;

  const removeFavorite = () => {
    dispatch(removeBeerFavorites(id));
  };

  return (
    <div className="favorite-beer-card">
      <div className="favorite-beer-card__container">
        <div className="favorite-beer-card__information">
          <h2 className="favorite-beer-card__name">{name}</h2>
          <span className="favorite-beer-card__tagline">{tagline}</span>
          <Dotdotdot clamp={5}>
            <p className="favorite-beer-card__description">{description}</p>
          </Dotdotdot>
        </div>
        <RoundedImage imageUrl={image_url} />
      </div>
      <Link className="favorite-beer-card__link" to={beerDetailsPageUrl}>
        OPEN
      </Link>
      <button className="favorite-beer-card__link" onClick={removeFavorite}>
        REMOVE FAVORITE
      </button>
    </div>
  );
};

export default FavoriteBeerCard;
