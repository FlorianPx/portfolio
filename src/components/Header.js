import React from "react";
import styled from "styled-components";

const HeaderDiv = styled.div`
  display: none;
`;

const Nav = styled.div`
  background: #232233;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = () => {
  return (
    <HeaderDiv>
      <Nav>
        <button>Menu Burger</button>
        <img src="" alt="Logo de Florian Poux" />
        <button>Switch light/dark</button>
      </Nav>
    </HeaderDiv>
  );
};

export default Header;
