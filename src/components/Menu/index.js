import React, { useState, useEffect } from "react";

// Icons
import MenuIcon from "@material-ui/icons/Menu";

// Styles
import { MenuList, MenuListItem, MenuListItemAnchor } from "./styles";

const Menu = () => {
  const [location, setLocation] = useState("/");
  useEffect(() => {
    setLocation(window.location.pathname);
  }, []);

  return (
    <nav className="app-menu">
      <MenuList>
        <MenuListItem>
          <MenuListItemAnchor href="/">
            Menu
            <MenuIcon color="#fff" style={{ marginLeft: 5 }} />
          </MenuListItemAnchor>
        </MenuListItem>
      </MenuList>
    </nav>
  );
};

export default Menu;
