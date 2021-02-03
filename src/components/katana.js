import React from "react";
import katana from "./katanaweb.png";

import styled from "styled-components";

function Katana(props) {
  const CatanaContainer = styled.div`
    box-sizing: border-box;
    left: 50%;
    text-align: center;
    top: 60%;
    transform: translate(-50%, -50%);
    position: absolute;
  `;

  const KatanaImg = styled.img`
    transform: rotate(${props.angle}deg);
    transition-duration: 0.8s;
    transition-property: transform;
    width: 100%;
    height: 100%;
  `;
  return (
    <CatanaContainer>
      <KatanaImg src={katana} alt="katana"></KatanaImg>
    </CatanaContainer>
  );
}

export default Katana;
