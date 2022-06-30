import * as React from 'react';
import { HeaderNavigation, OrdinoFooter, useScrollToSlug } from 'ordino';
import { OrdinoHelpSection } from './components/OrdinoHelpSection';

export function HelpPage() {
  useScrollToSlug();

  return (
    <>
      <HeaderNavigation />
      <div className="container-fluid ordino-help-page h-100 position-relative pt-6" data-testid="help-page">
        <OrdinoHelpSection>
          <OrdinoFooter testid="help-page" />
        </OrdinoHelpSection>
      </div>
    </>
  );
}
