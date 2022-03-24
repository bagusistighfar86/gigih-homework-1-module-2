import React from "react";
import Navbar from "../../components/Navbar/index";
import Album from "../../components/Album/index";
import data from "../../data";

const Home = () => {
  return (
    <>
        <Navbar />
        <div className="main">
          <div className="container">
            <Album data = { data }/>
          </div>
        </div>
    </>
  );
};

export default Home;