import { useDispatch, useSelector } from "react-redux";

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

  const buttonText = isFavorite ? "REMOVE FAVORITE" : "FAVORITE";
  const handleClick = () => {
    isFavorite ? dispatch(removeBeerFavorites(id)) : dispatch(addBeerFavorites(id));
  };

  return (
    <div className="beer-catalog-card">
      <div className="beer-catalog-card__img-wrapper">
        <img className="beer-catalog-card__img" src={image_url} alt={name} />
      </div>
      <div className="beer-catalog-card__container">
        <h3 className="beer-catalog-card__title">{name}</h3>
        <span className="beer-catalog-card__tagline">{tagline}</span>
        <button onClick={handleClick}>{buttonText}</button>
      </div>
    </div>
  );
};

export default BeerCatalogCard;
