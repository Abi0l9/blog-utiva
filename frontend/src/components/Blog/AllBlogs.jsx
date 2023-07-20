import React from "react";
import BlogCard from "../Main/BlogCard";
import Img from "../../assets/img/test1.jpg";
import Category from "../Category";

const AllBlogs = ({ blogs }) => {
  return (
    <div className="p-3 mb-12 md:px-8 min-h-[600px] lg:px-10">
      <p className="text-3xl text-center text-blue-800 font-semibold mb-5">
        All Blog Posts
      </p>
      <div className="flex flex-col md:flex-row md:justify-center md:gap-x-5 md:gap-y-10 md:items-center md:flex-wrap w-full">
        <BlogCard
          image={Img}
          author="Kashy"
          category={<Category color="blue">Sport</Category>}
          date="date"
          title="The Island of the king is on fire"
        />
        <BlogCard
          image={Img}
          author="Kashy"
          category={<Category color="blue">Sport</Category>}
          date="date"
          title="The Island of the king is on fire"
        />
        <BlogCard
          image={Img}
          author="Kashy"
          category={<Category color="blue">Sport</Category>}
          date="date"
          title="The Island of the king is on fire"
        />
        <BlogCard
          image={Img}
          author="Kashy"
          category={<Category color="blue">Sport</Category>}
          date="date"
          title="The Island of the king is on fire"
        />
        <BlogCard
          image={Img}
          author="Kashy"
          category={<Category color="blue">Sport</Category>}
          date="date"
          title="The Island of the king is on fire"
        />
        <BlogCard
          image={Img}
          author="Kashy"
          category={<Category color="blue">Sport</Category>}
          date="date"
          title="The Island of the king is on fire"
        />
        <BlogCard
          image={Img}
          author="Kashy"
          category={<Category color="blue">Sport</Category>}
          date="date"
          title="The Island of the king is on fire"
        />
        <BlogCard
          image={Img}
          author="Kashy"
          category={<Category color="blue">Sport</Category>}
          date="date"
          title="The Island of the king is on fire"
        />
      </div>
    </div>
  );
};

export default AllBlogs;
