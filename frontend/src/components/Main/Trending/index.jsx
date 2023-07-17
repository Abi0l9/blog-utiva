import React from "react";
import Img from "../../../assets/img/test3.jpg";
import TrendCard from "../TrendCard";

const Trending = () => {
  return (
    <div className="p-3 mt-5 md:px-8 min-h-[80%] lg:px-10" id="trending">
      <p className="text-2xl mb-5">Trending</p>
      <div className="flex flex-col mb-10 md:items-start w-full">
        <TrendCard
          Img={Img}
          title={"The title goes here boy and we are still here"}
          author={"Anonymous"}
          date={"date"}
          category={"category"}
        />

        <TrendCard
          Img={Img}
          title={"The title goes here boy and we are still here"}
          author={"Anonymous"}
          date={"date"}
          category={"category"}
        />
      </div>
    </div>
  );
};

export default Trending;
