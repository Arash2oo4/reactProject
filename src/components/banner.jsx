const Banner = () => {
  return (
    <div className="container bg-sky-100 rounded-lg py-8 w-9/12 my-10 flex justify-between items-center lg:flex-row flex-col gap-5">
      <h1 className="text-gray-900 text-2xl font-bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> <span className="text-sky-500">
        Start your Free
        Trial.
        </span>
      </h1>
      <a href="/" type="button" className="text-white bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-sky-300 dark:focus:ring-sky-800 shadow-lg shadow-sky-500/50 dark:shadow-lg dark:shadow-sky-800/80 font-medium rounded-lg text-sm px-5 py-2.5 w-full lg:w-auto text-center mr-2 mb-2">Get start</a>
    </div>
  );
};

export default Banner;
