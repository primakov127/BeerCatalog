import React from "react";

import "./table.scss";

const Table: React.FC = ({ children }) => (
  <table className="table">
    <tbody>
      {React.Children.map(children, (child, index) => (
        <tr key={index}>
          <td>{child}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;
