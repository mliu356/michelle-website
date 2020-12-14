/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import styled from 'styled-components';

import { Helmet } from 'react-helmet';

const EmptyImageContainer = styled.div`
  min-height: 700px;
  height: 93vh;
`;

export default function HomePage() {
  return (
    <div>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="Home page and landing page"
        />
      </Helmet>
      <EmptyImageContainer/>

      {/* <ColumnContainer>
        <Section>
          <H1>
            <FormattedMessage {...messages.michelleTitle} />
          </H1>
          <H3>
            <FormattedMessage {...messages.bioMessage} />
          </H3>
          <p>
            <FormattedMessage 
              {...messages.introMessage}
              values={{
                item1: <Link to="/work">my favorite work</Link>,
                item2: <Link to="/about">my experiences</Link>,
                item3: <Link to="/misc">my random thoughts</Link>,
              }} />
          </p>
        </Section>
        <ImageContainer>
          <Img src={MichelleHeadshot} alt="Michelle headshot">
              
          </Img>
        </ImageContainer>
      </ColumnContainer> */}
    </div>
  );
};
