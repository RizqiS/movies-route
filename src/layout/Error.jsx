import React, { Suspense } from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const images = import.meta.env.VITE_ERRORIMAGE;
  const error = useRouteError();

  return (
    <div className="flex justify-center flex-col items-center mt-14">
      <h1 className="text-4xl mb-2 tracking-wider italic">
        {error.error.message} <span className="text-red-800">{error.status}</span>
      </h1>
      <img src={images} className="rounded-xl h-96" alt="error" />
    </div>
  );
};

export default Error;
