import React from "react";

const BlogCardWrapper = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row  md:gap-x-6 mb-4 md:gap-y-10 md:flex-wrap md:items-start w-full ">
      {children}
    </div>
  );
};

export default BlogCardWrapper;
