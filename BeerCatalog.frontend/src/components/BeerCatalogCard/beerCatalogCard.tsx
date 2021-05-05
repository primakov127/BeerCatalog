import { useDispatch } from "react-redux";
import { addBeerFavorites } from "../../store/action";
import "./beerCatalogCard.scss";

interface BeerCatalogCardProps {
  id: number;
  name: string;
  tagline: string;
  image_url: string;
}

const BeerCatalogCard = ({ id, name, tagline, image_url }: BeerCatalogCardProps) => {
  const dispatch = useDispatch();

  const addToFavorite = () => {
    dispatch(addBeerFavorites(id));
  };

  return (
    <div className="beer-catalog-card">
      <div className="beer-catalog-card__img-wrapper">
        <img className="beer-catalog-card__img" src={image_url} alt={name} />
      </div>
      <div className="beer-catalog-card__container">
        <h3 className="beer-catalog-card__title">{name}</h3>
        <span className="beer-catalog-card__tagline">{tagline}</span>
        <button onClick={addToFavorite}>Favorite</button>
      </div>
    </div>
  );
};

export default BeerCatalogCard;
