import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main";
import Categories from "./components/Categories";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <div className="">
      <Header />
      <Main />
      <Categories />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Layout;
