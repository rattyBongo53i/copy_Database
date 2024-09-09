import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import "../base.css";
import "../components/Finance/styles/invoice.css";

const Sandbox = () => {
    const [students, setStudents] = useState([]);

      useEffect(() => {
        document.title = "RSI | Sandbox";
      }, []);

      useEffect(() => {
        try {
          const url = `${import.meta.env.VITE_App_API_URL}/people`;
          (async () => {
            let response = await fetch(url);
            let data = await response.json();
            setStudents(data);
            console.log(data);
          })();
        } catch (error) {
          console.error("Error fetching students:", error);
        }
      }, []);

  return (
    <>
      <div className="base-wrapper">
        <div className="left">
          <Sidebar />
        </div>
        <div className="main-content">
          <h1>Sandbox</h1>
          <div className="table-area">
            <table>
              <thead>
                <tr>

                  <th>official Name</th>
                  <th>email</th>
                  <th>username</th>
                  <th>birthdate</th>
                  <th>gender</th>
                  <th>action</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, index) => (
                  <tr key={index}>

                    <td>{student.officialName}</td>
                    <td>{student.email}</td>
                    <td>{student.username}</td>
                    <td>{student.dob}</td>
                    <td>{student.gender}</td>
                    <td>
                      <button>Edit</button>
                      <button>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sandbox;
