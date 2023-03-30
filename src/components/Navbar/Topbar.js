import React from "react";
import { useparams, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function Topbar() {
  const navigate = useNavigate();
  const { pageName } = useParams();

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:4000/api/logout");
      navigate("/");
      alert("Session Logging Out");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full h-16 border-b-2 text-3xl font-Poppins">
      {/* <h1 className="mx-20 my-6  tracking-wide text-gray-900 font-bold font-Poppins ">
        {pageName}
      </h1> */}
      <button
        onClick={handleLogout}
        className="float-right my-3 mx-3 border-2 border-red-400 p-1 rounded-lg hover:text-white hover:bg-red-400 text-sm font-normal"
      >
        Logout
      </button>
    </div>
  );
}

export default Topbar;
