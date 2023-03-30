import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Navbar/Sidebar";
import Topbar from "../components/Navbar/Topbar";

function Portal() {
  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="flex flex-col">
        <div id="content">
          <Topbar />
          <div className="flex flex-row">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portal;
