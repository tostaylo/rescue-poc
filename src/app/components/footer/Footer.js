import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';
import {
  Footer as MDLFooter,
  FooterSection as MDLFooterSection,
  FooterLinkList as MDLFooterLinkList
} from 'react-mdl';

const Footer = () => {
  const footerNavList = [
    { to: '/privacy', id: <FormattedMessage id={'app.nav.privacy'} /> },
    { to: '/terms', id: <FormattedMessage id={'app.nav.terms'} /> }
  ].map(item => (
    <Link to={item.to} key={item.to}>
      {' '}
      {item.id}{' '}
    </Link>
  ));

  return (
    <div>
      <MDLFooter size="mini">
        <MDLFooterSection
          type="left"
          logo={<FormattedMessage id={'app.copyright'} />}
        />
        <MDLFooterSection type="right">
          <MDLFooterLinkList>{footerNavList}</MDLFooterLinkList>
        </MDLFooterSection>
      </MDLFooter>
    </div>
  );
};

export default Footer;
