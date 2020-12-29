import React from "react";
import styled from "styled-components";

import notificationLogo from "../assets/notification.png";

const FirstDiv = styled.div`
  position: fixed;
  z-index: 2;
  bottom: 0;
  right: 0;
`;

const BackgroundLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 20px;
  width: 62px;
  height: 62px;
  border-radius: 31px;
  background-color: #e5e5e5;
`;
const Pellet = styled.div`
  position: absolute;
  left: 66%;
  top: 0%;
  height: 16px;
  width: 16px;
  border-radius: 8px;
  background-color: #f86770;
`;

const Notification = () => {
  return (
    <FirstDiv>
      <BackgroundLogo>
        <Pellet />
        <img src={notificationLogo} alt="Logo des notifications" />
      </BackgroundLogo>
    </FirstDiv>
  );
};

export default Notification;
