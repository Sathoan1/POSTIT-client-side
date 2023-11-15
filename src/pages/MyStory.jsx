import React, { useState, useEffect } from "react";
import stories from "../mockData/story";
import Layout from "../components/Layout";
import "../../styles/Story.css";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

const MyStory = () => {
  const [currentSection, setCurrentSection] = useState("");
  const paths = {
    all: "/mystories",
    published: "/mystories/published",
    drafts: "/mystories/drafts",
  };
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === paths.all) {
      setCurrentSection(paths.all);
    } else if (location.pathname === paths.published) {
      setCurrentSection(paths.published);
    } else if (location.pathname === paths.drafts) {
      setCurrentSection(paths.drafts);
    }
  }, [location.pathname, paths.all, paths.published, paths.drafts]);

  return (
    <div>
      <Layout>
        <div className="container">
          <div className="myStories">
            <h1>My Stories</h1>
            <Link to="/create">
              <button className="btnWrite">Write Story</button>
            </Link>
          </div>
          <div className="storyNav">
            <Link
              to="/mystories"
              className={`${
                currentSection === paths.all ? "fw-bold text-black" : ""
              }`}
            >
              All
            </Link>
           
          </div>
          <hr className="mt-1" />
        </div>
        <div className="container">
          <Outlet />
        </div>
      </Layout>
    </div>
  );
};

export default MyStory;
