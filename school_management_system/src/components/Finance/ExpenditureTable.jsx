import React, { useState } from 'react'
import "./styles/incomeTable.css";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";

const ExpenditureTable = ({open, setOpen}) => {
      const [currentPage, setCurrentPage] = useState(1);
      const listPerPage = 5;
    

    const Expenses = [
      { expense: "Teacher Salary", amount: "1000", action: "Edit" },
      { expense: "Admin Staff Salary", amount: "500", action: "Edit" },
      { expense: "Support Staff Salary", amount: "200", action: "Edit" },
      { expense: "Electricity Bill", amount: "100", action: "Edit" },
      { expense: "Water Bill", amount: "100", action: "Edit" },
      { expense: "Internet Bill", amount: "100", action: "Edit" },
      { expense: "Academic Resources", amount: "100", action: "Edit" },
      { expense: "Cafeteria Supplies", amount: "100", action: "Edit" },
      { expense: "IT Support", amount: "100", action: "Edit" },
      { expense: "Transportation", amount: "100", action: "Edit" },
    ];

     const indexOfLastStudent = currentPage * listPerPage;
     const indexOfFirstStudent = indexOfLastStudent - listPerPage;
     const currentList = Expenses.slice(
       indexOfFirstStudent,
       indexOfLastStudent
     );

     // Calculate total pages
     const nextPage = () => {
       setCurrentPage((prevPage) =>
         Math.min(prevPage + 1, Math.ceil(Expenses.length / listPerPage))
       );
     };
     const prevPage = () => {
       setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
     };

    
    //modal
  const Fopen = () => setOpen(false);


    return (
      <>
        <div className="expenditureTable-area">
          <table>
            <thead>
              <th>Expense</th>
              <th>Amount</th>
              {/* <th>Description</th> */}
              <th>Action</th>
            </thead>
            <tbody>
              {currentList.map((expense, index) => (
                <tr key={index}>
                  <td>{expense.expense}</td>
                  <td>{expense.amount}</td>
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
              Page {currentPage} of {Math.ceil(Expenses.length / listPerPage)}{" "}
            </span>
            <button
              className="pagination-button"
              onClick={nextPage}
              disabled={
                currentPage === Math.ceil(Expenses.length / listPerPage)
              }
            >
              Next
            </button>
          </div>
          <ExpenditureModal
            open={open}
            Fopen={Fopen}
            //   handleSelectChange={handleSelectChange}
          />
        </div>
      </>
    );
}

export default ExpenditureTable;

export const ExpenditureModal = ({
  open,
  Fopen,
  // selectedOption,
  // handleSelectChange,
}) => {
  const showHideClassName = open ? "modal display-block" : "modal display-none";

  return (
    <>
      <div className={showHideClassName}>
        <div className="modal-main">
          <h2>Add new Expense</h2>
          <form action="#">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="name"
                required
              />
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
            <button className="submit-btn">Sumbit</button>
            <button className="closed-btn" onClick={Fopen}>
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};