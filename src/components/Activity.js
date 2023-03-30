import React, { useState, useEffect, useContext } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import axios from "axios";
import DataContext from "../Context/DataContext";

function Activity() {
  const [isOpen, setIsOpen] = useState(false);
  // const [tasks, setTasks] = useState([]);

  // useEffect((arg) => {
  //   axios
  //     .post(`http://localhost:4000/api/tasks/${arg}`)
  //     .then((response) => setTasks(response.data))
  //     .catch((error) => console.error(error));
  // }, []);

  const { dataset } = useContext(DataContext);

  return (
    <>
      <div className="flex flex-col w-full m-2 h-96 mb-24  py-6 bg-white border shadow-lg rounded-xl overflow-visible">
        <p className="lg:text-2xl text-xl md:text-xl text-black mt-0 mx-5 font-medium">
          Activities{" "}
          <button
            className="float-right"
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
          >
            {!isOpen ? (
              <AiOutlineCaretDown className="h-8 cursor-pointer" />
            ) : (
              <AiOutlineCaretUp className="h-8 cursor-pointer" />
            )}
          </button>
          {isOpen && (
            <div className=" w-full  h-auto mx-2 bg-white">
              <p className="lg:text-md  md:text-sm text-sm mt-2 ">
                Tags: ReactJS NodeJS
              </p>
              <p className="lg:text-md  md:text-sm text-sm mt-2 ">
                {dataset?.activities1
                  ? dataset.activities1
                  : " Activities from Class-23 Only"}

                <br />
                {dataset?.activities2 ? dataset.activities2 : ""}
                <br />
                {dataset?.activities3 ? dataset.activities3 : ""}
              </p>
              <div className="w-full h-24 border border-red-300 rounded-xl my-2  shadow-md ">
                <p className="lg:text-md  md:text-sm text-sm mx-2 my-2">
                  Front-end source code
                </p>
                <input className="enabled:hover:border-gray-400 disabled:opacity-75 mb-4 shadow-md border-2 border-gray-300 rounded-lg mx-3 w-3/4" />
              </div>
              <div className="w-full h-24 border border-red-300 rounded-xl my-2  shadow-md ">
                <p className="lg:text-md  md:text-sm text-sm mx-2 my-2">
                  Front-end deployed URL
                </p>
                <input className="enabled:hover:border-gray-400 disabled:opacity-75 mb-4 shadow-md border-2 border-gray-300 rounded-lg mx-3 w-3/4" />
              </div>
              <button className="bg-indigo-500 hover:bg-indigo-700 text-white text-sm p-2 rounded-lg float-right mt-3">
                Submit
              </button>
            </div>
          )}
        </p>
      </div>
    </>
  );
}

export default Activity;
