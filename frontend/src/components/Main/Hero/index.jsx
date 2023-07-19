import { Link } from "react-router-dom";
import { handleTime } from "../../../utils";
import Category from "../../Category";

const Hero = ({ topBlog }) => {
  return (
    <div className="flex flex-col p-3 md:px-8 lg:px-10 md:flex-row md:items-center w-full">
      <div className="relative -z-10 w-full mb-4 md:mr-5 h-[300px] md:w-7/12 md:h-[400px] bg-gray-300 rounded-[15px]">
        <div className="absolute top-0 left-0 bg-red-500 text-white py-2 px-3 shadow">
          New
        </div>
        <img
          src={`${topBlog?.featuredImg}`}
          alt="hero"
          className="object-cover h-[100%] w-full rounded-[15px] "
        />
      </div>
      <div className="text-left flex flex-col  pb-5 md:justify-start md:w-5/12 md:h-[400px]">
        <p className="text-2xl font-medium text-blue-500 active:text-blue-800 hover:underline">
          <Link to={`blogs/${topBlog?.title}`} state={topBlog}>
            {topBlog?.title}
          </Link>
        </p>
        <div className="">
          <p className="my-5">{topBlog?.description}</p>
          <p className="font-semibold">
            {topBlog?.author}{" "}
            <span className="text-gray-500">
              {topBlog?.edited && "- Edited"}
            </span>
          </p>
          <div className="flex flex-row items-center my-4">
            <p className="my-2 mr-10 text-sm text-gray-400">
              {handleTime(topBlog?.published)}
            </p>
          </div>
          <div className="text-sm text-gray-400 flex flex-row">
            {topBlog?.tags.map((tag) => (
              <Category key={tag} color="blue">
                {tag}
              </Category>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
