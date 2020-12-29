import React from "react";
import Card from "./Card";

import styled from "styled-components";
import { cardArray } from "../../constants";

const CardH1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90px;
  color: #ffffff;
  font-size: 40px;
  font-family: Recoleta;
  margin-bottom: 30px;
`;
const Cards = styled.div`
  color: #ffffff;
  display: flex;
  justify-content: space-around;
`;

const Skills = () => {
  return (
    <div>
      <CardH1>Compétences</CardH1>
      <Cards>
        {cardArray.map((card) => (
          <Card card={card} />
        ))}
      </Cards>
    </div>
  );
};

export default Skills;
