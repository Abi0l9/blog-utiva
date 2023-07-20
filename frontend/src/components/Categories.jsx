import React, { useEffect, useState } from "react";
import Category from "./Category";
import BlogServices from "../services/blog";

const Categories = () => {
  const [blogs, setBlogs] = useState([]);
  const tags = [...new Set(blogs?.map((blog) => blog.tags).flat(1))];

  useEffect(() => {
    BlogServices.getBlogs()
      .then((data) => setBlogs(data.blogs.reverse()))
      .catch((e) => console.log(e.message));

    //eslint-disable-next-line
  }, []);
  return (
    <div className="p-3 md:px-8 mb-12 lg:px-10 min-h-[80%]">
      <p className="text-2xl mb-5  text-red-500 border-b-4 border-blue-900 w-[120px]">
        Categories
      </p>
      <div className="flex flex-row flex-wrap justify-start items-start w-full">
        {tags.map((tag) => (
          <Category key={tag} color={"blue"} blogs={blogs}>
            {tag}
          </Category>
        ))}
      </div>
    </div>
  );
};

export default Categories;
