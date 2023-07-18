import React from "react";
import { Icon } from "@iconify/react";
import linkedin from "@iconify/icons-logos/linkedin-icon";
import twitter from "@iconify/icons-logos/twitter";
import github from "@iconify/icons-logos/github-icon";

export const Links = ({ length }) => {
  return (
    <div className="">
      <div className="text-white flex flex-col text-center">
        <p className="border-b-2 mb-3 w-[70px] mx-auto text-gray-500 font-bold border-red-500">
          Find Me
        </p>
        <div
          className={`flex flex-row w-${length}/4 justify-between mx-auto items-center`}
        >
          <a href="https://github.com/Abi0l9">
            <Icon icon={github} style={{ color: "white" }} width={24} />
          </a>
          <a href="https://www.linkedin.com/in/monsur-oyedeji">
            <Icon icon={linkedin} color="white" width={24} />
          </a>

          <a href="https://twitter.com/oyewaleM">
            <Icon icon={twitter} width={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className=" p-3 md:px-8 lg:px-10  mt-screen min-h-[100px]">
      <div className="h-[1px] bg-gray-800 w-full my-4"></div>
      <Links length={1} />
      <div className="mb-5 text-center mt-10">
        <p className="text-2xl text-gray-500">Al-Khalifah</p>
        <p className="text-gray-500">Copyright c 2023</p>
      </div>
    </div>
  );
};

export default Footer;
