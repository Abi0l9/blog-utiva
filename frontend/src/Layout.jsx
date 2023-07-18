import React from "react";
import { Routes, Route } from "react-router-dom";
// import Header from "./components/Header/Header";
import Main from "./components/Main";
import Publish from "./components/Publish";
import Categories from "./components/Categories";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <div className="">
      <Routes>
        <Route element={<Main />} path="/" />
        <Route element={<Publish />} path="/publish" />
      </Routes>
      <Categories />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Layout;
