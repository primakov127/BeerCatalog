import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { ClipLoader } from "react-spinners";
import ReactTooltip from "react-tooltip";
import Wrapper from "../components/Wrapper/wrapper";
import { addBeerFavorites, removeBeerFavorites } from "../store/action";

import { BeerItem } from "../store/models/BeerItem";
import { AppState } from "../store/state";

import "./beerDetails.scss";

const BeerDetails = () => {
  const { id } = useParams<{ id: string }>();
  const numberId = parseInt(id);
  const [beer, setBeer] = useState<BeerItem | null>(null);
  const dispatch = useDispatch();
  const isFavorite = useSelector((state: AppState) => state.favoriteBeerIDs.includes(numberId));

  const buttonText = isFavorite ? "REMOVE FROM FAVORITE" : "ADD TO FAVORITES";
  const handleClick = () => {
    isFavorite ? dispatch(removeBeerFavorites(numberId)) : dispatch(addBeerFavorites(numberId));
  };

  useEffect(() => {
    fetch(`https://api.punkapi.com/v2/beers/${id}`)
      .then((res) => res.json())
      .then((data) => setBeer(data[0]));
  }, [id]);

  console.log(beer);

  return beer === null ? (
    <ClipLoader />
  ) : (
    <Wrapper>
      <ReactTooltip effect="solid" />
      <div className="beer-details">
        <div className="beer-details__top">
          <div className="beer-details__main-info">
            <h1 className="beer-details__title">{beer.name}</h1>
            <span className="beer-details__tagline">{beer.tagline}</span>
            <div className="beer-details__button" onClick={handleClick}>
              {buttonText}
            </div>
            <p>{beer.description}</p>
          </div>
          <div className="beer-details__img-wrapper">
            <img src={beer.image_url} />
          </div>
        </div>
        <div className="beer-details__middle">
          <div className="beer-details__properties">
            <h2 className="beer-details__label">Properties</h2>
            <table className="beer-details__table">
              <tbody>
                <tr>
                  <td>
                    <div className="beer-details__properties-item">
                      <div>
                        ABV
                        <span className="beer-details__tooltip" data-tip="Alcohol by volume">
                          i
                        </span>
                      </div>
                      <span>{beer.abv}</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="beer-details__properties-item">
                      <div>
                        IBU
                        <span className="beer-details__tooltip" data-tip="International Bitterness Units">
                          i
                        </span>
                      </div>
                      <span>{beer.ibu}</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="beer-details__properties-item">
                      <div>
                        EBC
                        <span className="beer-details__tooltip" data-tip="European Brewery Convention">
                          i
                        </span>
                      </div>
                      <span>{beer.ebc}</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="beer-details__food-pairing">
            <h2 className="beer-details__label">Food Pairing</h2>
            <table className="beer-details__table">
              <tbody>
                {beer.food_pairing.map((food, index) => (
                  <tr key={index}>
                    <td>{food}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="beer-details__brewing">
          <h2 className="beer-details__label">Brewing</h2>
          <p>{beer.brewers_tips}</p>
        </div>
        <div className="beer-details__bottom">
          <div className="beer-details__ingredients">
            <h2 className="beer-details__label">Ingredients</h2>
            <table className="beer-details__table">
              <tbody>
                <tr>
                  <td>
                    <h3>Malt</h3>
                    <div className="beer-details__list">
                      {beer.ingredients.malt.map((malt, index) => (
                        <span key={index}>{`${malt.name} - ${malt.amount.value} ${malt.amount.unit}`}</span>
                      ))}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3>Hops</h3>
                    <div className="beer-details__list">
                      {beer.ingredients.hops.map((hops, index) => (
                        <span key={index}>{`${hops.name} - ${hops.amount.value} ${hops.amount.unit}, add when ${hops.add}`}</span>
                      ))}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3>Yeast</h3>
                    <span>{beer.ingredients.yeast}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="beer-details__method">
            <h2 className="beer-details__label">Method</h2>
            <h3>Mash</h3>
            <div className="beer-details__list">
              {beer.method.mash_temp.map((mash, index) => (
                <span key={index}>{`${mash.duration} minutes at ${mash.temp.value} ${mash.temp.unit}`}</span>
              ))}
            </div>
            <h3>Fermentation</h3>
            <span>{`Perfom at ${beer.method.fermentation.temp.value} ${beer.method.fermentation.temp.unit}`}</span>
            {beer.method.twist ? (
              <>
                <h3>Twist</h3>
                <p>{beer.method.twist}</p>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default BeerDetails;
