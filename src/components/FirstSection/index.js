import React from "react";

// Icons
import ArrowDropDownCircleIcon from "@material-ui/icons/ArrowDropDownCircle";

// Styles
import { Container, Content, Title, Explanation, BigTitle } from "./styles";

const FirstSection = () => {
  return (
    <Container>
      <Content className="container-wrap">
        <Title>Quem somos</Title>
        <BigTitle>
          É Necessário Boas
          <br /> Pessoas Para Fazerem
          <br /> Bons Trabalhos.
        </BigTitle>
        <Explanation>
          At Acquis we feel it's important to attract, develop,and retain top
          talent. Accordingly, ew have created a 'second family' environtment
          where each individual has an opportunity and obligation to contribute
          to our shared success.
        </Explanation>
        <ArrowDropDownCircleIcon
          color="#fff"
          style={{ color: "#fff", opacity: 0.5 }}
        />
      </Content>
    </Container>
  );
};

export default FirstSection;
