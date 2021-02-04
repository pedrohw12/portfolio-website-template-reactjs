import styled from "styled-components";

export const MenuList = styled.ul`
  display: flex;
`;

export const MenuListItem = styled.li`
  list-style: none;
`;

export const MenuListItemAnchor = styled.a`
  display: flex;
  align-items: center;
  font-weight: bold;
  line-height: 40px;
  padding-bottom: 15px;
  margin-right: 1rem;
  text-decoration: none;
  color: #e9e9e9;

  &:hover {
    opacity: 0.7;
  }
`;
