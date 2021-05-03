import { useCallback, useState } from "react";

import MenuButton from "../MenuButton/menuButton";
import Sidebar from "../Sidebar/sidebar";

import "./Header.scss";

const Header = () => {
  const [sidebar, setSidebar] = useState<boolean>(false);

  const showSidebar = useCallback(() => setSidebar(true), []);
  const hideSidebar = useCallback(() => setSidebar(false), []);

  return (
    <header className="header">
      <MenuButton onClick={showSidebar} />
      <Sidebar isDisplayed={sidebar} onClose={hideSidebar} />
    </header>
  );
};

export default Header;
