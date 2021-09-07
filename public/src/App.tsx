import React from "react";
import styled, { ThemeProvider } from "styled-components/macro";
import { Normalize } from "styled-normalize";
import { Quote } from "./components/Quote";
import usePreferredColorScheme from "./hooks/usePreferredColorScheme";
import { GlobalStyle, theme } from "./styles";

const Header = styled.header`
  text-align: center;
  font-family: ${({ theme }) => theme.fontFamily.text2};
`;

const Title = styled.h1`
  letter-spacing: 0.1em;
  font-size: 1.25rem;
  font-weight: normal;
  text-align: center;
  font-weight: bold;
  display: flex;
  justify-content: center;
  span {
    letter-spacing: 0;
    font-weight: normal;
    font-size: 0.85rem;
    margin-left: 0.25em;
  }
`;

const Flip = styled.span`
  display: Inline-block;
  transform: scale(-1, 1);
`;

function App() {
  const preferredColorScheme = usePreferredColorScheme();
  return (
    <>
      <ThemeProvider theme={theme[preferredColorScheme]}>
        <Normalize />
        <GlobalStyle />
        <Header>
          <Title>
            JAMES CLEAR{" "}
            <span>
              <Flip>Q</Flip>UOTES
            </span>
          </Title>
          <div>
            <p>
              Taken from{" "}
              <a href="https://jamesclear.com/3-2-1">The 3-2-1 Newsletter</a>.
            </p>
          </div>
        </Header>
        <Quote />
      </ThemeProvider>
    </>
  );
}

export default App;
