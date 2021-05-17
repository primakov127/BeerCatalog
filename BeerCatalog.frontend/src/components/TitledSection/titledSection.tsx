import React from "react";
import "./titledSection.scss";

interface TitledSectionProps {
  title: string;
}

const TitledSection: React.FC<TitledSectionProps> = ({ title, children }) => (
  <section>
    <h2 className="title">{title}</h2>
    {React.Children.map(children, (child, index) => (
      <div key={index}>{child}</div>
    ))}
  </section>
);

export default TitledSection;
