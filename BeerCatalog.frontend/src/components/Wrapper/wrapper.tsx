import { FunctionComponent } from "react";

import "./wrapper.scss";

const Wrapper: FunctionComponent = ({ children }) => {
  return <div className="wrapper">{children}</div>;
};

export default Wrapper;
