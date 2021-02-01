import React from "react";

// Images
import Insta from "../../assets/insta.png";
import Face from "../../assets/face.png";
import Youtube from "../../assets/youtube.png";

// Styles
import { Container, Content, SocialMediaArea } from "./styles";

const Footer = () => (
  <Container className="container">
    <Content className="container-wrap">
      <span>Pedro Wanderley @ 2021</span>
      <SocialMediaArea>
        <a href="https://www.instagram.com/pedrowand/" target="_blank">
          <img src={Insta} alt="instagram-logo" />
        </a>
        <a href="https://www.facebook.com/pedro.wanderley.3" target="_blank">
          <img src={Face} alt="face-logo" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCAEa2d8qdFbluis_DwATAKw"
          target="_blank"
        >
          <img src={Youtube} alt="youtube-logo" />
        </a>
      </SocialMediaArea>
      <span>Política de Privacidade</span>
    </Content>
  </Container>
);

export default Footer;
