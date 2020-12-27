/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import styled from 'styled-components';
import ProjectsPage from 'containers/ProjectsPage/Loadable';

import GTCrop1 from 'images/gt_crop1.jpg';
import BogCrop from 'images/bog_crop.png';
import GTGamenite from 'images/gt_gamenite.png';
import GTGrad from 'images/gt_grad_crop.png';

const SplashContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // background-color: #e3e3e3;
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

const CardRow = styled.div`
  // border: 1px solid red;
  flex-direction: row;
  display: inline-flex;
  width: 100%;
  justify-content: space-between;
  margin: 0.5em 0em;
`;

const Card = styled.div`
  border: 1px solid black;
  border-radius: 8px;
  flex-direction: column;
  margin: 4px;
  display: block;
  overflow: hidden;
`;

const CardImage = styled.img`
  // border: 1px dotted blue;
  padding: 10% 7.5% 4% 7.5%;
  width: 100%;
  background-color: #e6e6e6;
`;

const CardTextContainer = styled.div`
  // border: 1px dotted blue;
  width: 100%;
  padding-top: 30%;
  position: relative;
`;

const CardText = styled.div`
  position: absolute;
  padding: 8px;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  // font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  // font-size: 14px;
  font-family: monospace;
  font-size: 12px;
  font-weight: 400;
  
  text-align: center;
  // overflow: scroll;
`;

const GridSpace = styled.div`
  // border: 1px solid black;
  width: 100%;
`;

function PolaroidCard(props) {
  return <GridSpace>
    <Card>
      <CardImage src={props.image}/>
      <CardTextContainer>
        <CardText>{props.content}</CardText>
      </CardTextContainer>
    </Card>
  </GridSpace>
}

export default function HomePage() {
  const cardElements = [
    {
      content: 'Aug 2017: My CS journey began at Georgia Tech where I learned how to make the most of my opportunities, how to grind, and how to never give up.', 
      image: GTGamenite
    }, 
    {
      content: 'Aug 2018 - May 2020: Served as Director of Operations of Bits of Good (a nonprofit CS student org), TA-d for Database Systems, and found sisterhood @ Kappa Alpha Theta!', 
      image: BogCrop}, 
    {
      content: 'Google internship', 
      image: GTCrop1
    }, 
    {
      content: 'Facebook internship', 
      image: GTCrop1}, 
    {
      content: 'May 2020: Graduated with highest honors! Incredibly grateful for the opportunities to grow, lead, and serve alongside inspiring peers and professors #gojackets', 
      image: GTGrad},
    {
      content: 'Sept 2020: Started my MS in CS at Stanford, specializing in AI. Ask me about my research within the Sustain Lab or my independent project with the d.school!', 
      image: GTCrop1},
  ];

  return (
    <SplashContainer>
        <Title>my journey</Title>
        {/* <Text>how I ended up a smol fish in a big, big pond... </Text> */}

        <CardRow>
          {cardElements.slice(0, 3).map((value, index) => {
            return <PolaroidCard key={index} heading={value.heading} content={value.content} image={value.image}/>;
          })}
        </CardRow>
        <CardRow>
          {cardElements.slice(3, 6).map((value, index) => {
            return <PolaroidCard key={index} heading={value.heading} content={value.content} image={value.image}/>;
          })}
        </CardRow>

        <ProjectsPage/>
    </SplashContainer>
  );
};
