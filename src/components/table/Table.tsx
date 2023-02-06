import React from "react";
import "./Table.css";

export interface Data {
  name: string;
  elements: Array<{
    name: string;
    steps: Array<{
      keyword: string;
      name: string;
    }>;
  }>;
}

const Feature: React.FC<{ feature: Data; index: number }> = ({
  feature,
  index,
}) => {
  return (
    <div className="feature-container">
      <a className="feature-container-anchors" id={`feature-${index}`}></a>
      <h2 className="feature-heading">{feature.name}</h2>
      {feature.elements.map((element) => (
        <Scenario element={element} />
      ))}
    </div>
  );
};

const Scenario: React.FC<{
  element: { name: string; steps: Array<{ keyword: string; name: string }> };
}> = ({ element }) => {
  return (
    <div className="scenario-container">
      <h3 className="scenario-name">{element.name}</h3>
      <table className="scenario-table">
        <tbody>
          {element.steps.map((step) => (
            <tr>
              <td className="keyword">{step.keyword}</td>
              <td className="name">{step.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

interface TableProps {
  data: Data[];
  title: string;
}

const Table: React.FC<TableProps> = ({ data, title }) => {
  return (
    <>
      <div className="features">
        <h1>{title}</h1>
        {data.map((feature, index) => (
          <Feature feature={feature} index={index} />
        ))}
      </div>
    </>
  );
};

export default Table;
