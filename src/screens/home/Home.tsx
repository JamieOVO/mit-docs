import React from "react";
import "./Home.css";
import { Link, } from "react-router-dom";
import "../../components/sidebar/Sidebar.css";

const Home: React.FC = () => {
  return (
    <>
      <section className="main">
        <div className="home-sidebar">
          <h3>Documentation:</h3>
          <ul className="home-sidebar__list">
            <li>
              <Link to="/winter-support-tool">Winter Support Tool</Link>
            </li>
            <li>
              <Link to="/smart-meter-troubleshooting-tool">
                Smart Meter Troubleshooting Tool
              </Link>
            </li>
          </ul>
        </div>
        <div className="home-content">
          <h1>MIT Self-Service Documention</h1>
          <div className="home-body">
            <p>
              This resource can be used to understand the behavioural
              functionality of the self-service web apps created by MIT.
            </p>
            <h2>Given, When, Then</h2>
            <p>
              This 'living documentation' is formatted using the Cucumber
              syntax. This syntax is used when writing E2E tests for our
              applications and aims to represetn functionality from a user
              perspective.
            </p>
            <p>Here is an example:</p>
            <table className="home-body__gwt-table">
              <tr>
                <td>Given</td>
                <td>I visit Google</td>
              </tr>
              <tr>
                <td>When</td>
                <td>I search for 'lamas'</td>
              </tr>
              <tr>
                <td>Then</td>
                <td>I see search results relating to lamas</td>
              </tr>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
