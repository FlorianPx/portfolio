import React from "react";
import styled from "styled-components";

import Logo from "../assets/logo.png";

const FirstDiv = styled.div`
  display: flex;
  height: 100%;
  margin: 0 6vw;
  align-items: center;
  justify-content: space-around;
`;

const HeadTitle = styled.p`
  font-family: Montserrat;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #9d67f8;
  margin: 0;
  display: flex;
  align-items: center;
  text-transform: uppercase;
`;

const HeadDiv = styled.div`
  width: 78px;
  height: 5px;
  margin-right: 8px;
  text-transform: uppercase;
  background-color: #9d67f8;
`;

const Title = styled.h1`
  font-family: Recoleta;
  font-weight: 500;
  font-size: 60px;
  line-height: 60px;
  color: #ffffff;
  margin: 0;
`;

const Paragraph = styled.p`
  font-family: SF Pro Text;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 22px;
  color: #d7cbff;
  margin-top: 8px;
  width: 482px;
`;

const Main = () => {
  return (
    <FirstDiv>
      <div>
        <HeadTitle>
          <HeadDiv> </HeadDiv>Florian Poux
        </HeadTitle>
        <Title>
          Hey ! Je m'appelle Florian,
          <br /> et je suis développeur front.
        </Title>
        <Paragraph>
          Étudiant React/Node.js à la Wild Code School de Bordeaux depuis
          septembre 2020.
        </Paragraph>
      </div>
      <img src={Logo} alt="Logo de Florian Poux" />
    </FirstDiv>
  );
};

export default Main;
