import * as React from 'react';
import { OrdinoFooter } from 'ordino';
import { OrdinoHero } from './components/OrdinoHero';
import { GettingStarted } from './components/GettingStarted';
import { DevelopedByAffiliations } from './components/DevelopedByAffiliations';
import { OrdinoTeaserCards } from './components/OrdinoTeaserCards';

export function HomePage() {
  return (
    <>
      <OrdinoHero />
      <div className="ordino-getting-started-wrapper">
        <GettingStarted />
        <hr className="m-0" />
        <div className="py-6">
          <DevelopedByAffiliations />
        </div>
      </div>
      <OrdinoTeaserCards />
      <OrdinoFooter testId="homepage" />
    </>
  );
}
