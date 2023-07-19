import React from "react";

const BlogCard = ({ image, title, date, category, author }) => {
  return (
    <div className="w-full flex flex-row md:flex-col md:w-[22%] mb-3 md:mb-5 rounded-[5px]">
      <div className="h-[200px] w-2/4 md:w-full bg-gray-200 rounded-[10px]">
        <img
          src={`${image}`}
          alt="card"
          className="h-[100%] object-cover rounded-[5px] w-full"
        />
      </div>
      <div className="w-2/4 md:w-full md:h-[170px] md:flex md:flex-col md:justify-between pl-2 md:pl-0 md:py-2">
        <div className="md:h-[120px]">
          <p className="text-2xl md:text-xl flex-grow">{title}</p>
        </div>
        <div className="md:h-[50px]">
          <p className="text-base md:font-semibold text-gray-800 my-3">
            {author}
          </p>
          <div className="flex flex-row items-center">
            <div className="text-xs my-3 text-gray-700 mr-6">{date}</div>
          </div>
          <div className="text-xs my-3 text-gray-700 flex flex-row">
            {category}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
