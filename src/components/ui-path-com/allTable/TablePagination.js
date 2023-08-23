import React from 'react';

const TablePagination = ({ currentPage, totalPages, paginate }) => {
    const pageNumbers = [];
  
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  
    return (
      <div className="flex justify-center overflow-x-auto my-4">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={`mx-1 py-2 px-4 rounded-lg ${
              currentPage === number ? 'text-white bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg px-3 md:px-5  md:py-2.5 text-center md:mr-2 md:mb-2' : 'bg-gray-700 text-white text-sm px-3 md:px-5 py-.5 md:py-2.5 text-center md:mr-2 md:mb-2'
          }`}
           
          >
            {number}
          </button>
        ))}
      </div>
    );
  };
  

export default TablePagination;

