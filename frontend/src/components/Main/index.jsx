import React from "react";
import Hero from "./Hero";
import Latest from "./Latest";
import Trending from "./Trending";
import Hot from "./Hot";
import Related from "../Related";

const Main = () => {
  return (
    <div>
      <Hero />
      <Latest />
      <Trending />
      <Hot />
      <Related />
    </div>
  );
};

export default Main;
