import React, { useEffect, useState } from "react";
import styled from "styled-components";
import headLogo from "../assets/logos/head.png";

const Nav = styled.div`
  position: fixed;
  display: flex;
  visibility: ${({ showNav }) => (showNav ? "visible" : "hidden")};
  opacity: ${({ showNav }) => (showNav ? "1" : "0")};
  transition: all 0.3s ease-in ${({ isClicked }) => (isClicked ? "0.2" : "0")}s;
  transition-property: opacity, visibility;
  justify-content: center;
  width: 100%;
  height: 64px;
  background: #232233;
`;
const Link = styled.a`
  position: absolute;
`;

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= window.innerHeight - 200) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    });
  });
  return (
    <Nav showNav={showNav}>
      <Link href="#main">
        <img src={headLogo} alt="Logo de Florian Poux" />
      </Link>
    </Nav>
  );
};

export default Header;
