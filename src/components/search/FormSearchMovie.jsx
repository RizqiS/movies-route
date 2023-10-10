import React, { useRef } from "react";
import InputMovie from "./InputMovie";
import { searchAction } from "../../store/search-movie";
import { useDispatch } from "react-redux";

const FormSearchMovie = () => {
  const searchRef = useRef();
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    if (searchRef.current.value == "") {
      return;
    }
    localStorage.setItem("search", searchRef.current.value);
    dispatch(searchAction.setInputMovie(searchRef.current.value));
    searchRef.current.value = "";
  };

  return (
    <div className="container border-2 h-max mx-auto mt-11 p-3">
      <h1 className="text-center mb-3 font-bold text-2xl">Searching Movies</h1>
      <form onSubmit={submitHandler}>
        <div className="flex gap-x-3 justify-center">
          <InputMovie ref={searchRef} />
          <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-black/75">
            search
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormSearchMovie;
