import React, { useEffect, useState } from "react";
import BlogCard from "../Main/BlogCard";
import Category from "../Category";
import BlogServices from "../../services/blog";
import { Link } from "react-router-dom";
import { handleTime } from "../../utils";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    BlogServices.getBlogs()
      .then((data) => setBlogs(data.blogs.reverse()))
      .catch((e) => console.log(e.message));

    //eslint-disable-next-line
  }, []);
  return (
    <div className="p-3 mb-12 md:px-8 min-h-[600px] lg:px-10">
      <p className="text-3xl text-center text-blue-800 font-semibold mb-5">
        All Blog Posts
      </p>
      <div className="flex flex-col md:flex-row md:justify-start md:gap-x-5 md:gap-y-10 md:items-center md:flex-wrap w-full">
        {blogs.map((blog) => (
          <BlogCard
            key={blog?._id}
            image={blog?.featuredImg}
            author={blog?.author}
            title={
              <Link
                to={`/blogs/${blog?.title}`}
                className="text-blue-500"
                state={blog}
              >
                {blog?.title}
              </Link>
            }
            date={handleTime(blog?.published)}
            category={blog?.tags?.map((tag) => (
              <Category key={tag} color="blue">
                {tag}
              </Category>
            ))}
          />
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
