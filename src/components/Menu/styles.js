import styled from "styled-components";

export const MenuList = styled.ul`
  display: flex;
`;

export const MenuListItem = styled.li`
  list-style: none;
`;

export const MenuListItemAnchor = styled.a`
  line-height: 40px;
  color: #e9e9e9;
  margin-right: 1rem;
  text-decoration: none;

  &:hover {
    border-bottom: 3px solid #ff3;
    color: #ff3;
  }
`;
