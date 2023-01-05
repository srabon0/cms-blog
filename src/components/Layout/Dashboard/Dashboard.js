import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Main/Navbar";
import Sidebar from "./Sidebar";
const Dashboard = () => {
  return (
    <div class="container-fluid">
        <Navbar/>
      <div class="row h-100 mt-2">
        {/* side bar content  */}
        <div class="col-lg-3 col-md-3 col-sm-4 scroll">
          <Sidebar />
        </div>
        {/* main content  */}
        <div class="col-lg-9 col-md-9 col-sm-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
