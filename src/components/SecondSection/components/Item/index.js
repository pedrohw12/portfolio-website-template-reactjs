import React from "react";

// Styles
import { Container, FakeIcon, Title, BlueBar, Description } from "./styles";

const Item = ({ title, description }) => {
  return (
    <Container>
      <FakeIcon />
      <Title>{title}</Title>
      <BlueBar />
      <Description>{description}</Description>
    </Container>
  );
};

export default Item;
