import * as React from 'react';
import { HeaderNavigation, OrdinoFooter, useScrollToSlug } from 'ordino';
import { OrdinoHelpSection } from './components/OrdinoHelpSection';

export function HelpPage() {
  useScrollToSlug();

  return (
    <>
      <HeaderNavigation />
      <div className="container-fluid ordino-help-page h-100 position-relative pt-6">
        <OrdinoHelpSection>
          <OrdinoFooter />
        </OrdinoHelpSection>
      </div>
    </>
  );
}
