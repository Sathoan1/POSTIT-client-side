import React from "react";
import Layout from "../components/Layout";
import HomeContent from "../components/HomeContents/Home";

const Home = () => {
  return (
    <div>
      <Layout show={true}>
        <HomeContent />
      </Layout>
    </div>
  );
};

export default Home;
