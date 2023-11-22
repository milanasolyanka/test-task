import React from "react";
import "./pagination.scss";
import {IPagination} from "./../../models/index"


export const Pagination: React.FC<IPagination> = ({
  cardsPerPage,
  totalCards,
  paginate,
  previousPage,
  nextPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination-container">
      <div className="pagination-bar">
        <div className="pagination-element" onClick={() => previousPage()}>
          &laquo;
        </div>
        {pageNumbers.map((number) => (
          <div className="pagination-element" onClick={() => paginate(number)}>
            {number}
          </div>
        ))}
        <div className="pagination-element" onClick={() => nextPage()}>
          &raquo;
        </div>
      </div>
    </div>
  );
};
