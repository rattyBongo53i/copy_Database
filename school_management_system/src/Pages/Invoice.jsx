import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import "../base.css";
import "../components/Finance/styles/invoice.css"
import AOS from "aos";
import "aos/dist/aos.css";
const Invoice = () => {
  const [selectedOption, setSelectedOption] = useState("");
  // const [selectOption, setSelectOption] = useState("");
  const [scheduleOption, setScheduleOption] = useState("");
  const [expense, setExpense] = useState([]);
  // State to store selected fees
  const [selectedFees, setSelectedFees] = useState([]);
  const [selectedFeeId, setSelectedFeeId] = useState(""); // For select input value
  const [removingUser, setRemovingUser] = useState(null); // State for user being removed

  // set page title
  useEffect(() => {
    document.title = "RSI | Invoice";
    AOS.init(); //scroll animation
    AOS.refresh();
  }, []);

  const schedule = [
    { id: 1, name: "TERM 1" },
    { id: 2, name: "TERM 2" },
    { id: 3, name: "TERM 3" },
    { id: 4, name: "SUMMER SCHOOL" },
  ];

  const studentsData = [
    {
      id: 1,
      name: "Alice",
      age: 7,
      class: "Year2",
      address: "123 Elm St",
      parentContact: "555-1234",
      parentEmail: "parent1@example.com",
      dob: "2016-03-15",
    },
    {
      id: 2,
      name: "Bob",
      age: 8,
      class: "Year3",
      address: "456 Maple St",
      parentContact: "555-5678",
      parentEmail: "parent2@example.com",
      dob: "2015-06-23",
    },
  ];

  // Event handler for handling select input change
  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
    // console.log(`Selected Option: ${e.target.value}`);
  };
  // Event handler for handling select input change
  const handleSelectChangeSchedule = (e) => {
    setScheduleOption(e.target.value);
    // console.log(`Selected Option: ${e.target.value}`);
  };
  //delete fees

  useEffect(() => {
    try {
      const url = `${import.meta.env.VITE_App_API_URL}/get-fees`;
      (async () => {
        let response = await fetch(url);
        let data = await response.json();
        setExpense(data);
        // console.log(data);
      })();
    } catch (error) {
      console.error("Error fetching expenditure:", error);
    }
  }, []);

  const handleFeeSelection = (e) => {
    const feeId = parseInt(e.target.value);
    // return;
    const selectedFee = expense.find((fee) => fee.id === feeId);
    // setSelectedFees(selectedFees.filter((fee) => fee.id!== selectedFeeId));
    // Check if fee is already added
    if (!selectedFees.some((fee) => fee.id === feeId)) {
      setSelectedFees([...selectedFees, selectedFee]); // Append new fee
    }

    setSelectedFeeId(""); // Reset select input to default state
  };

  // Function to calculate total amount
  const calculateTotalAmount = () => {
    const total = selectedFees.reduce(
      (acc, fee) => acc + parseFloat(fee.amount) || 0,
      0
    ); // Convert fee.amount to number
    return total.toFixed(2); // Ensures the result is formatted as a decimal (two decimal places)
  };

  //delete selected fee
  const deleteFee = (e) => {
    const feeId = e.target.getAttribute("data-id");
    alert(feeId);
 
  };

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
          <div className="invoice-area">
            <div className="heading-basic">
              <h2>Basic Information</h2>
            </div>
            <form action="#">
              <div className="form-group academic-year">
                <label>Academic Year</label>
                <span> 2024/2025</span>
              </div>
              <div className="form-group">
                <label>Student Name</label>
                <select value={selectedOption} onChange={handleSelectChange}>
                  <option value="" disabled>
                    Select student
                  </option>{" "}
                  {/* Default empty option */}
                  {studentsData.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Schedule</label>
                <select
                  value={scheduleOption}
                  onChange={handleSelectChangeSchedule}
                >
                  <option value="" disabled>
                    Select schedule
                  </option>{" "}
                  {/* Default empty option */}
                  {schedule.map((item) => (
                    <option key={item.id} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="append-area">
                {selectedFees.map((fee) => (
                  <div className=" appended" key={fee.id}>
                    <div className="append">
                      <span className="name">{fee.name} </span>
                      <span className="category">{fee.category}</span>
                    </div>
                    <div className="action">
                      <div className="amout">{fee.amount}</div>
                      <button data-id={fee.id} onClick={deleteFee}>
                        <i className="fas fa-trash-alt"></i>
                      </button>
                    </div>
                  </div>
                ))}
                <div className="total-fees">
                  <div> Total</div>
                  <div className="total"> {calculateTotalAmount()}</div>
                </div>
              </div>
              <div className="form-group">
                <label>Select Fee</label>
                <select
                  value={selectedFeeId}
                  onChange={handleFeeSelection}
                  // multiple
                >
                  <option value="" disabled>
                    Select fee
                  </option>{" "}
                  {/* Default empty option */}
                  {expense.map((fee) => (
                    <option key={fee.id} value={fee.id}>
                      {fee.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Invoice Number</label>
                <input type="text" placeholder="Enter Invoice Number" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Invoice;
