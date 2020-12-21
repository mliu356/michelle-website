import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import HeaderLink from './HeaderLink';
import HeaderExLink from './HeaderExLink';
import messages from './messages';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const TextLayout = styled.div`
  padding: 0 48px;
  width: calc(1000px + 48px * 2);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const LeftNav = styled.div`
  margin-left: -16px;
  text-align: left;
  display: flex;
`;

const RightNav = styled.div`
  margin-right: -16px;
  text-align: right;
  display: flex;
`;

function Header() {
  return <div>
    <HeaderContainer>
      <TextLayout>
        <LeftNav>
          <HeaderLink to="/">
            <FormattedMessage {...messages.michelle} />
          </HeaderLink>
        </LeftNav>
        <RightNav>
          <HeaderLink to="/work">
            <FormattedMessage {...messages.projects} />
          </HeaderLink>
          <a href="http://github.com/mliu356" target="_">
            <HeaderExLink>
              <FaGithub/>
            </HeaderExLink>
          </a>
          <a href="https://www.linkedin.com/in/mliu356/" target="_">
            <HeaderExLink>
              <FaLinkedin/>
            </HeaderExLink>
          </a>
          <a href="mailto:mliu356@stanford.edu" target="_">
            <HeaderExLink>
              <FaEnvelope/>
            </HeaderExLink>
          </a>
        </RightNav>
      </TextLayout>
    </HeaderContainer>
  </div>;
}

export default Header;
