import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  color: ${({ color }) => color};
  display: flex;
  align-items: center;
  margin: 0;
`;
const Dash = styled.div`
  width: 45px;
  height: 2px;
  margin-right: 8px;
  background-color: ${({ color }) => color};
`;
const Subtitle = styled.h2`
  font-size: 16px;
  font-family: Roboto;
  text-transform: uppercase;
  font-weight: normal;
  margin: 0;
`;
const DivLink = styled.div`
  display: flex;
`;
const Link = styled.a`
  display: flex;
  align-items: center;
  margin-right: 20px;
  color: #ffffff;
  text-decoration: none;
`;
const Img = styled.img`
  margin: 10px 10px 10px 0;
`;

const CardContact = ({ contact }) => {
  return (
    <Wrapper>
      <Title color={contact.color}>
        <Dash color={contact.color} />
        <Subtitle>{contact.type}</Subtitle>
      </Title>
      <DivLink>
        {contact.items.map((item) => (
          <Link href={item.url}>
            <Img src={item.logo} />
            {item.title}
          </Link>
        ))}
      </DivLink>
    </Wrapper>
  );
};

export default CardContact;
