import { FaBars } from "react-icons/fa";

import "./menuButton.scss";

interface MenuButtonProps {
  onClick(): void;
}

const MenuButton = ({ onClick }: MenuButtonProps) => {
  return (
    <div className="menu-button" onClick={onClick}>
      <FaBars />
    </div>
  );
};

export default MenuButton;
