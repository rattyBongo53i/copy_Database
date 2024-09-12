import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import "../Styles/dashboard.css";
// import logo from "../assets/logo-bg.png";
import Sidebar from "../components/Sidebar";
// import List from "../components/Student/list";

const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(true);

      
  const toggleSidebar = () => {
    setIsMenuOpen(!isMenuOpen);
    // alert('Toggle')
    };

  // set page title
  useEffect(() => {
    document.title = "RSI | Dashboard";
  }, []);

   useEffect(() => {
     const today = new Date().toISOString().split("T")[0]; // Get current date in YYYY-MM-DD format
     setSelectedDate(today);
   }, []);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const classes = [
    { name: "Jasmine", age: "0 - 1", level: "Babyland" },
    { name: "Olive", age: "1 - 2", level: "Creche" },
    { name: "Sunlight", age: "2 - 3", level: "Nursery1" },
    { name: "Daisy/Tulip", age: "3 - 4", level: "Nursery2" },
    { name: "Hibiscus", age: "4 - 5", level: "KG1" },
    { name: "Reception", age: "5 - 6", level: "KG2" },
    { name: "Year1", age: "6 - 7", level: "Grade 1" },
    { name: "Year2", age: "7 - 8", level: "Grade 2" },
    { name: "Year3", age: "8 - 9", level: "Grade 3" },
    { name: "Year4", age: "9 - 10", level: "Grade 4" },
    { name: "Year5", age: "10 - 11", level: "Grade 5" },
    { name: "Year6", age: "11 - 12", level: "Grade 6" },
  ];

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  const themeToggle = () => {
    document.body.classList.toggle("dark-theme-variables");
  }
 

  const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 14rem auto 22rem;
    gap: 1rem;
    width: 100%;
    overflow: hidden;
    overflow-y: auto;
    background-color: var(--background-color);
    margin: 0 auto;

    //media queries
    @media screen and (max-width: 1200px) {
      grid-template-columns: 7rem auto 23rem;
    }
    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      width: 100%;
    }
  `;

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
        <div className="wrapper">
          <Sidebar toggleSidebar={toggleSidebar} isMenuOpen={isMenuOpen} />
          <main>
            <div className="date">
              <input
                type="date"
                id="date-input"
                value={selectedDate}
                onChange={handleDateChange}
              />
            </div>

            <div className="insights">
              <div className="sales">
                <span className="material-symbols-outlined">
                  directions_walk
                </span>
                <div className="middle">
                  <div className="left">
                    <h3>Total No. Students</h3>
                    <h1>250</h1>
                  </div>
                  <div className="progress">
                    <svg>
                      <circle cx="38" cy="38" r="36"></circle>
                    </svg>
                    <div className="number">
                      <p>81%</p>
                    </div>
                  </div>
                </div>

                <small className="text-muted">Last 24 Hours</small>
              </div>
              {/* <!-- ------------------End of Sales --------------- --> */}

              <div className="expenses">
                <span className="material-symbols-outlined">
                  account_balance
                </span>
                <div className="middle">
                  <div className="left">
                    <h3>Revenue</h3>
                    <h1>18,023</h1>
                  </div>
                  <div className="progress">
                    <svg>
                      <circle cx="38" cy="38" r="36"></circle>
                    </svg>
                    <div className="number">
                      <p>62%</p>
                    </div>
                  </div>
                </div>

                <small className="text-muted">Last 24 Hours</small>
              </div>

              {/* <!-- -------------------End of Expenses------------- --> */}

              <div className="income">
                <span className="material-symbols-outlined">
                  stacked_line_chart{" "}
                </span>
                <div className="middle">
                  <div className="left">
                    <h3>Active Classes</h3>
                    <h1>5</h1>
                  </div>
                  <div className="progress">
                    <svg>
                      <circle cx="38" cy="38" r="36"></circle>
                    </svg>
                    <div className="number">
                      <p>44%</p>
                    </div>
                  </div>
                </div>

                <small className="text-muted">Last 24 Hours</small>
              </div>
            </div>

            {/* <List /> */}

            {/* time table */}
            <div className="timetable-container">
              <div className="header-navigation">
                <div></div>
                <div className="manage">
                  <Link> Manage Timetable</Link>
                </div>
              </div>
              <div className="timetable">
                <div className="header">Time/Day</div>
                {days.map((day) => (
                  <div key={day} className="header">
                    {day}
                  </div>
                ))}
                {classes.map((classItem, index) => (
                  <React.Fragment key={index}>
                    <div className="class-info">
                      <strong>{classItem.name}</strong> <br />
                      {classItem.age} <br />
                      {classItem.level}
                    </div>
                    {days.map((day) => (
                      <div key={day} className="class-slot">
                        Class {index + 1} <br /> {day}
                      </div>
                    ))}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </main>
          <div className="right-side">
            <div className="top">
              <button id="menu-btn" onClick={() => toggleSidebar()}>
                <span className="material-symbols-outlined active">menu</span>
              </button>
              <div className="theme-toggler" onClick={() => themeToggle()}>
                <span className="material-symbols-outlined active">
                  light_mode
                </span>
                <span className="material-symbols-outlined">dark_mode</span>
              </div>
              <div className="profile">
                <div className="info">
                  <small className="text-muted">Admin</small>
                </div>
                <div className="profile-photo">
                  <img src="./images/profile-1.jpg" alt="" srcSet="admin" />
                </div>
              </div>
            </div>
            {/* <!-- ----- end of top---------- --> */}

            <div className="recent-updates">
              {/* <h2>Summary</h2> */}
              <div className="updates">
                <div className="update">
                  Paid <span className="finance-summary">1200.00</span>
                </div>
                <div className="update">
                  Arrears
                  <span className="finance-summary"> -345</span>
                </div>
              </div>
              <div className="sales-analytics">
                <h2> Class Sessions</h2>
                <div className="item online">
                  <div className="icon">
                    <span className="material-symbols-outlined">
                      shopping_cart
                    </span>
                  </div>
                  <div className="right">
                    <div className="info">
                      <h3>Hibiscus</h3>
                      <small className="text-muted"> last 24 hours</small>
                    </div>
                    <h5 className="success">+39%</h5>
                    <h3>4567</h3>
                  </div>
                </div>

                <div className="item offline">
                  <div className="icon">
                    <span className="material-symbols-outlined">
                      local_mall
                    </span>
                  </div>
                  <div className="right">
                    <div className="info">
                      <h3>Daisy/Tulip</h3>
                      <small className="text-muted"> last 24 hours</small>
                    </div>
                    <h5 className="danger">-17%</h5>
                    <h3>1100</h3>
                  </div>
                </div>

                <div className="item customers">
                  <div className="icon">
                    <span className="material-symbols-outlined">person</span>
                  </div>
                  <div className="right">
                    <div className="info">
                      <h3>Sunlac</h3>
                      <small className="text-muted"> last 24 hours</small>
                    </div>
                    <h5 className="success">+24%</h5>
                    <h3>839</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Dashboard;
