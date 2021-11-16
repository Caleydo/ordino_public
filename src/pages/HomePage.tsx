import * as React from 'react';
import {OrdinoHero} from './components/OrdinoHero';
import {GettingStarted} from './components/GettingStarted';
import {DevelopedByAffiliations} from './components/DevelopedByAffiliations';
import {OrdinoFooter} from 'ordino';
import {OrdinoTeaserCards} from './components/OrdinoTeaserCards';

export function HomePage() {
  const testId = 'homepage';

  return (
    <>
      <OrdinoHero testId={testId}></OrdinoHero>
      <div className="ordino-getting-started-wrapper">
        <GettingStarted testId={testId}></GettingStarted>
        <hr className="m-0" />
        <div className="py-6">
        <DevelopedByAffiliations testId={testId} ></DevelopedByAffiliations>
        </div>
      </div>
      <OrdinoTeaserCards testId={testId}></OrdinoTeaserCards>
      <OrdinoFooter testId={testId}></OrdinoFooter>
    </>
  );
}
