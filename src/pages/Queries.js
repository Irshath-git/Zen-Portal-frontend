import React from "react";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";

function Queries() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <div className="w-full h-auto flex font-Poppins">
        <div className="w-full h-20 bg-gray-100 ">
          <div className="w-full h-auto   ">
            <button
              onClick={() => setShowForm(!showForm)}
              className="ml-20 mt-6 border border-violet-500 text-violet-700 px-4 py-1 rounded-lg bg-white text-sm font-semibold"
            >
              {" "}
              + Create Query
            </button>
            <div className="w-1/3 bg-none mt-6 mr-5 float-right">
              <input
                className="float-right border border-gray-300 rounded-lg w-2/3"
                placeholder="Search"
              />
            </div>
            {showForm && (
              <div className="popup w-1/2 h-96 bg-white mx-auto shadow-xl rounded-lg">
                <div className="w-full h-16 bg-gray-200 rounded-t-lg">
                  <h2 className="text-xl text-semibold py-4 px-2">
                    Instant Solution
                  </h2>
                </div>
                <div className="m-2">
                  <p className="text-sm text-gray-500">
                    Is your query anything related to javascript? make use use
                    of this area for instant solution
                  </p>
                  <form className="mt-2 text-sm">
                    <label name="query" className="text-gray-500">
                      Enter your query
                    </label>
                    <br />
                    <textarea
                      name="query"
                      className=" w-full h-20 border border-gray-600 shadow-sm rounded-lg my-2"
                      placeholder="Enter your query in detail"
                    ></textarea>
                  </form>
                  <button className="p-1 bg-indigo-600 text-white rounded-lg float-right">
                    Get Answer
                  </button>
                  <p className="text-sm pt-8 text-gray-500">Solution</p>
                  <p className="text-sm pt-2 text-gray-500">
                    If not Satisfied with the solution, press "cancel" to create
                    a New query for mentor assistance
                  </p>
                  <hr class="h-px my-4 mx-4 bg-gray-200 border-0 dark:bg-gray-700" />
                  <button className="p-1 bg-indigo-600 text-white rounded-lg float-right">
                    Confirm
                  </button>
                  <button
                    onClick={() => setShowForm(!showForm)}
                    className="p-1 mr-2 bg-indigo-600 text-white rounded-lg float-right"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Queries;
