import HeroIMG from "../../../assets/img/test4.jpg";

const Hero = () => {
  return (
    <div className="flex flex-col p-3 md:px-8 lg:px-10 md:flex-row md:items-center w-full">
      <div className="relative w-full mb-4 md:mr-5 h-[300px] md:w-7/12 md:h-[400px] bg-gray-300 rounded-[15px]">
        <div className="absolute top-0 left-0 bg-red-500 text-white py-2 px-3 shadow">
          New
        </div>
        <img
          src={`${HeroIMG}`}
          alt="hero"
          className="object-cover h-[100%] w-full rounded-[15px]"
        />
      </div>
      <div className="text-left flex flex-col  pb-5 md:justify-start md:w-5/12 md:h-[400px]">
        <p className="text-2xl font-medium ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </p>
        <div className="">
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ea
            eum commodi, perferendis qui assumenda laborum sint cupiditate
            recusandae beatae repudiandae, ullam ab pariatur! Sapiente, expedita
            dicta. Officia, sequi sapiente?
          </p>
          <div className="flex flex-row items-center">
            <p className="my-2 mr-10 text-sm text-gray-400">Date</p>
            <p className="text-sm text-gray-400">Category</p>
          </div>
          <p className="font-semibold">Author Name</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
