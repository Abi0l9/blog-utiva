import React, { useEffect, useState } from "react";
import BlogCardWrapper from "../Main/BlogCardWrapper";
import BlogCard from "../Main/BlogCard";
import BlogServices from "../../services/blog";
import { Link } from "react-router-dom";
import { handleTime } from "../../utils";
import Category from "../Category";

const Related = ({ tag }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    if (tag) {
      BlogServices.getBlogsByTag(tag)
        .then((data) => setBlogs(data.blogs))
        .catch((e) => {
          console.log(e.message);
        });
    }
  }, [tag, blogs]);

  return (
    <div className="p-3 md:px-8 lg:px-10 min-h-[80%]">
      <p className="text-2xl mb-5  text-blue-500">Related Posts</p>
      <BlogCardWrapper>
        {blogs?.map((blog) => (
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
            category={blog?.tags?.map((tag) => (
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

export default Related;
