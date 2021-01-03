import React from "react";
import styled from "styled-components";

import ProjectCard from "./ProjectCard";
import { projectArray } from "../../constants";

const Wrapper = styled.section``;
const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90px;
  color: #ffffff;
  font-size: 50px;
  font-weight: normal;
  font-family: Recoleta;
  margin-bottom: 30px;
`;
const Cards = styled.div`
  color: #ffffff;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Projects = () => {
  return (
    <Wrapper>
      <Title>Projets</Title>
      <Cards>
        {projectArray.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </Cards>
    </Wrapper>
  );
};

export default Projects;
