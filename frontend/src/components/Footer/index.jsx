import React from "react";
import { Icon } from "@iconify/react";
import linkedin from "@iconify/icons-logos/linkedin-icon";
import facebook from "@iconify/icons-logos/facebook";
import twitter from "@iconify/icons-logos/twitter";
import github from "@iconify/icons-logos/github-icon";

const Footer = () => {
  return (
    <div className=" p-3 md:px-8 lg:px-10  mt-screen min-h-[100px]">
      <div className="h-[1px] bg-gray-800 w-full my-4"></div>
      <div className="text-white flex flex-col text-center">
        <p className="border-b-2 mb-3 w-[70px] mx-auto text-gray-500 font-bold border-red-500">
          Find Me
        </p>
        <div className="flex flex-row w-1/4 justify-between mx-auto items-center">
          <Icon icon={github} style={{ color: "white" }} width={24} />
          <Icon icon={linkedin} color="white" width={24} />
          <Icon icon={facebook} width={24} />
          <Icon icon={twitter} width={24} />
        </div>
      </div>
      <div className="mb-5 text-center mt-10">
        <p className="text-white text-2xl text-gray-500">Al-Khalifah</p>
        <p className="text-gray-500">Copyright c 2023</p>
      </div>
    </div>
  );
};

export default Footer;
