import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header id="header">
      <div className="left">
        <h1>
          <Link to="https://seodaewon1.github.io/meo-port/index6.html">
            FRONT+END
          </Link>
        </h1>
      </div>
      <ul>
        <li>
          <Link to="/section2">About</Link>
        </li>
        <li>
          <Link to="/section3">Project</Link>
        </li>
        <li>
          <Link to="/section5">Skill</Link>
        </li>
        <li>
          <Link to="/section6">Comment</Link>
        </li>
      </ul>
      <div className="right">
        <div>
          <span className="date"></span>
        </div>
        <div>Weather : sun</div>
      </div>
    </header>
  );
};

export default Header;
