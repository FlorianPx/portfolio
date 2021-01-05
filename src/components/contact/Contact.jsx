import React from "react";
import styled from "styled-components";

import CardContact from "./CardContact";
import { contactArray, devices } from "../../constants";
import Title from "../common/Title";
import Section from "../common/Section";

const Wrapper = styled(Section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  color: #ffffff;
  margin: 0 auto;

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

const Contact = () => {
  return (
    <Wrapper id="contact">
      <Title>Entrons en contact</Title>
      <Cards>
        {contactArray.map((contact, index) => (
          <CardContact key={index} contact={contact} />
        ))}
      </Cards>
    </Wrapper>
  );
};

export default Contact;
