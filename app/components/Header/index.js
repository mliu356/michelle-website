import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import HeaderLink from './HeaderLink';
import messages from './messages';

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
          <HeaderLink to="/features">
            <FormattedMessage {...messages.features} />
          </HeaderLink>
        </RightNav>
      </TextLayout>
    </HeaderContainer>
  </div>;
}

export default Header;
