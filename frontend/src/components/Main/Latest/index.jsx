import React from "react";
import CardImg from "../../../assets/img/test2.jpg";
import CardImg1 from "../../../assets/img/test3.jpg";
import BlogCard from "../BlogCard";
import BlogCardWrapper from "../BlogCardWrapper";

const Latest = () => {
  return (
    <div className="p-3 my-10 mt-5 md:px-8 lg:px-10 min-h-[80%]" id="latest">
      <p className="text-2xl mb-5  text-blue-500">Latest Posts</p>
      <BlogCardWrapper>
        <BlogCard
          image={CardImg}
          title={"The first stage of communication is here"}
          date="January, 2023."
          category="Talk"
          author="Al-Khalifah"
        />

        <BlogCard
          image={CardImg1}
          title={"The first seeing one another"}
          date="October, 2023."
          category="Sport"
          author="Anonymous"
        />

        <BlogCard
          image={CardImg1}
          title={"The first stage of  is seeing one another"}
          date="October, 2023."
          category="Sport"
          author="Anonymous"
        />

        <BlogCard
          image={CardImg1}
          title={"The first stage of communication is seeing one another"}
          date="October, 2023."
          category="Sport"
          author="Anonymous"
        />
      </BlogCardWrapper>
    </div>
  );
};

export default Latest;
