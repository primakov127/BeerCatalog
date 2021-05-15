import React from "react";

import "./list.scss";

const List: React.FC = ({ children }) => (
  <ul className="list">
    {React.Children.map(children, (child, index) => (
      <li key={index}>{child}</li>
    ))}
  </ul>
);

export default List;
