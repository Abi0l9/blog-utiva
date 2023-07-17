import React from "react";
import BlogCardWrapper from "../Main/BlogCardWrapper";
import BlogCard from "../Main/BlogCard";
import Img from "../../assets/img/test2.jpg";

const Related = () => {
  return (
    <div className="p-3 md:px-8 lg:px-10 min-h-[80%]">
      <p className="text-2xl mb-5  text-blue-500">Related Posts</p>
      <BlogCardWrapper>
        <BlogCard
          image={Img}
          title={"The first related post is this, here."}
          author={"Kash"}
          date={new Date().toDateString()}
          category={"Sport"}
        />
      </BlogCardWrapper>
    </div>
  );
};

export default Related;
