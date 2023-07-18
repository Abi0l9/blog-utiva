import React from "react";
import Img from "../../assets/img/test1.jpg";
import Category from "../Category";

const Selected = () => {
  return (
    <div className="p-3  md:px-8 min-h-[600px] lg:px-10">
      <div className="relative  w-full mb-4 md:mr-5 h-[300px]  md:h-[400px] bg-gray-300 rounded-[15px]">
        <img
          src={`${Img}`}
          alt="hero"
          className="object-cover h-[100%] w-full rounded-[15px] "
        />
      </div>
      <div className="text-left flex flex-col  pb-5 md:justify-start">
        <p className="text-2xl font-medium ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </p>
        <div className="">
          <p className="font-semibold text-gray-500 my-2">- Author Name</p>
          <div className="flex flex-row items-center my-4">
            <p className="my-2 mr-10 text-sm text-gray-400">Published Date</p>
            <p className="text-sm text-gray-400">
              <Category color={"blue"}>category</Category>
            </p>
          </div>
        </div>
        <div className="">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo
          exercitationem omnis libero, earum saepe possimus quaerat voluptas
          veritatis blanditiis ratione necessitatibus velit atque temporibus
          corrupti animi. Aperiam in commodi laudantium! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Nostrum possimus, porro dolorem
          illo consectetur minima incidunt veritatis voluptatibus! Placeat iusto
          est odio obcaecati modi natus nulla iure eveniet. Magni, odit. Lorem,
          ipsum dolor sit amet consectetur adipisicing elit. Nemo exercitationem
          omnis libero, earum saepe possimus quaerat voluptas veritatis
          blanditiis ratione necessitatibus velit atque temporibus corrupti
          animi. Aperiam in commodi laudantium! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Nostrum possimus, porro dolorem illo
          consectetur minima incidunt veritatis voluptatibus! Placeat iusto est
          odio obcaecati modi natus nulla iure eveniet. Magni, odit. Lorem,
          ipsum dolor sit amet consectetur adipisicing elit. Nemo exercitationem
          omnis libero, earum saepe possimus quaerat voluptas veritatis
          blanditiis ratione necessitatibus velit atque temporibus corrupti
          animi. Aperiam in commodi laudantium! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Nostrum possimus, porro dolorem illo
          consectetur minima incidunt veritatis voluptatibus! Placeat iusto est
          odio obcaecati modi natus nulla iure eveniet. Magni, odit.
        </div>
      </div>
    </div>
  );
};

export default Selected;
