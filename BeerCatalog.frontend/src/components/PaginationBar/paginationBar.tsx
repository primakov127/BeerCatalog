import React from "react";
import { useMemo } from "react";
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
  const pagesNums = useMemo(() => range(pageCount), [pageCount]);
  const isPreviousPage = useMemo(() => currentPage > 1, [currentPage]);
  const isNextPage = useMemo(() => currentPage < pageCount, [currentPage, pageCount]);

  const prevLinkClassName = useMemo(() => `pagination-bar__link ${isPreviousPage ? "" : "pagination-bar__link_disabled"}`, [isPreviousPage]);
  const nextLinkClassName = useMemo(() => `pagination-bar__link ${isNextPage ? "" : "pagination-bar__link_disabled"}`, [isNextPage]);

  const onPrevLinkClick = isPreviousPage ? () => ({}) : (e: React.MouseEvent) => e.preventDefault();
  const onNextLinkClick = isNextPage ? () => ({}) : (e: React.MouseEvent) => e.preventDefault();

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
