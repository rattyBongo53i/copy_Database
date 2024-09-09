import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import "../base.css";
import "../components/Finance/styles/invoice.css"

const Invoice = () => {
  // set page title
  useEffect(() => {
    document.title = "RSI | Invoice";
  }, []);

  return (
    <>
      <div className="base-wrapper">
        <div className="left">
          <Sidebar />
        </div>
        <div className="main-content">
          <div className="p-2">
            <h1>Invoice</h1>
          </div>
          <div className="form-area">
            <form action="#">
              <div className="form-group">
                <label>Invoice Number</label>
                <input type="text" placeholder="Enter Invoice Number" />
              </div>
              <div className="form-group">
                <label>Date</label>
                <input type="date" placeholder="Enter Date" />
              </div>
              <div className="form-group">
                <label>Client Name</label>
                <input type="text" placeholder="Enter Client Name" />
              </div>
              <div className="form-group">
                <label>Client Address</label>
                <input type="text" placeholder="Enter Client Address" />
              </div>
              <div className="form-group">
                <label>Items</label>
                <input type="text" placeholder="Enter Items" />
              </div>
              <div className="form-group">
                <label>Total Amount</label>
                <input type="text" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Invoice;
