import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPages = () => {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  };

  return (
    <div className="flex items-center justify-center gap-2 my-4">
   
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="text-gray-400 hover:text-black disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed"
      >
        &lt;
      </button>


      {getPages().map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-8 h-8 rounded-md border text-sm font-medium transition
            ${
              currentPage === page
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-black hover:border-gray-300"
            } cursor-pointer`}
        >
          {page}
        </button>
      ))}


      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="text-gray-700 hover:text-black disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed"
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
