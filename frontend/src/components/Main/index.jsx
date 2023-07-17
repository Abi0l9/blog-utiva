import React from "react";
import Hero from "./Hero";
import Latest from "./Latest";
import Trending from "./Trending";
import Hot from "./Hot";

const Main = () => {
  return (
    <div>
      <Hero />
      <Latest />
      <Trending />
      <Hot />
    </div>
  );
};

export default Main;
