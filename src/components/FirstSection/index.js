import React from "react";
// import { client } from "../../config/prismic";
// import Prismic from "prismic-javascript";

// Components
import Item from "./components/Item";

// Styles
import { Container, Content, Title, Explanation, CardsArea } from "./styles";

const FirstSection = () => {
  // const [content, setContent] = useState([]);
  const itens = [
    {
      title: "Atraia",
      description:
        "Tenha mais pessoas chegando a seu negócio todos os dias durante o ano.",
    },
    {
      title: "Encante",
      description: "A melhor propaganda é feita por um cliente satisfeito.",
    },
    {
      title: "Venda",
      description: "Venda todos os dias do ano.",
    },
  ];

  // async function fetchApiContent() {
  //   const response = await client().query(
  //     Prismic.Predicates.at("document.type", "header_description")
  //   );

  //   if (response) {
  //     console.log("RESPONSE", response.results);
  //     setContent(response.results);
  //   }
  // }

  // useEffect(() => {
  //   fetchApiContent();
  // }, []);

  return (
    <Container>
      <Content className="container-wrap">
        {/* <Title>{content[0]?.data.header_title[0].text}</Title>
        <Explanation>{content[0]?.data.description[0].text}</Explanation> */}
        <Title>Quer mais clientes?</Title>
        <Explanation>
          Eu posso te ajudar fazendo a internet trabalhar 24 horas para o seu
          negócio. Parece mágica! Mas é apenas utilizar a melhor ferramenta do
          mundo, para impactar pessoas e fazê-las entender o valor do seu
          negócio.
        </Explanation>
        <CardsArea>
          {itens.map((item, key) => (
            <Item key={key} title={item.title} description={item.description} />
          ))}
        </CardsArea>
      </Content>
    </Container>
  );
};

export default FirstSection;
