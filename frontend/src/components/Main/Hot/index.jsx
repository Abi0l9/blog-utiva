import React from "react";
import TrendCard from "../TrendCard";
import Img from "../../../assets/img/test2.jpg";

const Hot = () => {
  return (
    <div className="p-3 md:px-8 lg:px-10 min-h-[80%]" id="hot">
      <p className="text-2xl mb-5">Hot</p>
      <TrendCard
        Img={Img}
        title="Hottest News in town is here in a new dimension"
        author="Kashy"
        date={new Date().toDateString()}
        category="Fashion"
      />
    </div>
  );
};

export default Hot;
