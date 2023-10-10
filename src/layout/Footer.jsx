import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center mt-10 text-black bottom-0 border-t-2 mx-3 border-black">
      <div className="flex flex-col text-center pt-4 pb-0 ">
        <h2 className="mb-3 text-lg md:text-2xl font-bold">This Is My Footer</h2>
        <p className="text-sm md:text-lg">
          copyright &copy; {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
