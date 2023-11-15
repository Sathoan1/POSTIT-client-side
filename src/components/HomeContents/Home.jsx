import React from "react";
import "./Home.css";
import lifestyle from "../../assets/images/lifestyle.svg";
import nature from "../../assets/images/nature.svg";
import tech from "../../assets/images/technology.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="">
      <div className="stayCurious">
        <div className="container w-100">
          <div className=" col-12 col-md-5">
            <h1 className="display-1 fw-bolder mb-2">Stay Curious.</h1>
            <p className="mt-3 mb-4 fs-5">
              Lorem ipsum dolor sit ameetur adipiscing elit. Coctetur egestas
              massa velit aliquam. Molestim bibendum hnt ipsum orci, platea
              aliquam id ut.{" "}
            </p>
            <Link to="/signup" className="link">
              {" "}
              <button className="btnHome">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="containBox container">
        <div className="gridBox">
          <div className="grid">
            <img src={lifestyle} alt="" />
            <div className="box">
              <h2 className="tag-lifestyle">Lifestyle</h2>
              <p>The 20 Biggest Fashion Companies In Nigeria 2022</p>
            </div>
          </div>
          <div className="grid">
            <img src={nature} alt="" />
            <div className="box">
              <h2 className="tag-nature">Nature</h2>
              <p>The 20 Biggest Agro Companies In Nigeria 2022</p>
            </div>
          </div>
          <div className="grid">
            <img src={tech} alt="" />
            <div className="box">
              <h2 className="tag-tech">Technology</h2>
              <p>The 20 Biggest Fintech Companies In Nigeria 2022</p>
            </div>
          </div>
        </div>

        <div className="tryPost">
          <h1>
            Try Post<span className="span">it</span>.
          </h1>
          <p>
            Do you want to write or discover stories from writers on any topic?
          </p>
          <div className="post">
            <input type="text" placeholder="Enter Email address" />
            <Link to="/signup" className="link">
              <button className="btn_create">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
