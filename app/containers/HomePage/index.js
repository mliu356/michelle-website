/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import Img from 'components/Img';
import H1 from 'components/H1';
import H3 from 'components/H3';
import ColumnContainer from './ColumnContainer';
import Section from './Section';
import messages from './messages';
import MichelleHeadshot from 'images/michelle_gt_sitting.jpg';

export default function HomePage() {
  return (
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="Home page and landing page"
        />
      </Helmet>
      <ColumnContainer>
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
        <Section>
          <Img src={MichelleHeadshot} alt="Michelle headshot">
              
          </Img>
        </Section>
      </ColumnContainer>
    </article>
  );
};
