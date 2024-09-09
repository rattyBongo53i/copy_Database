import React, { useState } from 'react'
import './styles/incomeTable.css';
import { CiEdit } from "react-icons/ci";
// import { MdDescription } from 'react-icons/md';
import { RiDeleteBinLine } from "react-icons/ri";

const IncomeTable = ({setShow, show}) => {
    const [currentPage, setCurrentPage] = useState(1);
    
  const listPerPage = 5;

  const CategoryList = [
    { category: "Tuition Fee", description: "School Tuition" },
    {
      category: "Misc Deposit",
      description: "Deposit for Activities and Miscellaneous Costs",
    },
    { category: "AREARS", description: "Previous term's unsettled fees" },
    {
      category: "FEEDING FEE",
      description: "BREAKFAST AND LUNCH AND LUNCH ONLY",
    },
    { category: "LEVIES", description: "HEALTH AND E-SERVICES LEVY" },
    {
      category: "ACTIVITY BOOKS",
      description: "ACADEMIC YEAR ACTIVITY BOOKS",
    },
    {
      category: "EXTRACURRICULAR",
      description: "EXTRACURRICULAR ACTIVITIES",
    },
    { category: "UNIFORM SET", description: "3 UNIFORMS,1 LACOSTE,1 PE KIT" },
  ];
  const indexOfLastStudent = currentPage * listPerPage;
  const indexOfFirstStudent = indexOfLastStudent - listPerPage;
  const currentStudents = CategoryList.slice(
    indexOfFirstStudent,
    indexOfLastStudent
  );

  // Calculate total pages
  const nextPage = () => {
    setCurrentPage((prevPage) =>
      Math.min(prevPage + 1, Math.ceil(CategoryList.length / listPerPage))
    );
  };
  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };
    

    const handleClose = () => setShow(false);
    

  return (
    <>
      <div className="incomeTable-area">
        <table>
          <thead>
            <tr>
              <th>Fee</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentStudents.map((category, index) => (
              <tr key={index}>
                <td>{category.category}</td>
                <td>{category.description}</td>
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
            Page {currentPage} of {Math.ceil(CategoryList.length / listPerPage)}{" "}
          </span>
          <button
            className="pagination-button"
            onClick={nextPage}
            disabled={
              currentPage === Math.ceil(CategoryList.length / listPerPage)
            }
          >
            Next
          </button>
        </div>
        <IncomeModal
          show={show}
          handleClose={handleClose}
        //   handleSelectChange={handleSelectChange}
        />
      </div>
    </>
  );
}

export default IncomeTable;

export const IncomeModal = ({
    show,
    handleClose,
    // selectedOption,
    // handleSelectChange,
}) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
      <>
        <div className={showHideClassName}>
          <div className="modal-main">
            <h2>Add new category</h2>

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
                <input
                  type="text"
                  className="form-control"
                  placeholder="description"
                  required
                />
              </div>
            </form>
            <div className="submit">
              <button className="submit-btn">Sumbit</button>
              <button className="closed-btn" onClick={handleClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      </>
    );

}