import React, { useEffect, useState } from "react";
import Category from "../Category";
import { useLocation } from "react-router-dom";
import BlogServices from "../../services/blog";
import { handleTime } from "../../utils";

const Selected = () => {
  const location = useLocation();
  const id = location.state?._id;
  const [blog, setBlog] = useState({});

  useEffect(() => {
    BlogServices.getABlog(id).then((data) => setBlog(data.blog));
  });
  return (
    <div className="p-3  md:px-8 min-h-[600px] lg:px-10">
      <div className="relative  w-full mb-4 md:mr-5 h-[300px]  md:h-[400px] bg-gray-300 rounded-[15px]">
        <img
          src={`${blog?.featuredImg}`}
          alt="hero"
          className="object-cover h-[100%] w-full rounded-[15px] "
        />
      </div>
      <div className="text-left flex flex-col  pb-5 md:justify-start">
        <p className="text-2xl font-medium ">{blog?.title}</p>
        <div className="">
          <p className="font-semibold text-xl text-gray-500 mt-4 mb-2">
            {blog?.author}{" "}
            <span className="text-gray-500">{blog?.edited && "- Edited"}</span>
          </p>
          <div className="flex flex-row items-center my-2">
            <p className="my-2 mr-10 text-sm text-gray-400">
              {handleTime(blog?.published)}
            </p>
          </div>
          <div className="text-sm text-gray-400 flex flex-row">
            {blog?.tags?.map((tag) => (
              <Category key={tag} color="blue">
                {tag}
              </Category>
            ))}
          </div>
        </div>
        <div className="mt-10">
          {blog?.body?.split("\n\n")?.map((b, i) => (
            <div key={i}>
              <p className="my-3">{b}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Selected;
