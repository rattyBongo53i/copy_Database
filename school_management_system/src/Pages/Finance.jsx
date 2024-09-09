import React from 'react'
import "../Styles/dashboard.css";
import "../Styles/finance.css";
// import logo from "../assets/logo-bg.png";
import Sidebar from "../components/Sidebar";
import Index from "../components/Finance/Begin";
export const Finance = () => {




  return (
    <>
      <div className="finance-wrapper">
        <div className="left">
          <Sidebar />
        </div>
        <div className="finance-content">
          <Index />
        </div>
      </div>
    </>
  );
}

export default Finance;