import React from "react";
import TrendCard from "../TrendCard";
import { Link } from "react-router-dom";
import { handleTime } from "../../../utils";
import Category from "../../Category";

const Trending = ({ blogs }) => {
  const topTwo = blogs?.slice(0, 2);
  return (
    <div className="p-3 mt-5 md:px-8 min-h-[80%] lg:px-10" id="trending">
      <p className="text-2xl mb-5  text-blue-500">Trending</p>
      <div className="flex flex-col mb-10 md:items-start w-full">
        {topTwo?.map((blog) => (
          <TrendCard
            key={blog?._id}
            Img={blog?.featuredImg}
            title={
              <Link
                to={`/blogs/${blog?.title}`}
                className="text-blue-500"
                state={blog}
              >
                {blog?.title}
              </Link>
            }
            author={blog?.author}
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

export default Trending;
