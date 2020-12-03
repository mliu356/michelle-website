import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from 'components/A';
import CenteredSection from 'components/CenteredSection';
import LocaleToggle from 'containers/LocaleToggle';
import Wrapper from './Wrapper';
import messages from './messages';

function Footer() {
  return (
    <Wrapper>
      <CenteredSection>
        <FormattedMessage
          {...messages.developerMessage}
          values={{
            author: <A href="https://github.com/mliu356" target="_blank">Michelle Liu</A>,
          }}
        />
        
      </CenteredSection>
      {/* <section>
        <FormattedMessage {...messages.licenseMessage} />
      </section>
      <section>
        <LocaleToggle />
      </section>
      <section>
        <FormattedMessage
          {...messages.authorMessage}
          values={{
            author: <A href="https://twitter.com/mxstbr">Max Stoiber</A>,
          }}
        />
      </section> */}
    </Wrapper>
  );
}

export default Footer;
