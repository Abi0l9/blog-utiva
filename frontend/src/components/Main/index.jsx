import React from "react";
import Hero from "./Hero";
import Latest from "./Latest";
import Trending from "./Trending";
import Hot from "./Hot";
import Related from "../Related";
import Header from "../Header/Header";

const Main = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Latest />
      <Trending />
      <Hot />
      <Related />
    </div>
  );
};

export default Main;
