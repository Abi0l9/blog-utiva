import { Icon } from "@iconify/react";
import backupIcon from "@iconify/icons-material-symbols/backup";
import back from "@iconify/icons-material-symbols/arrow-back-ios-new";
import { Link } from "react-router-dom";

const Publish = () => {
  return (
    <div className="p-3  md:px-8 min-h-screen lg:px-10">
      <div className="flex flex-row items-center mb-5 w-full cursor-pointer">
        <Link to="/" className="w-1/3 flex flex-row items-center">
          <Icon icon={back} width={18} className="text-blue-900" />
          <p className="text-blue-900 font-bold">Back</p>
        </Link>
        <div className="text-xl text-blue-500">New Blog Post</div>
      </div>
      <form action="">
        <div className="flex flex-col w-full md:w-3/4">
          <div className="">
            <label htmlFor="title" className="block font-semibold">
              Blog title
            </label>
            <input
              className="w-full p-1 mt-1 mb-2 border-[1px] border-gray-500 focus:border-blue-200 rounded-[5px]"
              id="title"
              name="title"
              placeholder="New title"
            />
          </div>
          <div className="">
            <label htmlFor="content" className="block font-semibold">
              Content
            </label>
            <textarea
              className="w-full p-1 mt-1 mb-2 border-[1px] border-gray-500 focus:border-blue-200 rounded-[5px] resize-none"
              id="content"
              name="content"
              rows="10"
              placeholder="The content of the blog can be written here..."
            ></textarea>
          </div>
          <div className="">
            <label htmlFor="author" className="block font-semibold">
              Author
            </label>
            <input
              className="w-full md:w-2/4 p-1 mt-1 mb-2 border-[1px] border-gray-500 focus:border-blue-200 rounded-[5px]"
              id="author"
              name="author"
              placeholder="e.g James"
            />
          </div>
          <div className="">
            <label htmlFor="tags" className="block font-semibold">
              Tags
            </label>

            <input
              className="w-full md:w-2/4 p-1 mt-1 mb-2 border-[1px] border-gray-500 focus:border-blue-200 rounded-[5px]"
              id="tags"
              name="tags"
              placeholder="sport, music,..."
            />
            <div className="text-xs text-gray-500 -mt-2">
              seperate tags by comma (,)
            </div>
          </div>
          <div className="my-2">
            <div
              className="w-full my-2 md:w-2/4 border-dashed border-2 border-gray-400 h-[200px] bg-gray-200
          rounded-[10px]"
            ></div>
            <label
              htmlFor="featured"
              className="w-[300px] block font-semibold p-2 bg-blue-800 text-white active:bg-blue-500 rounded-[5px] flex flex -row items-center justify-around"
            >
              <Icon icon={backupIcon} width={24} />
              Upload featured image
            </label>
            <input
              className="hidden w-full  md:w-1/2 p-1 mt-1 mb-2 border-[1px] border-gray-500 focus:border-blue-200 rounded-[5px]"
              id="featured"
              name="featured"
              type="file"
            />
          </div>
          <div className="w-3/4 md:w-2/4 border-[2px] border-blue-800 rounded-[5px] my-4 mx-auto text-center active:bg-blue-800 active:text-white">
            <button className="text-base py-1 px-4">Publish</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Publish;
