import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import messages from './messages';

function Header() {
  return (
    <div>
      <NavBar>
        <HeaderLink to="/">
          <FormattedMessage {...messages.michelle} />
        </HeaderLink>
        <HeaderLink to="/work">
          <FormattedMessage {...messages.projects} />
        </HeaderLink>
        {/* <HeaderLink to="/template">
          <FormattedMessage {...messages.template} />
        </HeaderLink> */}
        <HeaderLink to="/features">
          <FormattedMessage {...messages.features} />
        </HeaderLink>
      </NavBar>
    </div>
  );
}

export default Header;
