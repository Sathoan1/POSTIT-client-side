import React from "react";
import { Link } from "react-router-dom";

const Empty = () => {
  return (
    <div className="container d-flex align-items-center justify-content-center my-3">
      <div>
        <p className="fw-light text-secondary h4 my-2 text-center">
          You have no story posted yet, would you like to change that? 😃
        </p>
        <div className="d-flex align-items-center justify-content-center">
          <Link to="/create" className="text-center mx-auto">
            <button className="btnWrite">Write Story</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Empty;
