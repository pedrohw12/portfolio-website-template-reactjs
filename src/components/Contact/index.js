import React from "react";

// Image
import Whats from "../../assets/whats.png";

// Styles
import {
  Container,
  InfoArea,
  LetsTalk,
  Explanation,
  ButtonArea,
  WhatsAppButton,
} from "./styles";

const Contact = () => {
  return (
    <Container className="container-wrap">
      <InfoArea>
        <LetsTalk>Bora bater um papo? Me conte o que precisa.</LetsTalk>
        <Explanation>
          Clique no botão e vamos conversar diretamente no whatsapp
        </Explanation>
      </InfoArea>
      <ButtonArea>
        <WhatsAppButton
          href="https://api.whatsapp.com/send?phone=5581999210412"
          target="_blank"
        >
          <img src={Whats} alt="whatsapp-logo" />
          (81)9 9921-0412
        </WhatsAppButton>
      </ButtonArea>
    </Container>
  );
};

export default Contact;
