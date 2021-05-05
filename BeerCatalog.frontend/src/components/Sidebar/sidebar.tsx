import { useCallback, useRef } from "react";
import { NavLink } from "react-router-dom";

import useOutsideClick from "../../hooks/useOutsideClick";
import { SidebarData } from "./sidebarData";

import "./sidebar.scss";

interface SidebarProps {
  isDisplayed: boolean;
  onClose(): void;
}

const Sidebar = ({ isDisplayed, onClose }: SidebarProps) => {
  const navElment = useRef(null);
  const navClassName = `sidebar ${isDisplayed ? "sidebar_active" : ""}`;

  const handleOutsideClick = useCallback(() => {
    if (isDisplayed) {
      onClose();
    }
  }, [isDisplayed, onClose]);

  useOutsideClick(navElment, handleOutsideClick);

  return (
    <nav ref={navElment} className={navClassName}>
      <h2 className="sidebar__title">Beer Catalog</h2>
      {SidebarData.map((item, index) => {
        return (
          <NavLink onClick={onClose} exact activeClassName="sidebar__item_selected" className="sidebar__item" to={item.path} key={index}>
            {item.icon}
            <span className="sidebar__item-text">{item.title}</span>
          </NavLink>
        );
      })}
    </nav>
  );
};

export default Sidebar;
