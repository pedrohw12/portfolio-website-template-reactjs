import styled from "styled-components";

export const MenuList = styled.ul`
  display: flex;
`;

export const MenuListItem = styled.li`
  list-style: none;
`;

export const MenuListItemAnchor = styled.a`
  font-weight: bold;
  line-height: 40px;
  padding-bottom: 15px;
  color: #e9e9e9;
  margin-right: 1rem;
  text-decoration: none;
  border-bottom: ${(props) => `3px solid ${props.borderColor}`};
  color: ${(props) => `${props.color}`};

  &:hover {
    border-bottom: 3px solid #f1b416;
    color: #f1b416;
  }
`;
