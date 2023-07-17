const Category = ({ color, children }) => {
  return (
    <div
      className={`bg-${color}-500 m-1 py-1 px-3 rounded-[4px] cursor-pointer  transition-all hover:-translate-y-1 hover:scale-110 duration-200 text-white active:bg-${color}-900`}
    >
      <p className="font-semibold">{children}</p>
    </div>
  );
};

export default Category;
