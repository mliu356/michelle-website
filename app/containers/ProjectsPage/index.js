/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import styled from 'styled-components';
import H1 from 'components/H1';
import messages from './messages';
import heart from 'images/yellow_heart_clear.png';
import ProjectCard from './ProjectCard';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  padding-top: 32px;
  padding-bottom: 8px;
  display: inline-flex;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 56px;
  color: #000000;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
`;

const Text = styled.div`
  padding: 2px 0px;
  display: inline-flex;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: normal;
  font-size: 28px;
  color: #000000;
`;

export default function ProjectsPage() {
  const projectContent = [
    { 
      key: 0,
      name: "Project1",
      content: "Project1 content",
      image: heart
    },
    {
      key: 1,
      name: "Project2",
      content: "Project2 content",
      image: heart
    }
  ]

  return (
    <div>
      <Container>
        <Title>my projects</Title>
        <Text>here is everything i've ever done lmao...</Text>
      </Container>
      {/* <H1>
        <FormattedMessage {...messages.title} />
      </H1>
      {projectContent.map((project) => <ProjectCard content={project.content} key={project.key} />)} */}
    </div>
  );
}
