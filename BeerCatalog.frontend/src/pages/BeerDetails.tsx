import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ClipLoader } from "react-spinners";
import { BeerItem } from "../store/models/BeerItem";

const BeerDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [beer, setBeer] = useState<BeerItem | null>(null);

  useEffect(() => {
    fetch(`https://api.punkapi.com/v2/beers/${id}`)
      .then((res) => res.json())
      .then((data) => setBeer(data[0]));
  }, [id]);

  console.log(beer);

  return beer === null ? (
    <ClipLoader />
  ) : (
    <div>
      <div>
        <div>
          <h1>{beer.name}</h1>
          <span>{beer.tagline}</span>
          <div></div>
          <p>{beer.description}</p>
        </div>
        <div>
          <img src={beer.image_url} />
        </div>
      </div>
      <div>
        <div>
          <h2>Properties</h2>
          <table>
            <tr>
              <div>
                <span>ABV</span>
                <span>{beer.abv}</span>
              </div>
            </tr>
            <tr>
              <div>
                <span>IBU</span>
                <span>{beer.ibu}</span>
              </div>
            </tr>
            <tr>
              <div>
                <span>EBC</span>
                <span>{beer.ebc}</span>
              </div>
            </tr>
          </table>
        </div>
        <div>
          <h2>Food Pairing</h2>
          <table>
            {beer.food_pairing.map((food) => (
              <tr>{food}</tr>
            ))}
          </table>
        </div>
      </div>
      <div>
        <h2>Brewing</h2>
        <p>{beer.brewers_tips}</p>
      </div>
      <div>
        <div>
          <h2>Ingredients</h2>
          <table>
            <tr>
              <h3>Malt</h3>
              <div>
                {beer.ingredients.malt.map((malt) => (
                  <span>{`${malt.name} - ${malt.amount.value} ${malt.amount.unit}`}</span>
                ))}
              </div>
            </tr>
            <tr>
              <h3>Hops</h3>
              <div>
                {beer.ingredients.hops.map((hops) => (
                  <span>{`${hops.name} - ${hops.amount.value} ${hops.amount.unit}, add when ${hops.add}`}</span>
                ))}
              </div>
            </tr>
            <tr>
              <h3>Yeast</h3>
              <span>{beer.ingredients.yeast}</span>
            </tr>
          </table>
        </div>
        <div>
          <h2>Method</h2>
          <h3>Mash</h3>
          <div>
            {beer.method.mash_temp.map((mash) => (
              <span>{`${mash.duration} minutes at ${mash.temp.value} ${mash.temp.unit}`}</span>
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
  );
};

export default BeerDetails;
