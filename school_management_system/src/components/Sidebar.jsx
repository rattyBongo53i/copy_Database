import React, { useState } from 'react'
import logo from "../assets/logo-bg.png";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = ({ toggleSidebar, isMenuOpen }) => {
  const location = useLocation();

  return (
    <>
      <aside>
        <div className="top">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="close" id="close-btn" onClick={() => toggleSidebar()}>
            <span className="material-symbols-outlined">close</span>
          </div>
        </div>
        {/* sidebar starts here */}
        <div className="sidebar">
          <NavLink to="/dashboard">
            <span className="material-symbols-outlined">grid_view</span>
            <h3>Dashboard</h3>
          </NavLink>
          <NavLink
            to="/finance"
            isActive={(match, location) => {
              // Custom logic: Activate Finance link for both /finance and /invoice
              return (
                location.pathname.startsWith("/finance") ||
                location.pathname.startsWith("/invoice")
              );
            }}
            activeClassName="active"
          >
            <span className="material-symbols-outlined">pending</span>
            <h3>Fee Management</h3>
            {/* <span className="pending-count"> 26 </span> */}
          </NavLink>

          <NavLink to="/teacher">
            <span className="material-symbols-outlined">manage_accounts</span>
            <h3>Teachers</h3>
          </NavLink>
          <NavLink to="/classes" className="">
            <span className="material-symbols-outlined">house</span>
            <h3>Classes</h3>
          </NavLink>
          <NavLink to="/students">
            <span className="material-symbols-outlined">manage_accounts</span>
            <h3>Students</h3>
          </NavLink>
          <NavLink to="/reports" className="">
            <span className="material-symbols-outlined">summarize</span>
            <h3>Reports</h3>
          </NavLink>
          <NavLink to="/staff" className="">
            <span className="material-symbols-outlined">manage_search</span>
            <h3>Staff Management</h3>
          </NavLink>
          <NavLink to="/settings" className="">
            <span className="material-symbols-outlined">settings</span>
            <h3>Settings</h3>
          </NavLink>

          <a href="#" className="logout">
            <span className="material-symbols-outlined">logout</span>
            <h3>Logout</h3>
          </a>
        </div>
        {/* aside ends here */}
      </aside>

      {/* mobile */}
      <div className={`sidebar-mobile ${isMenuOpen ? "block" : "none"}`}>
        <div className="top">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="close" id="close-btn" onClick={() => toggleSidebar()}>
            <span className="material-symbols-outlined">close</span>
          </div>
        </div>
        {/* sidebar starts here */}
        <div className="sidebar">
          <a href="#" className="active">
            <span className="material-symbols-outlined">grid_view</span>
            <h3>Dashboard</h3>
          </a>
          <a href="#">
            <span className="material-symbols-outlined">pending</span>
            <h3>Fee Management</h3>
            {/* <span className="pending-count"> 26 </span> */}
          </a>

          <a href="#">
            <span className="material-symbols-outlined">manage_accounts</span>
            <h3>Teachers</h3>
          </a>
          <a href="#" className="">
            <span className="material-symbols-outlined">settings</span>
            <h3>Classes</h3>
          </a>
          <a href="#">
            <span className="material-symbols-outlined">manage_accounts</span>
            <h3>Staff Management</h3>
          </a>
          <a href="#" className="">
            <span className="material-symbols-outlined">settings</span>
            <h3>Reports</h3>
          </a>
          <a href="#" className="">
            <span className="material-symbols-outlined">settings</span>
            <h3>Assignments</h3>
          </a>
          <a href="#" className="">
            <span className="material-symbols-outlined">settings</span>
            <h3>Settings</h3>
          </a>

          <a href="#">
            <span className="material-symbols-outlined">logout</span>
            <h3>Logout</h3>
          </a>
        </div>
        {/* aside ends here */}
      </div>
    </>
  );
};

export default Sidebar;