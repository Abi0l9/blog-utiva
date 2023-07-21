import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import menu from "@iconify/icons-material-symbols/menu";
import close from "@iconify/icons-material-symbols/close-rounded";
import { Links } from "../Footer";

const MenuItems = ({ styles, handleClick }) => {
  return (
    <div className={`z-40 flex flex-${styles}  justify-between`}>
      <ol className="flex flex-col items-center">
        <li onClick={handleClick} className="p-1 cursor-pointer ">
          <a
            href="/home#latest"
            className="active:rounded-[5px] hover:border-b-2 border-blue-500"
          >
            Latest
          </a>
        </li>
        <li onClick={handleClick} className="p-1 cursor-pointer">
          <a
            href="/home#trending"
            className="active:rounded-[5px] hover:border-b-2 border-blue-500"
          >
            Trending
          </a>
        </li>

        <li onClick={handleClick} className="p-1 cursor-pointer ">
          <a
            href="/blogs"
            className="active:rounded-[5px] hover:border-b-2 border-blue-500"
          >
            All Blog Posts
          </a>
        </li>
        <li
          onClick={handleClick}
          className="border border-blue-500 py-1 mt-2 px-3 cursor-pointer rounded-[8px] active:bg-blue-500 active:text-white  hover:bg-blue-300 hover:text-white"
        >
          <Link to="/publish">Publish</Link>
        </li>
      </ol>

      <div className="w-[200px] mt-10">
        <Links length={2} />
      </div>
    </div>
  );
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => setMenuOpen(!menuOpen);
  // const closeMenu = () => setMenuOpen(false);

  return (
    <div className="flex flex-row mb-6 p-3 md:px-8 lg:px-10 items-center shadow-md w-full">
      <div className=" w-full md:w-2/5 lg:2/4">
        <p className="font-bold text-blue-500 text-[2rem] cursor-pointer">
          <Link to="/">Al-Khalifah</Link>
        </p>
      </div>
      <div className="z-10 flex flex-row flex-grow  items-center justify-between">
        <ol className="hidden md:flex md:flex-row md:flex-grow md:justify-between lg:justify-around">
          <li className="p-1 cursor-pointer ">
            <a href="/home#latest" className="active:rounded-[5px]">
              Latest
            </a>
          </li>
          <li className="p-1 cursor-pointer">
            <a href="/home#trending" className="active:rounded-[5px]">
              Trending
            </a>
          </li>

          <li className="border border-blue-500 py-1  px-3 cursor-pointer rounded-[8px] active:bg-blue-500 active:text-white  hover:bg-blue-300 hover:text-white">
            <Link to="/publish">Publish</Link>
          </li>
        </ol>
        <div className="hidden md:block ml-[80px]  lg:ml-[120px] xlg:ml-[200px] text-right">
          <button className="p-[4px] px-3 bg-blue-500 text-white rounded-[8px] font-bold active:bg-blue-900">
            <a href="/home#subscribe" className="active:rounded-[5px]">
              subscribe
            </a>
          </button>
        </div>
        <div className={`md:hidden float-right cursor-pointer`}>
          <Icon
            onClick={handleMenuClick}
            icon={menuOpen ? close : menu}
            width={32}
            color="blue"
          />
        </div>
      </div>
      {menuOpen && (
        <aside className="absolute top-0 pt-[30px] min-h-[2000px] w-full opacity-90 flex flex-col items-center right-0 bg-white text-black">
          <MenuItems styles="col" handleClick={handleMenuClick} />
        </aside>
      )}
    </div>
  );
};

export default Header;
