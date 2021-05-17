import { Range } from "rc-slider";

import "rc-slider/assets/index.css";
import "./valueSlider.scss";

interface ValueSliderProps {
  min: number;
  max: number;
  step: number;
  value: number[];
  onChange: (value: number[]) => void;
}

const ValueSlider = ({ min, max, step, value, onChange }: ValueSliderProps) => {
  const [fromValue, toValue] = value;

  return (
    <div className="value-slider">
      <span className="value-slider__prefix">{fromValue}</span>
      <Range min={min} max={max} step={step} onChange={onChange} value={value} />
      <span className="value-slider__postfix">{toValue}</span>
    </div>
  );
};

export default ValueSlider;
