import React from "react";
import styled from "styled-components";

const GlobalDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const Dash = styled.div`
  width: 78px;
  height: 5px;
  margin-right: 8px;
  text-transform: uppercase;
  background-color: #9d67f8;
`;

const CardH1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90px;
  color: #ffffff;
  font-size: 38px;
  margin: 30px 0;
`;

const Cards = styled.div`
  color: #ffffff;
  display: flex;
  justify-content: space-around;
`;

const CardFront = styled.div`
  background-color: #222233;
  width: 385px;
  height: 370px;
  border-radius: 25px;
`;
const FrontCardHeader = styled.div`
  display: flex;
`;
const FrontTitle = styled.div`
  display: flex;
  flex-direction: column;
`;
const FrontH2 = styled.h2`
  color: #4c40f7;
  font-size: 14px;
  margin: 0;
`;
const FrontH3 = styled.h3`
  font-size: 26px;
  margin: 0;
`;

const CardBack = styled.div`
  background-color: #222233;
  width: 385px;
  height: 370px;
  border-radius: 25px;
`;
const BackCardHeader = styled.div`
  display: flex;
`;
const BackTitle = styled.div`
  display: flex;
  flex-direction: column;
`;
const BackH2 = styled.h2`
  color: #9d67f8;
  font-size: 14px;
  margin: 0;
`;
const BackH3 = styled.h3`
  font-size: 26px;
  margin: 0;
`;

const Card = () => {
  return (
    <GlobalDiv>
      <CardH1>Compétences</CardH1>
      <Cards>
        <CardFront>
          <FrontCardHeader>
            <img href={""} alt="Logo Front" />
            <FrontTitle>
              <FrontH2>
                <Dash></Dash>Front-End
              </FrontH2>
              <FrontH3>{`React & JavaScript`}</FrontH3>
            </FrontTitle>
          </FrontCardHeader>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </CardFront>
        <CardBack>
          <BackCardHeader>
            <img href={""} alt="Logo Back" />
            <BackTitle>
              <BackH2>
                <Dash></Dash>Back-End
              </BackH2>
              <BackH3>{`Node.js & Express`}</BackH3>
            </BackTitle>
          </BackCardHeader>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </CardBack>
      </Cards>
    </GlobalDiv>
  );
};

export default Card;
