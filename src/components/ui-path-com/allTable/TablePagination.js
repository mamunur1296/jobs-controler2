import React from 'react';

const TablePagination = ({ currentPage, totalPages, paginate }) => {
    const pageNumbers = [];
  
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  
    return (
      <div className="flex justify-center overflow-hidden my-4">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={`px-3 py-1 mx-1 rounded-md ${
              currentPage === number ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
            }`}
          >
            {number}
          </button>
        ))}
      </div>
    );
  };
  

export default TablePagination;
