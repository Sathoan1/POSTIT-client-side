import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/images/Postit 1.svg";
import cancel from "../../assets/images/cancel.svg";
import hamburger from "../../assets/images/hamburger.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [expand, setExpand] = useState(true);

  const navHandler = () => {
    setExpand(!expand);
  };

  return (
    <div className="navBar container">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <div className={expand ? "nav-bar" : "nav-bar nav-bar-NX"}>
        <Link to="/allstories" onClick={navHandler}>
          Stories
        </Link>
        <Link to="/login" className="link">
          <span onClick={navHandler}>Sign In</span>
        </Link>
        <Link to="/signup" className="link">
          <button className="navBtn" onClick={navHandler}>
            Get Started
          </button>
        </Link>
        <img src={cancel} alt="" className="cancel" onClick={navHandler} />
      </div>
      <img src={hamburger} alt="" className="hamburger" onClick={navHandler} />
    </div>
  );
};

export default Navbar;
