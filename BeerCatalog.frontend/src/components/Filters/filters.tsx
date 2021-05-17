import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FILTERS_ABV_MAX_VALUE,
  FILTERS_ABV_STEP,
  FILTERS_EBC_MAX_VALUE,
  FILTERS_EBC_STEP,
  FILTERS_IBU_MAX_VALUE,
  FILTERS_IBU_STEP,
} from "../../constants/beerCatalogConstants";

import { setFilterABV, setFilterEBC, setFilterIBU } from "../../store/action";
import { AppState } from "../../store/state";
import ValueSlider from "../ValueSlider/valueSlider";

import "./filters.scss";

interface FiltersProps {
  onAnyChange: () => void;
}

const Filters = ({ onAnyChange }: FiltersProps) => {
  const { abv, ibu, ebc } = useSelector((state: AppState) => state.searchParams.filter);
  const dispatch = useDispatch();

  const handleChangeABV = useCallback(
    (value: number[]) => {
      dispatch(setFilterABV(value));
      onAnyChange();
    },
    [onAnyChange, dispatch]
  );

  const handleChangeIBU = useCallback(
    (value: number[]) => {
      dispatch(setFilterIBU(value));
      onAnyChange();
    },
    [onAnyChange, dispatch]
  );

  const handleChangeEBC = useCallback(
    (value: number[]) => {
      dispatch(setFilterEBC(value));
      onAnyChange();
    },
    [onAnyChange, dispatch]
  );

  return (
    <div className="filters">
      <div className="filters__item">
        <span className="filters__item-label">Alcohol by volume</span>
        <ValueSlider min={0} max={FILTERS_ABV_MAX_VALUE} step={FILTERS_ABV_STEP} value={abv} onChange={handleChangeABV} />
      </div>
      <div className="filters__item">
        <span className="filters__item-label">International Bitterness Units</span>
        <ValueSlider min={0} max={FILTERS_IBU_MAX_VALUE} step={FILTERS_IBU_STEP} value={ibu} onChange={handleChangeIBU} />
      </div>
      <div className="filters__item">
        <span className="filters__item-label">Color by EBC</span>
        <ValueSlider min={0} max={FILTERS_EBC_MAX_VALUE} step={FILTERS_EBC_STEP} value={ebc} onChange={handleChangeEBC} />
      </div>
    </div>
  );
};

export default Filters;
