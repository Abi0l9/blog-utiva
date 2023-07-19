import React from "react";
import BlogCard from "../BlogCard";
import BlogCardWrapper from "../BlogCardWrapper";
import { handleTime } from "../../../utils";
import Category from "../../Category";

const Latest = ({ blogs }) => {
  const topEight = blogs?.slice(-8);

  return (
    <div className="p-3 my-10 mt-5 md:px-8 lg:px-10 min-h-[80%]" id="latest">
      <p className="text-2xl mb-5  text-blue-500">Latest Posts</p>
      <BlogCardWrapper>
        {topEight?.map((blog) => (
          <BlogCard
            key={blog?._id}
            image={blog.featuredImg}
            title={blog?.title}
            date={handleTime(blog?.published)}
            category={blog?.tags.map((tag) => (
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
