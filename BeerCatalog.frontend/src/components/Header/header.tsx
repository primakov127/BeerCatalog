import { useCallback, useState } from "react";

import MenuButton from "../MenuButton/menuButton";
import Sidebar from "../Sidebar/sidebar";

import "./Header.scss";

const Header = () => {
  const [isSidebar, setIsSidebar] = useState<boolean>(false);

  const showSidebar = useCallback(() => setIsSidebar(true), []);
  const hideSidebar = useCallback(() => setIsSidebar(false), []);

  return (
    <header className="header">
      <MenuButton onClick={showSidebar} />
      <Sidebar isDisplayed={isSidebar} onClose={hideSidebar} />
    </header>
  );
};

export default Header;
