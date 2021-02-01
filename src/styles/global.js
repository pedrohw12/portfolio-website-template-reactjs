import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}
body {
  -webkit-font-smoothing: antialiased;
}
html, body, #root {
  height: 100%;
  /* overflow-y: hidden; */
}
body, input, button {
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
}
h1, h2, h3, h4, h5, h6, strong {
  font-weight: 500;
}
button {
  cursor: pointer;
}
a {
  text-decoration: none;
}

.container-wrap {
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 1280px;
  display: flex;
  @media (min-width: 1024px) {
    padding-left: 20px;
    padding-right: 20px;
  }
}
`;
