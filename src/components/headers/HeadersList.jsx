import React from "react";

const HeadersList = () => {
  return (
    <header
      className="bg-no-repeat bg-cover h-80 md:h-96 lg:h-screen md:-mt-16 lg:-mt-32 w-full"
      style={{ backgroundImage: `url(${import.meta.env.VITE_IMAGEHEADER})` }}>
      <section className="flex flex-col justify-center items-center text-center h-80 md:h-96 lg:h-screen bg-black bg-opacity-50">
        <h2 className="text-lg md:text-xl lg:text-4xl font-bold text-white">
          Welcome Movie Project
        </h2>
        <p className="w-1/2 text-xs md:text-sm lg:w-2/5  text-white mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </section>
    </header>
  );
};

export default HeadersList;
