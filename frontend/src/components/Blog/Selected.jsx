import React, { useEffect, useState } from "react";
import Category from "../Category";
import { Link, useLocation, useNavigate } from "react-router-dom";
import BlogServices from "../../services/blog";
import { handleTime } from "../../utils";

import { Icon } from "@iconify/react";
import edit from "@iconify/icons-material-symbols/edit-document";
import del from "@iconify/icons-material-symbols/delete-forever";
import Related from "../Related";

const Selected = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const id = location.state?._id;
  const [blog, setBlog] = useState({});

  const deleteBlog = async () => {
    try {
      await BlogServices.deleteBlog(id);
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    BlogServices.getBlogs()
      .then((data) => {
        const blog = data.blogs.find((b) => b._id === id);
        setBlog(blog);
      })
      .catch((e) => console.log(e.message));
  });
  return (
    <div className="p-3  md:px-8 min-h-[600px] lg:px-10">
      <div className="relative -z-40 w-full mb-4 md:mr-5 h-[300px]  md:h-[400px] bg-gray-300 rounded-[15px]">
        <img
          src={`${blog?.featuredImg}`}
          alt="hero"
          className="object-cover h-[100%] -z-10 w-full rounded-[15px] "
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
      <div className="flex flex-row  justify-between w-[250px]">
        <Link to={`/blogs/${blog?._id}/edit`} state={blog}>
          <div className="flex flex-row items-center justify-between border-[1px] border-green-500 py-1 px-2 rounded-[5px] hover:bg-green-500 active:bg-green-900 hover:text-white cursor-pointer">
            <Icon icon={edit} color="green" className="mr-2" />
            <p className="font-bold ">Edit Blog</p>
          </div>
        </Link>
        <div
          onClick={deleteBlog}
          className="flex flex-row items-center justify-between border-[1px] border-red-500 py-1 px-2 rounded-[5px] hover:bg-red-500 active:bg-red-900 hover:text-white cursor-pointer"
        >
          <Icon icon={del} color="red" className="mr-2" />
          <p className="font-bold ">Delete Blog</p>
        </div>
      </div>
      <div className="mt-5">
        <Related tag={blog?.tags?.at(0)} />
      </div>
    </div>
  );
};

export default Selected;
