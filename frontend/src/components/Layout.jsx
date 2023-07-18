import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Main from "./Main";
import Publish from "./Publish";
import AllBlogs from "./Blog/AllBlogs";
import Selected from "./Blog/Selected";
import Categories from "./Categories";
import Subscribe from "./Subscribe";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route element={<Main />} path="/" />
        <Route element={<Main />} path="/home" />
        <Route element={<Publish />} path="/publish" />
        <Route element={<AllBlogs />} path="/blogs" />
        <Route element={<Selected />} path="/blogs/selected" />
      </Routes>
      <Categories />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Layout;
