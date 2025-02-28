/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import SplashPage from 'containers/SplashPage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import ProjectsPage from 'containers/ProjectsPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Headshot from 'images/grad_horiz_headshot.jpg';
import NavBackground from 'images/header-background.png';

import GlobalStyle from '../../global-styles';

const BackgroundImage = styled.div`
  background-image: url(${Headshot});
  background-size: cover;
  background-position: top;
  min-height: 100%;
`;

const AppWrapper = styled.div`
  max-width: calc(1000px + 48px * 2);
  margin: 0 auto;
  display: flex;
  // min-height: 100%;
  padding: 0 48px;
  flex-direction: column;
`;

const BackgroundColor = styled.div`
  background-color: #e3e3e3;
  min-height: 100%;
`;

const NavBarBackground = styled.div`
  text-align: center;
  background-image: url(${NavBackground});
  background-size: cover;
  background-position: top;
`;

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" >
          <BackgroundImage>
            <Header/>
            <AppWrapper>
              <SplashPage/>
              <GlobalStyle />
            </AppWrapper>
          </BackgroundImage>
          <AppWrapper>
            <HomePage/>
          </AppWrapper>
        </Route>
        <Route path="">
          <BackgroundColor>
            <NavBarBackground>
              <Header/>
            </NavBarBackground>
            <AppWrapper>
              <Switch>
                <Route path="/work" component={ProjectsPage} />
                <Route path="/features" component={FeaturePage} />
                <Route path="" component={NotFoundPage} />
              </Switch>
              <GlobalStyle />
            </AppWrapper>
          </BackgroundColor>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}
