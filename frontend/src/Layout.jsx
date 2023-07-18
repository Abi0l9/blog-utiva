import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main";
import Publish from "./components/Publish";
import Categories from "./components/Categories";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";
import Selected from "./components/Blog/Selected";

const Layout = () => {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route element={<Main />} path="/" />
        <Route element={<Main />} path="/home" />
        <Route element={<Publish />} path="/publish" />
        <Route element={<Selected />} path="/blogs/selected" />
      </Routes>
      <Categories />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Layout;
