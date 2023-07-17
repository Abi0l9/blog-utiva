import React from "react";
import { Icon } from "@iconify/react";
import menu from "@iconify/icons-material-symbols/menu";

const Header = () => {
  return (
    <div className="flex flex-row mb-6 p-3 md:px-8 lg:px-10 items-center shadow-md w-full">
      <div className=" w-full md:w-2/5 lg:2/4">
        <p className="font-bold text-blue-500 text-[2rem] cursor-pointer">
          Al-Khalifah
        </p>
      </div>
      <div className="flex flex-row flex-grow  items-center justify-between">
        <ol className="hidden md:flex md:flex-row md:flex-grow md:justify-between lg:justify-around">
          <li className="p-1 cursor-pointer ">
            <a href="#latest" className="active:rounded-[5px]">
              Latest
            </a>
          </li>
          <li className="p-1 cursor-pointer">
            <a href="#trending" className="active:rounded-[5px]">
              Trending
            </a>
          </li>
          <li className="p-1 cursor-pointer">
            <a href="#hot" className="active:rounded-[5px]">
              Hot
            </a>
          </li>
          <li className="border border-blue-500 py-1  px-3 cursor-pointer rounded-[8px] active:bg-blue-500 active:text-white  hover:bg-blue-300 hover:text-white">
            Publish
          </li>
        </ol>
        <div className="hidden md:block ml-[30px] text-right">
          <button className="p-[4px] px-3 bg-blue-500 text-white rounded-[8px] font-bold active:bg-blue-900">
            <a href="#subscribe" className="active:rounded-[5px]">
              subscribe
            </a>
          </button>
        </div>
        <div className="md:hidden float-right cursor-pointer ">
          <Icon icon={menu} width={32} color="blue" />
        </div>
      </div>
    </div>
  );
};

export default Header;
