import { useDispatch, useSelector } from "react-redux";

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

  const handleChangeABV = (value: number[]) => {
    dispatch(setFilterABV(value));
    onAnyChange();
  };

  const handleChangeIBU = (value: number[]) => {
    dispatch(setFilterIBU(value));
    onAnyChange();
  };

  const handleChangeEBC = (value: number[]) => {
    dispatch(setFilterEBC(value));
    onAnyChange();
  };

  return (
    <div className="filters">
      <div className="filters__item">
        <span className="filters__item-label">Alcohol by volume</span>
        <ValueSlider min={0} max={56} step={0.1} value={abv} onChange={handleChangeABV} />
      </div>
      <div className="filters__item">
        <span className="filters__item-label">International Bitterness Units</span>
        <ValueSlider min={0} max={251} step={1} value={ibu} onChange={handleChangeIBU} />
      </div>
      <div className="filters__item">
        <span className="filters__item-label">Color by EBC</span>
        <ValueSlider min={0} max={601} step={1} value={ebc} onChange={handleChangeEBC} />
      </div>
    </div>
  );
};

export default Filters;
