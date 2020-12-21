/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import styled from 'styled-components';
import ProjectsPage from 'containers/ProjectsPage/Loadable';

const SplashContainer = styled.div`
  display: flex;
  flex-direction: column;
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

export default function SplashPage() {
  return (
    <SplashContainer>
        <Title>my journey</Title>
        <Text>how I ended up a smol fish in a big, big pond... </Text>
        <ProjectsPage/>
    </SplashContainer>
  );
};
