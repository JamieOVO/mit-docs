import { Data } from '../table/Table';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Sidebar: React.FC<{ data: Data[], path: string }> = ({ data, path }) => {
  return (
    <div className="sidebar">
      <Link to="/" className="back-button">
        &#8592; Back
      </Link>
      <p>Jump to:</p>
      <ul className="sidebar-list">
        {data.map((feature, index) => (
          <li>
            <HashLink to={`${path}/#feature-${index}`}>{feature.name}</HashLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
