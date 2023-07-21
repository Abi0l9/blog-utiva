import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import Latest from "./Latest";
import Trending from "./Trending";

import BlogServices from "../../services/blog";

const Main = () => {
  const [blogs, setBlogs] = useState([]);
  const topBlog = blogs?.at(0);

  useEffect(() => {
    BlogServices.getBlogs()
      .then((data) => setBlogs(data.blogs.reverse()))
      .catch((e) => console.log(e.message));

    //eslint-disable-next-line
  }, []);
  return (
    <div>
      <Hero topBlog={topBlog} blogs={blogs} />
      <Latest blogs={blogs} />
      <Trending blogs={blogs} />
    </div>
  );
};

export default Main;
