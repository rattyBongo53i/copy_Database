import React from "react";
import Sidebar from "../components/Sidebar";
import "../base.css";

const Setting = () => {
  return (
    <>
      <div className="base-wrapper">
        <div className="left">
          <Sidebar />
        </div>
        <div className="main-content">
          <h1>Setting</h1>
        </div>
      </div>
    </>
  );
};

export default Setting;
