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
  text-transform: uppercase;
  font-weight: normal;
  margin: 0;
`;
const LinkGroup = styled.div`
  display: flex;
`;
const Link = styled.a`
  display: flex;
  align-items: center;
  ${({ isLastChild }) => !isLastChild && "margin-right: 20px;"}
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
      <LinkGroup>
        {contact.items.map((item, index) => (
          <Link
            href={item.url}
            isLastChild={contact.items.length === index + 1}
          >
            <Img src={item.logo} />
            {item.title}
          </Link>
        ))}
      </LinkGroup>
    </Wrapper>
  );
};

export default CardContact;
