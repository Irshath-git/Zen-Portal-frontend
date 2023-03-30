import React, { useState } from "react";

function Webcode() {
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
              <div className="w-full h-auto flex flex-col font-Poppins">
                <div className="w-auto  md:h-32 sm:h-auto mx-5 my-2 bg-white drop-shadow-xl rounded-xl flex">
                  <div className=" text-xs">
                    <p className=" text-sm text-violet-900 font-semibold m-2">
                      Student 1
                    </p>
                    <p className="text-xs text-gray-600 font-medium m-2">
                      (B40 WD2 Tamil - First Webcode Session)
                    </p>
                    <p className="text-sm text-gray-600 font-medium m-2">
                      YouTube Clone
                    </p>
                  </div>
                  <div className=" bg-white ml-64 rounded-xl">
                    <p className="text-xs text-gray-600 font-medium m-2">
                      submitted on October 31st 2022, 12:26 pm
                    </p>
                    <p className="text-xs text-gray-600 font-medium m-2">
                      Yet to be graded
                    </p>
                    <button
                      onClick={handleButtonClick}
                      className="bg-orange-200 mx-2 text-orange-500 text-xs px-4 py-3 rounded-lg"
                    >
                      Webcode
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
                  (B40 WD2 Tamil - First Webcode Session)
                </p>
                <p className="text-sm text-gray-600 font-medium m-2">
                  YouTube Clone
                </p>
              </div>
              <div className=" bg-white  rounded-xl">
                <p className="text-sm text-gray-600 font-medium m-2">
                  submitted on October 31st 2022, 12:26 pm
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
                  Problem statement:
                </p>
                <p className="text-sm text-purple-900 font-bold m-2">
                  YOUTUBE CLONE -{" "}
                  <span className="text-red-400">
                    Create a web app to clone the youtube web application
                  </span>
                </p>
                <p className="text-sm text-purple-900 font-bold m-2">
                  Requirements:
                  <li className="font-normal">
                    Create functionality to Retrieve channel information
                  </li>
                  <li className="font-normal">
                    Create functionality to Uploaded videos and system-generated
                    playlists
                  </li>
                  <li className="font-normal">
                    Create functionality to Retrieve Subscriptions and user
                    activity.
                  </li>
                  <li className="font-normal">
                    Create functionality for topic-based searching and search
                    for playlists or channels
                  </li>
                  <li className="font-normal">
                    Create functionality to create and update a playlist.
                  </li>
                </p>
                <p className="text-sm text-purple-900 font-bold m-2">
                  Useful links and learning resources:
                  <li className="font-normal">
                    Getting started:
                    https://developers.google.com/youtube/v3/guides/auth/client-side-web-apps
                  </li>
                  <li className="font-normal">
                    API info:
                    https://developers.google.com/youtube/v3/sample_requests
                  </li>
                  <li className="font-normal">
                    Raise a query ticket only in the zen portal and get your
                    doubts resolved.
                  </li>
                </p>
              </div>
              <div className="font-Poppins m-1">
                <p className=" p-2">Answers:</p>
                <div className="w-full h-auto border border-orange-300 ">
                  <p className="my-2 mx-2 text-sm">
                    Front-end Source Code :{" "}
                    <input className="border border-black w-2/3 h-8" />
                  </p>
                  <p className="my-3 mx-2 text-sm">
                    Front-end Deployed Url :{" "}
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
                    (B40 WD2 Tamil - First Webcode Session)
                  </p>
                  <p className="text-sm text-gray-600 font-medium m-2">
                    YouTube Clone
                  </p>
                </div>
                <div className=" bg-white ml-64 rounded-xl">
                  <p className="text-sm text-gray-600 font-medium m-2">
                    submitted on October 31st 2022, 12:26 pm
                  </p>
                  <p className="text-sm text-gray-600 font-medium m-2">
                    Yet to be graded
                  </p>
                  <button
                    onClick={handleButtonClick}
                    className="bg-orange-200 mx-2 text-orange-500 text-sm px-4 py-3 rounded-lg"
                  >
                    Webcode
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

export default Webcode;
