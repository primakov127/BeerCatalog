import RoundedImage from "../RoundedImage/roundedImage";

import "./beerDetailsHeading.scss";

interface BeerDetailsHeadingProps {
  name: string;
  tagline: string;
  description: string;
  imageUrl: string;
  favoriteButtonText: string;
  onFavorite: () => void;
}

const BeerDetailsHeading = ({ name, tagline, description, imageUrl, favoriteButtonText, onFavorite }: BeerDetailsHeadingProps) => (
  <div className="beer-details-heading">
    <div className="beer-details-heading__container">
      <h1 className="beer-details-heading__name">{name}</h1>
      <span className="beer-details-heading__tagline">{tagline}</span>
      <div className="beer-details-heading__button" onClick={onFavorite}>
        {favoriteButtonText}
      </div>
      <p>{description}</p>
    </div>
    <RoundedImage imageUrl={imageUrl} />
  </div>
);

export default BeerDetailsHeading;
