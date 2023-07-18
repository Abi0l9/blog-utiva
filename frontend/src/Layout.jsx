import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main";
import Publish from "./components/Publish";
import AllBlogs from "./components/Blog/AllBlogs";
import Selected from "./components/Blog/Selected";
import Categories from "./components/Categories";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";

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
