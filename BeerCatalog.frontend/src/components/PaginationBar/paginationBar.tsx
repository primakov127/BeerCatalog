import React from "react";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import { NavLink } from "react-router-dom";

import range from "../../helpers/range";

import "./paginationBar.scss";

interface PaginationBarProps {
  currentPage: number;
  pageCount: number;
  makeUrl: (pageNum: number) => string;
}

const PaginationBar = ({ currentPage, pageCount, makeUrl }: PaginationBarProps) => {
  const pagesNums = range(pageCount);
  const isPreviousPage = currentPage > 1;
  const isNextPage = currentPage < pageCount;

  const prevLinkClassName = `pagination-bar__link ${isPreviousPage ? "" : "pagination-bar__link_disabled"}`;
  const nextLinkClassName = `pagination-bar__link ${isNextPage ? "" : "pagination-bar__link_disabled"}`;

  const onPrevLinkClick = isPreviousPage ? () => {} : (e: React.MouseEvent) => e.preventDefault();
  const onNextLinkClick = isNextPage ? () => {} : (e: React.MouseEvent) => e.preventDefault();

  return (
    <div className="pagination-bar">
      <NavLink to={makeUrl(currentPage - 1)} className={prevLinkClassName} onClick={onPrevLinkClick}>
        <GrFormPrevious />
      </NavLink>
      {pagesNums.map((num) => (
        <NavLink key={num} to={makeUrl(num)} className="pagination-bar__link" activeClassName="pagination-bar__link_active">
          {num}
        </NavLink>
      ))}
      <NavLink to={makeUrl(currentPage + 1)} className={nextLinkClassName} onClick={onNextLinkClick}>
        <GrFormNext />
      </NavLink>
    </div>
  );
};

export default PaginationBar;
