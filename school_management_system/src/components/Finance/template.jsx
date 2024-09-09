import React from "react";

import "../../Styles/dashboard.css";
import "../../Styles/finance.css";

import Sidebar from "../Sidebar";



export const Template = () => {
  return (
    <>
      <div className="finance-wrapper">
        <div className="left">
          <Sidebar />
        </div>
        <div className="finance-content">{/* <Index /> */}</div>
      </div>
    </>
  );
};

export default Template;
