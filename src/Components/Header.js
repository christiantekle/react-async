import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <di>
      <header>
        <h1>Simple react app</h1>
        <Link to="/">Home</Link> | <Link to="/About">About</Link>
      </header>
    </di>
  );
};


export default Header;
