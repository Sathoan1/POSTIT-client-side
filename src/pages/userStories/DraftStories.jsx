import React from "react";
import stories from "../../mockData/story";
import { Link } from "react-router-dom";

const DraftStories = () => {
  return (
    <div>
      {stories.map((post) => {
        const { _id, title, description } = post;
        return (
          <div className="mainStory" key={_id}>
            <div className="main">
              <h1>{title}</h1>
              <h6>{description.substring(0, 100)}...</h6>
              <p className="p2">Drafts</p>
            </div>
            <div className="storyBtn">
              <button className="storyEdit">Publish Post</button>
              <button className="storyDelete">Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DraftStories;
