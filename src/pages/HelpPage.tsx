import * as React from 'react';
import {HeaderNavigation, OrdinoFooter} from 'ordino';
import {DevelopedByAffiliations} from './components/DevelopedByAffiliations';
import {OrdinoHelpSection} from './components/OrdinoHelpSection';


export function HelpPage() {
  return (
    <>
      <HeaderNavigation fixed="top" />
      <OrdinoHelpSection />
      <DevelopedByAffiliations />
      <OrdinoFooter />
    </>
  );
}
