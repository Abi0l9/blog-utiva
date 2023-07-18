import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import Latest from "./Latest";
import Trending from "./Trending";
import Hot from "./Hot";
import Related from "../Related";

import BlogServices from "../../services/blog";

const Main = () => {
  const [blogs, setBlogs] = useState([]);
  const topBlog = blogs?.at(-1);

  useEffect(() => {
    BlogServices.getBlogs()
      .then((data) => setBlogs(data.blogs))
      .catch((e) => console.log(e.message));

    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    console.log(blogs);
  }, [blogs]);
  return (
    <div>
      <Hero topBlog={topBlog} />
      <Latest />
      <Trending />
      <Hot />
      <Related />
    </div>
  );
};

export default Main;
