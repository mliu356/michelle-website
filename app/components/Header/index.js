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
  width: calc(1000px + 16px * 2);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const EmptyFlex = styled.div`
  width: calc(1000px + 16px * 2);
`;

const LeftNav = styled.div`
  text-align: left;
  display: flex;
`;

const RightNav = styled.div`
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
