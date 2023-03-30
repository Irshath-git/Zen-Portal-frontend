import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import DataContext from "../Context/DataContext";

function Maincard({ classdata }) {
  const { dataset } = useContext(DataContext);
  // console.log(dataset);

  return (
    <>
      <div className="flex flex-col w-full m-2 h-auto py-6 bg-indigo-700 rounded-xl">
        <p className="lg:text-2xl text-lg md:text-xl text-white mx-5 my-auto tracking-wide font-medium">
          Join the class on time!
        </p>
      </div>
      <div className="flex flex-col w-full m-2 h-auto py-2   border bg-white shadow-md rounded-xl">
        <div className="mt-2">
          <h1 className="lg:text-2xl text-xl md:text-xl text-violet-900 font-medium mx-5">
            {dataset?.title ? dataset.title : "No session title available"}
          </h1>
          <p className="lg:text-md  md:text-sm text-sm text-violet-900  my-1 mx-5">
            {dataset?.datetime
              ? dataset.datetime
              : "Class schedule is not updated"}
          </p>
        </div>
        <hr class="h-px my-4 mx-4 bg-gray-200 border-0 dark:bg-gray-700" />
        <div>
          <p className="text-md text-black mt-1 mx-5 font-medium">Contents:</p>
          <p className="lg:text-md md:text-md  text-sm text-gray-500 mx-7 h-auto">
            {dataset?.intro ? dataset.intro : "No content available"}
            <br />
            {dataset?.description ? dataset.description : ""}
            <br />
            {dataset?.description1 ? dataset.description1 : ""}
            <br />
            {dataset?.description2 ? dataset.description2 : ""}
            <br />
            {dataset?.description3 ? dataset.description3 : ""}
            <br />
            {dataset?.description4 ? dataset.description4 : ""}
            <br />
            {dataset?.description5 ? dataset.description5 : ""}
            <br />
            {dataset?.description6 ? dataset.description6 : ""}
          </p>
        </div>
        <div className="mt-2">
          <p className="text-md text-black mt-1 mx-5 font-medium">Pre-read:</p>
          <p className="lg:text-md md:text-md  text-sm text-gray-500 mx-7">
            {dataset?.preread ? dataset.preread : "No preread available"}
            <br />
            {dataset?.preread1 ? dataset.preread1 : ""}
            <br />
            {dataset?.preread2 ? dataset.preread2 : ""}
          </p>
        </div>
      </div>
    </>
  );
}

export default Maincard;
