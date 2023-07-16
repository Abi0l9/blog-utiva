import React from "react";
import { Icon } from "@iconify/react";
import menu from "@iconify/icons-material-symbols/menu";

const Header = () => {
  return (
    <div className="flex flex-row mb-6 p-3 md:px-8 lg:px-10 justify-between items-center shadow-md w-full">
      <div className=" md:w-2/4">
        <p className="font-bold text-blue-500 text-[2rem] cursor-pointer">
          Al-Khalifah
        </p>
      </div>
      <div className="md:w-2/4 flex flex-row  items-center justify-between">
        <ol className="hidden md:flex flex-row justify-around w-2/4">
          <li class="p-1 cursor-pointer">Latest</li>
          <li class="p-1 cursor-pointer">Hot</li>
          <li class="p-1 cursor-pointer">Most Read</li>
          <li class="border border-blue-500 py-1  px-3 cursor-pointer rounded-[8px] active:bg-blue-500 active:text-white  hover:bg-blue-300 hover:text-white">
            Publish
          </li>
        </ol>
        <div className="hidden md:block text-right">
          <button className="p-[4px] px-3 bg-blue-500 text-white rounded-[8px] font-bold active:bg-blue-900">
            subscribe
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
