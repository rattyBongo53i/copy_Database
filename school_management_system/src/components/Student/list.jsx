import React, { useEffect, useState } from 'react'

const List = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    try {
      const url = `${import.meta.env.VITE_App_API_URL}/students`;
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

  const studentsPerPage = 8;

  const studentsData = [
    {
      name: "Alice",
      age: 7,
      class: "Year2",
      address: "123 Elm St",
      parentContact: "555-1234",
      parentEmail: "parent1@example.com",
      dob: "2016-03-15",
    },
    {
      name: "Bob",
      age: 8,
      class: "Year3",
      address: "456 Maple St",
      parentContact: "555-5678",
      parentEmail: "parent2@example.com",
      dob: "2015-06-23",
    },
    {
      name: "Bob",
      age: 8,
      class: "Year3",
      address: "456 Maple St",
      parentContact: "555-5678",
      parentEmail: "parent2@example.com",
      dob: "2015-06-23",
    },
    {
      name: "Bob",
      age: 8,
      class: "Year3",
      address: "456 Maple St",
      parentContact: "555-5678",
      parentEmail: "parent2@example.com",
      dob: "2015-06-23",
    },
    {
      name: "Bob",
      age: 8,
      class: "Year3",
      address: "456 Maple St",
      parentContact: "555-5678",
      parentEmail: "parent2@example.com",
      dob: "2015-06-23",
    },
    {
      name: "Bob",
      age: 8,
      class: "Year3",
      address: "456 Maple St",
      parentContact: "555-5678",
      parentEmail: "parent2@example.com",
      dob: "2015-06-23",
    },
    {
      name: "Bob",
      age: 8,
      class: "Year3",
      address: "456 Maple St",
      parentContact: "555-5678",
      parentEmail: "parent2@example.com",
      dob: "2015-06-23",
    },

    {
      name: "Bob",
      age: 8,
      class: "Year3",
      address: "456 Maple St",
      parentContact: "555-5678",
      parentEmail: "parent2@example.com",
      dob: "2015-06-23",
    },

    // Add more student objects here...
  ];

  // const totalPages = Math.ceil(students.length / studentsPerPage);

  // Get current students
  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = students.slice(
    indexOfFirstStudent,
    indexOfLastStudent
  );

  //
  // Calculate total pages
  const nextPage = () => {
    setCurrentPage((prevPage) =>
      Math.min(prevPage + 1, Math.ceil(students.length / studentsPerPage))
    );
  };
  const prevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
   };


  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  const getClassName = (number) => {
    switch (number) {
      case 1:
        return "Jasmine";
      case 2:
        return "Olive";
      case 3:
        return "Sunlac";
      case 4:
        return "Daisy/Tulip";
      case 5:
        return "Hibiscus";
      case 6:
        return "Reception";
      case 7:
        return "Year1";
      case 8:
        return "Year2";
      case 9:
        return "Year3";
      case 10:
        return "Year4";
      case 11:
        return "Year5";
      case 12:
        return "Year6";
      default:
        return "Unknown"; // Fallback in case of an unexpected number
    }
  };

  // Function to truncate address to 12 characters
  const truncateAddress = (address) => {
    if (!address) return ""; // Handle case where address is null or undefined
    return address.length > 12 ? address.substring(0, 12) + "..." : address;
  };

  return (
    <>
      <div className="student-table-container">
        <table className="student-table">
          <thead>
            <tr>
              {/* <th>Student ID</th> */}
              <th>Student Name</th>
              <th>Date of Birth</th>
              <th>Gender</th>
              <th>Class</th>
              <th>Address</th>
              {/* <th>Parent Contact</th> */}
            </tr>
          </thead>
          <tbody>
            {currentStudents.map((student, index) => (
              <tr key={index}>
                {/* <td>{student.id}</td> */}
                <td>{student.name}</td>
                <td>{student.birth_date}</td>
                <td>{student.gender}</td>
                <td>{getClassName(student.class_id)}</td>
                <td>{truncateAddress(student.address_1)}</td>
                {/* <td>{student.parentContact}</td> */}
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
            Page {currentPage} of {Math.ceil(students.length / studentsPerPage)}{" "}
          </span>
          <button
            className="pagination-button"
            onClick={nextPage}
            disabled={
              currentPage === Math.ceil(students.length / studentsPerPage)
            }
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default List;