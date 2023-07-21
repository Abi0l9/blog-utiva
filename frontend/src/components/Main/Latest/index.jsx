import React from "react";
import BlogCard from "../BlogCard";
import BlogCardWrapper from "../BlogCardWrapper";
import { handleTime } from "../../../utils";
import Category from "../../Category";
import { Link } from "react-router-dom";

const Latest = ({ blogs }) => {
  const topEight = blogs?.slice(0, 9);

  return (
    <div className="p-3 my-10 mt-5 md:px-8 lg:px-10 min-h-[80%]" id="latest">
      <p className="text-2xl mb-5  text-blue-500">Latest Posts</p>
      <BlogCardWrapper>
        {topEight?.map((blog) => (
          <BlogCard
            key={blog?._id}
            image={blog?.featuredImg}
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
            category={blog?.tags?.slice(0,2)?.map((tag) => (
              <Category key={tag} color="blue">
                {tag}
              </Category>
            ))}
            author={blog?.author}
          />
        ))}
      </BlogCardWrapper>
    </div>
  );
};

export default Latest;
