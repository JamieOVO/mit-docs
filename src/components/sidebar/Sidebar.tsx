import { Data } from "../table/Table";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar: React.FC<{ data: Data[] }> = ({ data }) => {
  return (
    <div className="sidebar">
      <Link to="/" className="back-button">
        &#8592; Back
      </Link>
      <p>Jump to:</p>
      <ul className="sidebar-list">
        {data.map((feature, index) => (
          <li>
            <a href={`#feature-${index}`}>{feature.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
