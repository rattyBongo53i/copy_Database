
import { Routes, Route } from "react-router-dom";
import Login from './Pages/Login'
import Dashboard from "./Pages/Dashboard";
import  Finance  from "./Pages/Finance";
import Invoice from "./Pages/Invoice";
import Teacher from "./Pages/Teacher";
import Reports from "./Pages/Reports";
import Students from "./Pages/Students";
import Classes from "./Pages/Classes";
import Settings from "./Pages/Settings";
import Staff from "./Pages/Staff";
import IncomeDetail from "./components/Finance/IncomeDetail";
import { AnimatePresence } from "framer-motion";
import Sandbox from "./Pages/Sandbox";

import { Fragment } from "react";
import './App.css'
function App() {


  return (
    <>
      <AnimatePresence>
        <Fragment>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/invoice" element={<Invoice />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/sandbox" element={<Sandbox />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/students" element={<Students />} />
            <Route path="/teacher" element={<Teacher />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/income-detail" element={<IncomeDetail />} />
          </Routes>
        </Fragment>
      </AnimatePresence>
    </>
  );
}

export default App;
