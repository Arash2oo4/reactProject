import React from "react";

const Hero = () => {
  return (
    <section className="container py-44 w-full flex justify-center items-center flex-col gap-5">
      <h1 className="text-5xl text-gray-900 font-bold text-center">The modern landing page for </h1>
      <h1 className="text-sky-500 text-5xl font-bold text-center">
      React developers</h1>
      <p className="text-2xl text-gray-600">The easiest way to build a React landing page in seconds.</p>
      <a href="https://github.com/Arash2oo4/reactProject" type="button" className="text-white bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-sky-300 dark:focus:ring-sky-800 shadow-lg shadow-sky-500/50 dark:shadow-lg dark:shadow-sky-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Download this Theme Free</a>

    </section>
  );
};

export default Hero;
