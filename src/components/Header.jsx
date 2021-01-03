import React from "react";
import styled from "styled-components";
import headLogo from "../assets/logos/head.png";

const Nav = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 64px;
  background: #232233;
`;
const Img = styled.img`
  position: absolute;
`;

const Header = () => {
  return (
    <Nav>
      <Img src={headLogo} alt="Logo de Florian Poux" />
    </Nav>
  );
};

export default Header;
