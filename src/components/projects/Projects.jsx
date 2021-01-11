import React from "react";
import styled from "styled-components";

import ProjectCard from "./ProjectCard";
import { projectArray } from "../../constants";
import Title from "../common/Title";
import Section from "../common/Section";

const Wrapper = styled(Section)`
  height: auto;
`;

const Cards = styled.div`
  color: #ffffff;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  > a {
    margin: 0 40px;
  }
`;

const Projects = () => {
  return (
    <Wrapper>
      <Title>Projets</Title>
      <Cards>
        {projectArray.map((project, index) => (
          <ProjectCard key={`project_${index}`} project={project} />
        ))}
      </Cards>
    </Wrapper>
  );
};

export default Projects;
