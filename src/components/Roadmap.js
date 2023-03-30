import React, { useContext, useState } from "react";
import { DataContext } from "../Context/DataContext";

function Roadmap({ classes }) {
  const { getData } = useContext(DataContext);

  const handleClick = (arg) => {
    console.log(arg);
    getData(arg);
  };

  return (
    <>
      <div className="">
        <div className="w-full h-12 bg-gray-100 text-left px-2 py-2 rounded-t-lg flex">
          <p className="text-violet-900 lg:text-xl md:text-lg text-md font-semibold">
            Sessions Roadmap
          </p>
        </div>
        <div>
          {classes.map((item, index) => {
            return (
              <>
                <div className=" mt-2">
                  <div className="w-24 h-auto flex justify-center cursor-pointer rounded-full bg-indigo-700 mx-auto text-center text-white">
                    <button
                      onClick={() => handleClick(index + 1)}
                      className="mx-auto my-auto"
                    >
                      {`Class - ${index + 1}`}
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Roadmap;
