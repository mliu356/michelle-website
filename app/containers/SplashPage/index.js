/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaAngleDoubleDown } from 'react-icons/fa'

import { Helmet } from 'react-helmet';

const EmptyImageContainer = styled.div`
  min-height: 700px;
  height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  padding-top: 48px;
  display: inline-flex;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 56px;
  color: #fff;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  text-shadow: 2px 2px 8px #696969;
`;

const Subtitle = styled.div`
  padding-left: 2px;
  display: inline-block;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: normal;
  font-size: 28px;
  color: #fff;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  text-shadow: 2px 2px 8px #292929;
`;

const IconAnimation = styled.div`
  color: #ffffff;
  font-size: 28px;
`;

export default function SplashPage() {
  return (
    <div>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="Home page and landing page"
        />
      </Helmet>
      <EmptyImageContainer>
        <Title>hey there, i'm michelle.</Title>
        <Subtitle>thanks for stopping by :)</Subtitle>
        <IconAnimation>
          <FaAngleDoubleDown/>
        </IconAnimation>
      </EmptyImageContainer>
      {/* {AboutSection} */}
    </div>
  );
};
