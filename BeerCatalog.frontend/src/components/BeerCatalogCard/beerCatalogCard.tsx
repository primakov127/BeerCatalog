import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

import { addBeerFavorites, removeBeerFavorites } from "../../store/action";
import { AppState } from "../../store/state";

import "./beerCatalogCard.scss";

interface BeerCatalogCardProps {
  id: number;
  name: string;
  tagline: string;
  image_url: string;
}

const BeerCatalogCard = ({ id, name, tagline, image_url }: BeerCatalogCardProps) => {
  const isFavorite = useSelector((state: AppState) => state.favoriteBeerIDs.includes(id));
  const dispatch = useDispatch();

  const BeerDetailsPageUrl = `/beers/${id}`;
  const buttonIcon = isFavorite ? <AiFillStar /> : <AiOutlineStar />;
  const handleClick = () => {
    isFavorite ? dispatch(removeBeerFavorites(id)) : dispatch(addBeerFavorites(id));
  };

  return (
    <div className="beer-catalog-card">
      <div className="beer-catalog-card__img-wrapper">
        <img className="beer-catalog-card__img" src={image_url} alt={name} />
      </div>
      <div className="beer-catalog-card__container">
        <button className="beer-catalog-card__button" onClick={handleClick}>
          {buttonIcon}
        </button>
        <h3 className="beer-catalog-card__title">{name}</h3>
        <span className="beer-catalog-card__tagline">{tagline}</span>
        <Link className="beer-catalog-card__link" to={BeerDetailsPageUrl}>
          Open
        </Link>
      </div>
    </div>
  );
};

export default BeerCatalogCard;
