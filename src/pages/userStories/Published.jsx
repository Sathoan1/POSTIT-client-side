import React from "react";
import stories from "../../mockData/story";
import { Link } from "react-router-dom";

const Published = () => {
  return (
    <div>
      {stories.map((post) => {
        const { _id, title, description } = post;
        return (
          <div className="mainStory" key={_id}>
            <div className="main">
              <h1>{title}</h1>
              <h6>{description.substring(0, 100)}...</h6>
              <p className="p2">Published</p>
            </div>
            <div className="storyBtn">
              <Link to={`/edit/${_id}`}>
                <button className="storyEdit">Edit Post</button>
              </Link>
              <button className="storyDelete">Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Published;
