import React, { useState } from "react";
import Katana from "./katana";
import styled from "styled-components";

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid tomato;
  border-radius: 3px;
  color: tomato;
  outline: none;
  transition-duration: 0.3s;
  font-family: Andale Mono, monospace;
  cursor: pointer;
  :hover {
    color: white;
    background: tomato;
    transition-duration: 0.3s;
  }
`;
const H1Strike = styled.h1`
  width: 263px;
  box-sizing: border-box;
`;

const DivHeaderContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 0.25em;
  box-shadow: 0 0 0.25em rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  left: 50%;
  padding: 5vmin;
  text-align: center;
  top: 20%;
  transform: translate(-50%, -50%);
  position: absolute;
  margin: 0px 5px 0px 5px;
`;

function ChooseButton() {
  const [angle, setAngle] = useState(0);

  const setNewAngle = () => {
    const angle = Math.floor(Math.random() * Math.floor(180));
    return angle === 0 ? setAngle(angle + 1) : setAngle(angle);
  };

  return (
    <>
      <DivHeaderContainer>
        <H1Strike>Strike angle is {angle}°</H1Strike>

        <Button
          className="newAngleButton"
          onClick={() => {
            setNewAngle();
          }}
        >
          New strike!
        </Button>
      </DivHeaderContainer>
      <Katana angle={angle} />
    </>
  );
}

export default ChooseButton;
