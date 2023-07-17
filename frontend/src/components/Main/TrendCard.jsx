import React from "react";

const TrendCard = ({ Img, title, author, date, category }) => {
  return (
    <div className="w-full">
      <div className="bg-gray-200 rounded-[10px] w-full h-[300px] md:h-[500px]">
        <img
          src={`${Img}`}
          alt="trending"
          className="w-full h-[100%] object-cover rounded-[10px]"
        />
      </div>
      <div className="w-full md:h-[170px] md:flex md:flex-col md:justify-between mb-10">
        <div className="md:h-[120px]">
          <p className="text-2xl md:text-3xl flex-grow">{title}</p>
        </div>
        <div className="">
          <p className="text-base md:font-semibold text-gray-800 my-3">
            {author}
          </p>
          <div className="flex flex-row">
            <p className="text-xs my-3 text-gray-700 mr-6">{date}</p>
            <p className="text-xs my-3 text-gray-700">{category}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendCard;
