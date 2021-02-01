import React from "react";

// Styles
import { MenuList, MenuListItem, MenuListItemAnchor } from "./styles";

const Menu = () => (
  <nav class="app-menu">
    <MenuList>
      <MenuListItem>
        <MenuListItemAnchor href="#">Home</MenuListItemAnchor>
      </MenuListItem>
      <MenuListItem>
        <MenuListItemAnchor href="#">Contact</MenuListItemAnchor>
      </MenuListItem>
      <MenuListItem>
        <MenuListItemAnchor href="#">About</MenuListItemAnchor>
      </MenuListItem>
    </MenuList>
  </nav>
);

export default Menu;
