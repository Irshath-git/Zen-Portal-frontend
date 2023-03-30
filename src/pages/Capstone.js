import React, { useState } from "react";

function Capstone() {
  const [showHalf, setShowHalf] = useState(false);

  const handleButtonClick = () => {
    setShowHalf(true);
  };
  return (
    <>
      <div className="ml-20 w-full h-auto ">
        {showHalf ? (
          <>
            <div className="w-1/2" style={{ float: "left" }}>
              <div className="w-full h-auto flex flex-col font-Poppins ">
                <div className="w-auto  md:h-32 sm:h-auto mx-5 my-2 bg-white drop-shadow-xl rounded-xl flex">
                  <div className=" text-xs">
                    <p className=" text-sm text-violet-900 font-semibold m-2">
                      Student 1
                    </p>
                    <p className="text-xs text-gray-600 font-medium m-2">
                      (B40 WD2 Tamil - Capstone Project)
                    </p>
                    <p className="text-xs text-gray-600 font-medium m-2">
                      Zendesk clone
                    </p>
                  </div>
                  <div className=" bg-white ml-64 rounded-xl">
                    <p className="text-xs text-gray-600 font-medium m-2">
                      Submitted on 14/03/23
                    </p>
                    <p className="text-xs text-gray-600 font-medium m-2">
                      Yet to be graded
                    </p>
                    <button
                      onClick={handleButtonClick}
                      className="bg-orange-200 mx-2 text-orange-500 text-xs px-4 py-3 rounded-lg"
                    >
                      capstone
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
                  (B40 WD2 Tamil - Capstone Project)
                </p>
                <p className="text-sm text-gray-600 font-medium m-2">
                  Zendesk clone
                </p>
              </div>
              <div className=" bg-white  rounded-xl">
                <p className="text-sm text-gray-600 font-medium m-2">
                  Submitted on 14/03/23
                </p>
                <p className="text-sm text-gray-600 font-medium m-2">
                  Yet to be graded
                </p>
              </div>
              <div className=" bg-white  rounded-xl">
                <p className="text-sm text-purple-900 font-medium m-2">
                  Description :
                </p>
                <p className="text-sm text-purple-900 font-medium m-2">
                  To identify and implement the Capstone project as the title
                  given below by meeting all the necessary requirements.
                </p>
                <p className="text-sm text-purple-900 font-bold m-2">
                  Task Title:{" "}
                  <span className="text-red-400">Zendesk clone</span>
                </p>
                <p className="text-sm text-purple-900 font-bold m-2">
                  Any specifications on the design?
                </p>
                <p className="text-sm text-purple-900 font-normal m-2">
                  Front-end: Reactjs
                </p>
                <p className="text-sm text-purple-900 font-normal m-2">
                  Back-end: Nodejs
                </p>
                <p className="text-sm text-purple-900 font-normal m-2">
                  Database: MongoDB
                </p>
                <p className="text-sm text-purple-900 font-bold m-2">
                  Requirements:
                  <li className="font-normal">
                    The project should achieve the CODE QUALITY
                  </li>
                  <li className="font-normal">
                    Use fonts/icons if it’s required in the design.
                  </li>
                  <li className="font-normal">
                    The use of various charts is required in the design.
                  </li>
                  <li className="font-normal">
                    The use of bootstrap/ material CSS is required in the design
                  </li>
                </p>
                <p className="text-sm text-purple-900 font-bold m-2">
                  How do I submit my work?
                  <li className="font-normal">
                    Push all your work files to GitHub in two different
                    repositories as given below
                  </li>
                  <li className="font-normal">
                    Front-end repo name project-name-frontend.
                  </li>
                  <li className="font-normal">
                    Back-end repo name project-name-backend.
                  </li>
                  <li className="font-normal">
                    Deploy your front-end application on
                    Netlify(https://www.netlify.com) and back-end application on
                    Render(https://render.com/).
                  </li>
                </p>
              </div>
              <div className="font-Poppins m-1">
                <p className=" p-2">Answers:</p>
                <div className="w-full h-auto border ">
                  <p className="my-3 mx-2 text-sm">
                    Front-end Source Code :{" "}
                    <input className="border border-black w-2/3 h-8" />
                  </p>
                  <p className="my-3 mx-2 text-sm">
                    Front-end Deployed Url :{" "}
                    <input className="border border-black w-2/3 h-8" />
                  </p>
                  <p className="my-3 mx-2 text-sm">
                    Back-end Source Code :{" "}
                    <input className="border border-black w-2/3 h-8" />
                  </p>
                  <p className="my-3 mx-2 text-sm">
                    Back-end Deployed Url :{" "}
                    <input className="border border-black w-2/3 h-8" />
                  </p>
                  <button className="bg-indigo-500 hover:bg-indigo-700 text-white text-sm p-2 rounded-lg float-right mt-3">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div>
            {/* Original div before button click */}

            <div className="w-full h-auto flex flex-col font-Poppins">
              <div className="w-5/6 h-24 mx-auto my-2 bg-purple-100 rounded-xl flex"></div>
              <div className="w-3/5 h-auto md:h-32 sm:h-auto mx-auto my-2 bg-white drop-shadow-xl rounded-xl flex">
                <div className="">
                  <p className="text-lg text-violet-900 font-semibold m-2">
                    Student 1
                  </p>
                  <p className="text-sm text-gray-600 font-medium m-2">
                    (B40 WD2 Tamil - Capstone Project)
                  </p>
                  <p className="text-sm text-gray-600 font-medium m-2">
                    Zendesk clone
                  </p>
                </div>
                <div className=" bg-white ml-64 rounded-xl">
                  <p className="text-sm text-gray-600 font-medium m-2">
                    Submitted on 14/03/23
                  </p>
                  <p className="text-sm text-gray-600 font-medium m-2">
                    Yet to be graded
                  </p>
                  <button
                    onClick={handleButtonClick}
                    className="bg-orange-200 mx-2 text-orange-500 text-sm px-4 py-3 rounded-lg"
                  >
                    capstone
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

export default Capstone;
