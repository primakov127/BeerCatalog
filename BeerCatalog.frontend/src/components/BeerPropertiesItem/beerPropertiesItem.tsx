import ReactTooltip from "react-tooltip";

import "./beerPropertiesItem.scss";

interface BeerPropertiesItemProps {
  name: string;
  tooltip: string;
  value: number;
}

const BeerPropertiesItem = ({ name, tooltip, value }: BeerPropertiesItemProps) => (
  <div className="beer-properties-item">
    <ReactTooltip effect="solid" />
    <div>
      {name}
      <span className="beer-properties-item__tooltip" data-tip={tooltip}>
        i
      </span>
    </div>
    <span>{value}</span>
  </div>
);

export default BeerPropertiesItem;
