import React from "react";
import styled from "styled-components";

import CardContact from "./CardContact";
import { contactArray } from "../../constants";

const CardH1 = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90px;
  color: #ffffff;
  font-size: 50px;
  font-family: Recoleta;
  margin-bottom: 30px;
`;
const Cards = styled.div`
  display: flex;
  justify-content: center;
  > :last-child {
    margin-left: 100px;
  }
  color: #ffffff;
`;

const Contact = () => {
  return (
    <section id="contact">
      <CardH1 id>Entrons en contact</CardH1>
      <Cards>
        {contactArray.map((contact, index) => (
          <CardContact key={index} contact={contact} />
        ))}
      </Cards>
    </section>
  );
};

export default Contact;
