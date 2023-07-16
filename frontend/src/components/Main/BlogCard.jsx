import React from "react";

const BlogCard = ({ children }) => {
  return (
    <div>
      <div className="w-full flex flex-row md:flex-col md:w-1/5 mb-3 md:mb-5 rounded-[5px]">
        <div className="h-[200px] w-2/4 md:w-full">
          {children[0]}
          {/* <img
            src={`${children[0]}`}
            alt="card"
            className="h-[100%] object-cover rounded-[5px] w-full"
          /> */}
        </div>
        <div className="w-2/4 md:w-full pl-2 md:pl-0 md:py-2">
          {children[1]}
          {/* <p className="text-3xl md:text-xl">{children[1]}</p> */}
          <div className="flex flex-row">
            {[children[2]]}
            {/* <p className="text-xs my-3 text-gray-700 mr-6">{[children[2]]}</p> */}
            {/* <p className="text-xs my-3 text-gray-700">{children[3]}</p> */}
            {children[3]}
          </div>
          {/* <p className="font-semibold text-gray-800">{children[4]}</p> */}
          {children[4]}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
