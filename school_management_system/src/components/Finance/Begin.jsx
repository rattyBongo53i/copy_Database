import React, { useEffect, useState } from 'react'

import styled from 'styled-components';
// import Chart from './Chart';
import "./styles/begin.css";
import "./styles/modal.css";
import Moneylogo from '../../assets/revenue.png'
import IncomeTable from './IncomeTable';
import { IoIosAddCircle } from "react-icons/io";
import ExpenditureTable from './ExpenditureTable';
import { Link } from "react-router-dom";
import {
  FaDollarSign,
  FaSchool,
  FaChartLine,
  FaChartPie,
} from "react-icons/fa";
import Card from '../Card';

const Index = () => {
    const [show, setShow] = useState(false);
    const [open, setOpen] = useState(false);


  // set page title
  useEffect(() => {
    document.title = "RSI | Finance";
  }, []);

  const PageHeader = styled.div`
    padding: 0.4rem;
    //media queries
    @media screen and (max-width: 1200px) {
    }
    @media screen and (max-width: 768px) {
    }
  `;
  const handleOpen = () => setShow(true);
  const Sopen = () => setOpen(true);


  return (
    <>
      <PageHeader>
        <h1>Finance</h1>
      </PageHeader>
      <div className="top-nav">
        <nav className="navbar">
          <div className="left">
            <ul className="nav-menu">
              <li className="nav-item">
                <Link to="/invoice">Invoice</Link>
              </li>
              <li className="nav-item">
                <Link to="/income-detail">Manage Fees</Link>
              </li>
            </ul>
          </div>

          <div className="right"></div>
        </nav>
      </div>
      <div className="encompass-cards">
        <div className="cards-area">
          <div className="cards-grid">
            <Card
              title="Total Revenue"
              value="₵120,000"
              icon={<FaDollarSign />}
            />
            <Card
              title="Total Expenditure"
              value="₵90,000"
              icon={<FaChartPie />}
            />
            <Card title="Net Profit" value="₵30,000" icon={<FaChartLine />} />
          </div>
        </div>
      </div>
      <div className="table-wrapper">
        <div className="table-one">
          <div className="heading">
            <h2>Revenue </h2>
            <div className="add-new">
              Add new category{" "}
              <button onClick={handleOpen}>
                <IoIosAddCircle />{" "}
              </button>{" "}
            </div>
          </div>
          <IncomeTable show={show} setShow={setShow} />
        </div>
        <div className="table-two">
          <div className="heading">
            <h2>Expenditure </h2>
            <div className="add-new expenditure">
              Add new{" "}
              <button onClick={Sopen}>
                <IoIosAddCircle />{" "}
              </button>{" "}
            </div>
          </div>
          <ExpenditureTable open={open} setOpen={setOpen} />
        </div>
      </div>
    </>
  );
}

export default Index;