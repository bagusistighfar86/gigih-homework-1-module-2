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
          {data.map((item) =>(
            <Album key={item.id} data={item}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;