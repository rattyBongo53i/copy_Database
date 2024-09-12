import React from 'react'
import "../Styles/dashboard.css";
import "../Styles/finance.css";
// import logo from "../assets/logo-bg.png";
import Sidebar from "../components/Sidebar";
import Index from "../components/Finance/Begin";
import { motion } from 'framer-motion';

export const Finance = () => {




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
          <Index />
        </div>
      </div>
      </motion.div>
    </>
  );
}

export default Finance;