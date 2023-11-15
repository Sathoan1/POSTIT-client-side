import React from "react";
import { Link } from "react-router-dom";

const Story = ({
  _id,
  title,
  description,
  tags,
  image,
  createdAt,
  writtenBy,
}) => {
  const tagClassName = (tags) => {
    if (tags === "nature") {
      return "tag-nature";
    } else if (tags === "technology") {
      return "tag-tech";
    } else if (tags === "sport") {
      return "tag-sport";
    }else if (tags === 'others'){
      return 'tag-others'
   }else {
      return "tag-lifestyle";
    }
  };

  return (
    <div
      style={{ flexBasis: "370px", flexGrow: 1 }}
      className="my-4 mx-auto mx-lg-3"
    >
      <div className="border-0">
        <div className="position-relative">
          <img
            src={image}
            className="card-img-top rounded-2"
            alt="image"
            style={{ height: "296px", width: "100%", objectFit: "cover" }}
          />
          <h6
            className={` ${tagClassName(
              tags
            )} position-absolute bottom-0 ms-2 text-capitalize p-2 rounded text-white`}
          >
            {" "}
            {tags}{" "}
          </h6>
        </div>
        <div className="">
          <h5 className=" my-1 fw-bold text-capitalize">{title}</h5>
          <div className="d-flex my-2">
            <p>
              <span className="text-muted">By </span>
              {writtenBy.username}
              <span className="text-muted">- {new Date(createdAt).toDateString()}</span>
            </p>
          </div>

          <p className=" my-2 text-muted">{description.substring(0,50)}...</p>
          <Link
            to={`/story/${_id}`}
            className="text-decoration-none fw-bold text-pri"
          >
            Read More...
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Story;
