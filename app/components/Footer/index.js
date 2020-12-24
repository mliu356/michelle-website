import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import A from 'components/A';
import CenteredSection from 'components/CenteredSection';
import LocaleToggle from 'containers/LocaleToggle';
import messages from './messages';

const Wrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 3em 0;
  padding-top: 3em;
  // border-top: 1px solid #666;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
`;

function Footer() {
  return (
    <Wrapper>
      <CenteredSection>
        <FormattedMessage
          {...messages.developerMessage}
          values={{
            author: <A href="https://github.com/mliu356" target="_blank">michelle liu</A>,
          }}
        />
        
      </CenteredSection>
    </Wrapper>
  );
}

export default Footer;
