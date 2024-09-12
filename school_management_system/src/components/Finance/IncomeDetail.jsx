import React, { useEffect, useState } from "react";

import "../../Styles/dashboard.css";
import "../../Styles/finance.css";
import "./styles/incomeTable.css";
import "./styles/incomeDetails.css";
import "./styles/modal.css";
import { CiEdit } from "react-icons/ci";
import { IoIosAddCircle } from "react-icons/io";
// import { MdDescription } from 'react-icons/md';
import { RiDeleteBinLine } from "react-icons/ri";
import { FaArrowLeft } from "react-icons/fa";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';


export const IncomeDetail = () => {
  const [show, setShow] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [incomeData, setIncomeData] = useState([]);
  // State to manage the selected option
  const [selectedOption, setSelectedOption] = useState("");
  // set page title
  useEffect(() => {
    document.title = "RSI | Finance";
    }, []);
    
    useEffect(() => { 
        const url = `${import.meta.env.VITE_App_API_URL}/get-fees`;
        try{
        (async () => {
        let response = await fetch(url);
        let data = await response.json();
        setIncomeData(data);
        // console.log(data);
      })();
    } catch (error) {
      console.error("Error fetching fee details:", error);
    }
    });
  
    const rincomeData = [
    {
      id: 1,
      fee: "3 UNIFORM SET (PRIMARY)",
      amount: 840.0,
      category: "UNIFORM SET",
    },
    {
      id: 2,
      amount: 750.0,
      fee: "3 UNIFORM SET(PRE-SCHOOL)",
      category: "Other",
    },
    {
      id: 3,
      amount: 2000.0,
      fee: "ADMISSION FEE",
      category: "Other",
    },
    {
      id: 4,
      amount: 1400.0,
      fee: "ADMISSION FEE 30% OFF",
      category: "Other",
    },
    {
      id: 5,
      amount: 400.0,
      fee: "BALLET",
      category: "EXTRACURRICULAR",
    },
    {
      id: 6,
      amount: 450.0,
      fee: "BALLET COSTUME",
      category: "EXTRACURRICULAR",
    },
    {
      id: 7,
      amount: 1200.0,
      fee: "	BREAKFAST AND LUNCH",
      category: "FEEDING FEE",
    },
    {
      id: 8,
      amount: 1500.0,
      fee: "BREAKFAST AND LUNCH (PRIMARY)",
      category: "FEEDING FEE",
    },
    {
      id: 9,
      amount: 750.0,
      fee: "DAISY/TULIP (NURSERY 2)",
      category: "ACTIVITY BOOKS",
    },
    {
      id: 10,
      amount: 500.0,
      fee: "GRADUATION FEE",
      category: "LEVIES",
    },
    {
      id: 11,
      amount: 1750.0,
      fee: "HALF TUITION",
      category: "Tuition Fee",
    },
    {
      id: 12,
      amount: 850.0,
      fee: "HIBISCUS (KG 1)",
      category: "ACTIVITY BOOKS",
    },
    {
      id: 13,
      amount: 50.0,
      fee: "LACOSTE",
      category: "UNIFORM SET",
    },
    {
      id: 14,
      amount: 50.0,
      fee: "LATE PICK UP",
      category: "Other",
    },
    {
      id: 15,
      amount: 900.0,
      fee: "LUNCH",
      category: "FEEDING FEE",
    },
    {
      id: 16,
      amount: 1200.0,
      fee: "LUNCH (kG1-PRIMARY)",
      category: "FEEDING FEE",
    },
    {
      id: 17,
      amount: 500.0,
      fee: "OLIVE (CRECHE)",
      category: "ACTIVITY BOOKS",
    },
    {
      id: 18,
      amount: 150.0,
      fee: "P.E KIT",
      category: "UNIFORM SET",
    },
    {
      id: 19,
      amount: 500.0,
      fee: "PIANO",
      category: "EXTRACURRICULAR",
    },
    {
      id: 20,
      amount: 150.0,
      fee: "PIANO LESSON TEXT BOOKS",
      category: "EXTRACURRICULAR",
    },
    {
      id: 21,
      amount: 3500.0,
      fee: "PRE-SCHOOL TUITION FEE",
      category: "Tuition Fee",
    },
    {
      id: 22,
      amount: 250.0,
      fee: "PRESCHOOL UNIFORM",
      category: "UNIFORM SET",
    },
    {
      id: 23,
      amount: 950.0,
      fee: "PRESCHOOL UNIFORM SET",
      category: "UNIFORM SET",
    },
    {
      id: 24,
      amount: 1750.0,
      fee: "PRIMARY",
      category: "ACTIVITY BOOKS",
    },
    {
      id: 25,
      amount: 3700.0,
      fee: "PRIMARY TUITION FEE",
      category: "Tuition Fee",
    },
    {
      id: 26,
      amount: 280.0,
      fee: "PRIMARY UNIFORM",
      category: "UNIFORM SET",
    },
    {
      id: 27,
      amount: 1200.0,
      fee: "PRIMARY UNIFORM SET",
      category: "UNIFORM SET",
    },
    {
      id: 28,
      amount: 1050.0,
      fee: "RECEPTION (KG 2)",
      category: "ACTIVITY BOOKS",
    },
    {
      id: 29,
      amount: 400.0,
      fee: "STEM AND ROBOTICS",
      category: "EXTRACURRICULAR",
    },
    {
      id: 30,
      amount: 685.0,
      fee: "SUNLAC (NURSERY 1)",
      category: "ACTIVITY BOOKS",
    },
    {
      id: 31,
      amount: 1500.0,
      fee: "SWIMMING",
      category: "EXTRACURRICULAR",
    },
  ];

  const CategoryList = [
    { id: 1, category: "Tuition Fee", description: "School Tuition" },
    {
      id: 2,
      category: "Misc Deposit",
      description: "Deposit for Activities and Miscellaneous Costs",
    },
    {
      id: 3,
      category: "AREARS",
      description: "Previous term's unsettled fees",
    },
    {
      id: 4,
      category: "FEEDING FEE",
      description: "BREAKFAST AND LUNCH AND LUNCH ONLY",
    },
    { id: 5, category: "LEVIES", description: "HEALTH AND E-SERVICES LEVY" },
    {
      id: 6,
      category: "ACTIVITY BOOKS",
      description: "ACADEMIC YEAR ACTIVITY BOOKS",
    },
    {
      id: 7,
      category: "EXTRACURRICULAR",
      description: "EXTRACURRICULAR ACTIVITIES",
    },
    {
      id: 8,
      category: "UNIFORM SET",
      description: "3 UNIFORMS,1 LACOSTE,1 PE KIT",
    },
  ];

  // Event handler for handling select input change
  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
    // console.log(`Selected Option: ${e.target.value}`);
  };

  const detailsPerPage = 9;
  // Get current students
  const indexOfLastStudent = currentPage * detailsPerPage;
  const indexOfFirstDetail = indexOfLastStudent - detailsPerPage;
  const currentDetails = incomeData.slice(
    indexOfFirstDetail,
    indexOfLastStudent
  );

  // Calculate total pages
  const nextPage = () => {
    setCurrentPage((prevPage) =>
      Math.min(prevPage + 1, Math.ceil(incomeData.length / detailsPerPage))
    );
  };
  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleOpen = () => setShow(true);
  const handleClose = () => setShow(false);

  // randomuser.me/api/
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 1.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.6,
          delay: 0.1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className="finance-wrapper">
          <div className="left">
            <Sidebar />
          </div>
          <div className="finance-content">
            <div className="income-top">
              <h1>Finance</h1>
              <span></span>
            </div>
            <div className="navigation">
              <Link to="/finance">
                <span className="navs">
                  <span className="material-symbols-outlined">
                    chevron_left
                  </span>
                  home
                </span>
              </Link>
            </div>
            <div className="detail-table-encompass">
              <div className="table-area income-detail">
                <div className="heading">
                  <h2>Revenue List </h2>
                  <div className="add-new expenditure">
                    Add new{" "}
                    <button onClick={handleOpen}>
                      <IoIosAddCircle />{" "}
                    </button>{" "}
                  </div>
                </div>
                <table>
                  <thead>
                    <tr>
                      <th>Fee</th>
                      <th>Amount</th>
                      <th>category</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentDetails.map((income, index) => (
                      <tr key={index}>
                        <td>{income.name}</td>
                        {/* <td>�� 10,000</td> */}
                        <td>{income.amount}</td>
                        <td>{income.category}</td>
                        <td className="action">
                          {" "}
                          <button>
                            <CiEdit />
                          </button>
                          <button>
                            <RiDeleteBinLine />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="pagination">
                  {/* <div> */}
                  <button
                    className="pagination-button"
                    onClick={prevPage}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </button>
                  <span>
                    {" "}
                    Page {currentPage} of{" "}
                    {Math.ceil(incomeData.length / detailsPerPage)}{" "}
                  </span>
                  <button
                    className="pagination-button"
                    onClick={nextPage}
                    disabled={
                      currentPage ===
                      Math.ceil(incomeData.length / detailsPerPage)
                    }
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Modal
            show={show}
            handleClose={handleClose}
            handleSelectChange={handleSelectChange}
            CategoryList={CategoryList}
          />
        </div>
      </motion.div>
    </>
  );
};

export const Modal = ({
  show,
  handleClose,
  selectedOption,
  handleSelectChange,
  CategoryList,
}) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <div className="modal-main">
        <div className="close">
          <span className="material-symbols-outlined" onClick={handleClose}>
            close
          </span>
        </div>
        <h2>Add new bill</h2>
        <form>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="name"
              required
            />
          </div>
          <div className="input-group">
            <select value={selectedOption} onChange={handleSelectChange}>
              <option value="" disabled>
                Select an option
              </option>{" "}
              {/* Default empty option */}
              {CategoryList.map((item) => (
                <option key={item.id} value={item.category}>
                  {item.category}
                </option>
              ))}
            </select>
          </div>
          <div className="input-group">
            <input
              type="number"
              className="form-control"
              placeholder="amount"
              required
            />
          </div>
        </form>
        <div className="submit">
          <button className="submit-btn" onClick={handleClose}>
            Sumbit
          </button>
        <button className="closed-btn" onClick={handleClose}>
          Close
        </button>
        </div>
      </div>
    </div>
  );
};

export default IncomeDetail;
