import React from "react";
import { RotatingLines } from "react-loader-spinner";

const Loading = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center "
      style={{ height: `calc(100vh - 165px)` }}
    >
      <RotatingLines
        strokeColor="#0585CD"
        strokeWidth="5"
        animationDuration="0.75"
        width="200"
        visible={true}
      />
    </div>
  );
};

export default Loading;