import React from "react";
import CardImg from "../../../assets/img/test2.jpg";

const Latest = () => {
  return (
    <div className="p-3 my-10 mt-5 md:px-8 lg:px-10" id="latest">
      <p className="text-xl mb-5">Latest Posts</p>
      {/*Wrapper*/}
      <div className="flex flex-col md:flex-row  md:space-x-6 md:flex-wrap md:items-start w-full ">
        {/* Card */}
        <div className="w-full flex flex-row md:flex-col md:w-[22%] mb-3 md:mb-5 rounded-[5px]">
          <div className="h-[200px] w-2/4 md:w-full">
            <img
              src={`${CardImg}`}
              alt="card"
              className="h-[100%] object-cover rounded-[5px] w-full"
            />
          </div>
          <div className="w-2/4 md:w-full pl-2 md:pl-0 md:py-2">
            <p className="text-3xl md:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit
            </p>
            <div className="flex flex-row">
              <p className="text-xs my-3 text-gray-700 mr-6">Date</p>
              <p className="text-xs my-3 text-gray-700">Category</p>
            </div>
            <p className="font-semibold text-gray-800">Author</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latest;
