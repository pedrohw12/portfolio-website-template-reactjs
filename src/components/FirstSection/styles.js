import styled from "styled-components";
import Me from "../../assets/me.png";

export const Container = styled.div`
  background-color: #000;
  
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000;
  padding-top: 50px;
  background-image: url("assets/me.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: left; 
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 50px;
  font-weight: bold;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

export const Explanation = styled.div`
  width: 70%;
  color: #aaa;
  text-align: center;
  line-height: 30px;
  margin-top: 35px;
  margin-bottom: 100px;
`;

export const CardsArea = styled.div`
  display: grid;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-column-gap: 173px;
  }
`;
