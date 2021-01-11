import React from "react";
import Card from "./Card";

import styled from "styled-components";
import { cardArray, devices } from "../../constants";
import Title from "../common/Title";
import Section from "../common/Section";

const Cards = styled.div`
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > :last-child {
    margin-left: 0;
    margin-top: 20px;
  }

  @media screen and (min-width: ${devices.tablet}px) {
    flex-direction: row;
    > :last-child {
      margin-left: 80px;
      margin-top: 0;
    }
  }
`;

const Skills = () => {
  return (
    <Section>
      <Title>Compétences</Title>
      <Cards>
        {cardArray.map((card, index) => (
          <Card key={`skill_${index}`} card={card} />
        ))}
      </Cards>
    </Section>
  );
};

export default Skills;
