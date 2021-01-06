import React, { useEffect, useState } from "react";
import styled from "styled-components";
import headLogo from "../assets/logos/head.png";
import surprisedLogo from "../assets/logos/surprised.png";

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
  const [showSuprisedFace, setShowSuprisedFace] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= window.innerHeight - 200) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    });
    document.getElementById(() => {});
  });
  return (
    <Nav showNav={showNav}>
      <Link href="#main">
        <img
          src={showSuprisedFace ? surprisedLogo : headLogo}
          alt="Logo de Florian Poux"
          onMouseEnter={() => setShowSuprisedFace(true)}
          onMouseLeave={() => setShowSuprisedFace(false)}
        />
      </Link>
    </Nav>
  );
};

export default Header;
