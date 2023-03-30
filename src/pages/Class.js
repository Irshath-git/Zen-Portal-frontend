import React, { useState, useEffect } from "react";
import Activity from "../components/Activity";
import Maincard from "../components/Maincard";
import Roadmap from "../components/Roadmap";
import axios from "axios";
// import jwt from "jsonwebtoken";

function Class() {
  const [classes, setClasses] = useState([]);
  const [classdata, setClassdata] = useState([]);

  const getclasses = async () => {
    await axios
      .get("https://zen-portal-clone.onrender.com/api/classes")
      .then((res) => {
        setClasses(res.data);
      });
  };

  const findClasses = async (arg) => {
    await axios
      .get(`https://zen-portal-clone.onrender.com/api/classes/${arg}`)
      .then((res) => {
        setClassdata(res.data);
      });
  };

  useEffect(() => {
    getclasses();
    findClasses();
    // const token = localStorage.getItem("token");
    // if (token) {
    //   const user = jwt.decode(token);
    //   console.log(token);

    //   if (!user) {
    //     localStorage.removeItem("token");
    //     window.location.href = "/";
    //   }
    // }
  }, []);

  // console.log(classes);

  return (
    <>
      <div className="w-full flex flex-col md:flex-col lg:flex-row sm:flex-col font-Poppins ml-16">
        <div className="lg:w-2/3 md:w-4/5 w-3/4  h-96 bg-white flex flex-col ml-2 mb-2 mx-5">
          <Maincard />
          <Activity />
        </div>
        <div className=" lg:w-96 md:w-80 w-64  h-auto mt-96 md:mt-72 lg:my-2  mx-auto sticky bg-white border rounded-lg shadow-xl flex flex-col ">
          <Roadmap classes={classes} />
        </div>
      </div>
    </>
  );
}

export default Class;
