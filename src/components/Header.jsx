import React from "react";
import styled from "styled-components";

const HeaderDiv = styled.div`
  display: flex;
`;

const Nav = styled.div`
  background: #232233;
  height: 10vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = () => {
  return (
    <HeaderDiv>
      <Nav>
        <img src="" alt="Logo de Florian Poux" />
      </Nav>
    </HeaderDiv>
  );
};

export default Header;
