import React, { useEffect, useState } from "react";
import "./styles/incomeTable.css";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ExpenditureTable = ({ open, setOpen }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [expense, setExpense] = useState([]);
  const [newExpense, setNewExpense] = useState([]);
  const listPerPage = 5;

  useEffect(() => {
    try {
      const url = `${import.meta.env.VITE_App_API_URL}/get-expenditure`;
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

  const indexOfLastStudent = currentPage * listPerPage;
  const indexOfFirstStudent = indexOfLastStudent - listPerPage;
  const currentList = expense.slice(indexOfFirstStudent, indexOfLastStudent);

  // Calculate total pages
  const nextPage = () => {
    setCurrentPage((prevPage) =>
      Math.min(prevPage + 1, Math.ceil(expense.length / listPerPage))
    );
  };
  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  //modal
  const Fopen = () => setOpen(false);
    const addNewExpense = () => {
        if (newExpense == null) {
          toast.error("Input field cannot be empty");
          return;
  
      }
      if (newExpense != null || newExpense != "") {
          toast.error(" Wow so easy!")
          setNewExpense("");
      return;
    }
  };

  return (
    <>
      <div className="expenditureTable-area">
        <table>
          <thead>
            <th>Expense</th>
            {/* <th>Description</th> */}
            <th>Action</th>
          </thead>
          <tbody>
            {currentList.map((expense, index) => (
              <tr key={index}>
                <td>{expense.name}</td>
                {/* <td>{expense.description}</td> */}
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
            Page {currentPage} of {Math.ceil(expense.length / listPerPage)}{" "}
          </span>
          <button
            className="pagination-button"
            onClick={nextPage}
            disabled={currentPage === Math.ceil(expense.length / listPerPage)}
          >
            Next
          </button>
        </div>
        <ExpenditureModal
          open={open}
          Fopen={Fopen}
          addNewExpense={addNewExpense}
          setNewExpense={setNewExpense}
        />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
    </>
  );
};

export default ExpenditureTable;

export const ExpenditureModal = ({
  open,
  Fopen,
  addNewExpense,
  setNewExpense,
  // selectedOption,
  // handleSelectChange,
}) => {
  const showHideClassName = open ? "modal display-block" : "modal display-none";

  return (
    <>
      <div className={showHideClassName}>
        <div className="modal-main">
          <div className="message">
            <div className="success">New budget is added successfully</div>
            <div className="danger">Input field is empty</div>
          </div>
          <h2>Add new Expense</h2>
          <form action="#">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="name"
                required
                onChange={(e) => setNewExpense(e.target.value)}
              />
            </div>
            <div className="input-group">
              <div className="input-group">
                <select >
                  <option  disabled>
                    Administration
                  </option>
                </select>
              </div>
            </div>
          </form>
          <div className="submit">
            <button className="submit-btn" onClick={addNewExpense}>
              Sumbit
            </button>
            <button className="closed-btn" onClick={Fopen}>
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
