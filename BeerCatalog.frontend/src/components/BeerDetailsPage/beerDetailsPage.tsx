import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { ClipLoader } from "react-spinners";

import Table from "../Table/table";
import List from "../List/list";
import Wrapper from "../Wrapper/wrapper";
import TitledSection from "../TitledSection/titledSection";
import BeerPropertiesItem from "../BeerPropertiesItem/beerPropertiesItem";
import BeerDetailsHeading from "../BeerDetailsHeading/beerDetailsHeading";

import { addBeerFavorites, removeBeerFavorites } from "../../store/action";
import { BeerItem } from "../../store/models/BeerItem";
import { AppState } from "../../store/state";

import { getBeerById } from "../../api/punkAPI";

import "./beerDetailsPage.scss";

const BeerDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const numberId = parseInt(id);
  const [beer, setBeer] = useState<BeerItem | null>(null);
  const dispatch = useDispatch();
  const isFavorite = useSelector((state: AppState) => state.favoriteBeerIDs.includes(numberId));

  const buttonText = useMemo(() => (isFavorite ? "REMOVE FROM FAVORITE" : "ADD TO FAVORITES"), [isFavorite]);

  const handleClick = useCallback(() => {
    isFavorite ? dispatch(removeBeerFavorites(numberId)) : dispatch(addBeerFavorites(numberId));
  }, [isFavorite, numberId, dispatch]);

  useEffect(() => {
    getBeerById(id).then((result) => setBeer(result));
  }, [id]);

  return beer === null ? (
    <div className="centered">
      <ClipLoader color="#eb331b" />
    </div>
  ) : (
    <Wrapper>
      <div className="beer-details">
        <BeerDetailsHeading
          name={beer.name}
          tagline={beer.tagline}
          description={beer.description}
          imageUrl={beer.image_url}
          favoriteButtonText={buttonText}
          onFavorite={handleClick}
        />
        <div className="beer-details__middle">
          <div className="beer-details__properties">
            <TitledSection title="Properties">
              <Table>
                <BeerPropertiesItem name="ABV" tooltip="Alcohol by volume" value={beer.abv} />
                <BeerPropertiesItem name="IBU" tooltip="International Bitterness Units" value={beer.ibu} />
                <BeerPropertiesItem name="EBC" tooltip="European Brewery Convention" value={beer.ebc} />
              </Table>
            </TitledSection>
          </div>
          <div className="beer-details__food-pairing">
            <TitledSection title="Food Pairing">
              <Table>{beer.food_pairing.map((food) => food)}</Table>
            </TitledSection>
          </div>
        </div>
        <div className="beer-details__brewing">
          <TitledSection title="Brewing">
            <p>{beer.brewers_tips}</p>
          </TitledSection>
        </div>
        <div className="beer-details__bottom">
          <div className="beer-details__ingredients">
            <TitledSection title="Ingredients">
              <Table>
                <div>
                  <h3>Malt</h3>
                  <List>{beer.ingredients.malt.map((malt) => `${malt.name} - ${malt.amount.value} ${malt.amount.unit}`)}</List>
                </div>
                <div>
                  <h3>Hops</h3>
                  <List>{beer.ingredients.hops.map((hops) => `${hops.name} - ${hops.amount.value} ${hops.amount.unit}, add when ${hops.add}`)}</List>
                </div>
                <div>
                  <h3>Yeast</h3>
                  <List>{beer.ingredients.yeast}</List>
                </div>
              </Table>
            </TitledSection>
          </div>
          <TitledSection title="Method">
            <h3>Mash</h3>
            <List>{beer.method.mash_temp.map((mash) => `${mash.duration} minutes at ${mash.temp.value} ${mash.temp.unit}`)}</List>
            <h3>Fermentation</h3>
            <span>{`Perfom at ${beer.method.fermentation.temp.value} ${beer.method.fermentation.temp.unit}`}</span>
            {beer.method.twist ? (
              <>
                <h3>Twist</h3>
                <p>{beer.method.twist}</p>
              </>
            ) : null}
          </TitledSection>
        </div>
      </div>
    </Wrapper>
  );
};

export default BeerDetailsPage;
