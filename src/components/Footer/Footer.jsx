import React from "react";
import "./Footer.css"
import ins from "./img/insta.svg"
import twitter from "./img/twitter.svg"
import facebook from "./img/facebook.svg"

const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer">
        <div className="span-2">
          <h6 className="footH">About Post<span className="span">it</span>.</h6>
          <p className="footP">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
            id sem vel quis in turpis sit eget pellentesque. Nunc etiicies in.
          </p>
        </div>
        <div>
          <h6 className="footH">Quick Menu</h6>
          <ul className="footUL1">
            <li>Home</li>
            <li>Stories</li>
            <li>Trending Stories</li>
            <li>Popular Stories</li>
          </ul>
        </div>
        <div>
          <ul className="footUL2">
            <li>Sign Up</li>
            <li>Log In</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="span2">
          <h6 className="footH">Subscribe to our newsletter</h6>
          <div className="footInput">
            <input type="text" placeholder="Email address" />
            <button>subscribe</button>
          </div>
        </div>
      </div>
        <hr className="footLine"/>
        <div className="lastFooter">
            <p>Terms and Policy</p>
            <img src={twitter} alt="" />
            <img src={facebook} alt="" />
            <img src={ins} alt="" />
        </div>
    </div>
  );
};

export default Footer;
