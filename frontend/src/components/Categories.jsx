import React from "react";
import Category from "./Category";

const Categories = (props) => {
  return (
    <div className="p-3 md:px-8 mb-12 lg:px-10 min-h-[80%]">
      <p className="text-2xl mb-5  text-red-500 border-b-4 border-blue-900 w-[120px]">
        Categories
      </p>
      <div className="flex flex-row space-x-3 w-full">
        <Category color={"blue"}>Sport </Category>
        <Category color={"blue"}>Fashion </Category>
        <Category color={"blue"}>Technology </Category>
        <Category color={"blue"}>Design </Category>
        <Category color={"blue"}>Food </Category>
      </div>
    </div>
  );
};

export default Categories;
