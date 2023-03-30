import React, { useState } from "react";

function Tasks() {
  const [showHalf, setShowHalf] = useState(false);

  const handleButtonClick = () => {
    setShowHalf(true);
  };
  return (
    <>
      <div className="ml-20 w-full h-auto z-30 ">
        {showHalf ? (
          <>
            <div className="w-1/2 z-0" style={{ float: "left" }}>
              <div className="w-full h-auto flex flex-col font-Poppins">
                <div className="w-auto  md:h-32 sm:h-auto mx-5 my-2 bg-white drop-shadow-xl rounded-xl flex">
                  <div className=" text-xs">
                    <p className=" text-sm text-violet-900 font-semibold m-2">
                      Student 1
                    </p>
                    <p className="text-xs text-gray-600 font-medium m-2">
                      (B40 WD2 Tamil)
                    </p>
                    <p className="text-xs text-gray-600 font-medium m-2">
                      -Javascript - Day -1 : Introduction to Browser & web
                    </p>
                  </div>
                  <div className=" bg-white ml-64 rounded-xl">
                    <p className="text-xs text-gray-600 font-medium m-2">
                      Submitted on 14/09/22
                    </p>
                    <p className="text-xs text-gray-600 font-medium m-2">
                      Yet to be graded
                    </p>
                    <button
                      onClick={handleButtonClick}
                      className="bg-orange-200 mx-2 text-orange-500 text-xs px-4 py-3 rounded-lg"
                    >
                      Task
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="w-1/2 bg-white shadow-xl rounded-xl my-2"
              style={{ float: "right" }}
            >
              <div className="md:text-lg text-sm">
                <p className="md:text-lg text-sm text-violet-900 font-semibold m-2">
                  Student 1
                </p>
                <p className="text-sm text-gray-600 font-medium m-2">
                  (B40 WD2 Tamil)
                </p>
                <p className="text-sm text-gray-600 font-medium m-2">
                  -Javascript - Day -1 : Introduction to Browser & web
                </p>
              </div>
              <div className=" bg-white  rounded-xl">
                <p className="text-sm text-gray-600 font-medium m-2">
                  Submitted on 14/09/22
                </p>
                <p className="text-sm text-gray-600 font-medium m-2">
                  Yet to be graded
                </p>
              </div>
              <div className="font-Poppins m-1">
                <p className=" p-2">Answers:</p>
                <div className="w-full h-12 border border-orange-300 ">
                  <p className="my-2 mx-2 text-sm">
                    Front-end Source Code :{" "}
                    <input className="border border-black w-2/3 h-8" />
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div>
            <div className="w-full h-auto flex flex-col font-Poppins">
              <div className="w-5/6 h-24 mx-auto my-2 bg-purple-100 rounded-xl flex"></div>
              <div className="w-3/5 h-auto md:h-32 sm:h-auto mx-auto my-2 bg-white drop-shadow-xl rounded-xl flex">
                <div className="">
                  <p className="text-lg text-violet-900 font-semibold m-2">
                    Student 1
                  </p>
                  <p className="text-sm text-gray-600 font-medium m-2">
                    (B40 WD2 Tamil)
                  </p>
                  <p className="text-sm text-gray-600 font-medium m-2">
                    -Javascript - Day -1 : Introduction to Browser & web
                  </p>
                </div>
                <div className=" bg-white ml-64 rounded-xl">
                  <p className="text-sm text-gray-600 font-medium m-2">
                    Submitted on 14/09/22
                  </p>
                  <p className="text-sm text-gray-600 font-medium m-2">
                    Yet to be graded
                  </p>
                  <button
                    onClick={handleButtonClick}
                    className="bg-orange-200 mx-2 text-orange-500 text-sm px-4 py-3 rounded-lg"
                  >
                    Task
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Tasks;
