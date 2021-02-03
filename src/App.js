import React from "react";
import ChooseButton from "./components/choose-button";
import styled from "styled-components";

const DivMainContainer = styled.div`
  min-width: 320px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  margin: auto;
  padding: 30px 10px 40px 10px;
`;

function App() {
  return (
    <DivMainContainer className="maincontainer">
      <ChooseButton />
    </DivMainContainer>
  );
}

export default App;
