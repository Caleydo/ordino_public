import * as React from 'react';
import {HeaderNavigation, OrdinoFooter} from 'ordino';
import {DevelopedByAffiliations} from './components/DevelopedByAffiliations';
import {OrdinoHelpSection} from './components/OrdinoHelpSection';
import {useScrollToSlug} from 'ordino';
import {headerNavigationLinks} from './config';

export function HelpPage() {
  useScrollToSlug();

  return (
    <>
      <HeaderNavigation links={headerNavigationLinks} />
      <div className="container-fluid ordino-help-page h-100 position-relative pt-6">
        <OrdinoHelpSection>
          <DevelopedByAffiliations />
          <OrdinoFooter />
        </OrdinoHelpSection>
      </div>
    </>
  );
}
