import React, { useState } from "react";
import logo from "../../assets/images/Postit 1.svg";
import cancel from "../../assets/images/cancel.svg";
import hamburger from "../../assets/images/hamburger.svg";
import profilePics from "../../assets/images/profilepics.svg";
import "../Navbar/Navbar.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar2 = () => {
  const [expand, setExpand] = useState(true);

  const navHandler = () => {
    setExpand(!expand);
  };
  const redirect= useNavigate()
  const logout = () => {
    // removing token
   localStorage.removeItem('token')
  //  redirecting to homepage
  redirect('/');
  navHandler()
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
        <Link to="/create" onClick={navHandler}>
          write Story
        </Link>
      

        <button onClick={logout}>Logout</button>
        {/* <img src={profilePics} alt="" /> */}
        <img src={cancel} alt="" className="cancel" onClick={navHandler} />
      </div>
      <img src={hamburger} alt="" className="hamburger" onClick={navHandler} />
    </div>
  );
};

export default Navbar2;
