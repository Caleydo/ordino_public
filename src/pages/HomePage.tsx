import * as React from 'react';
import {OrdinoHero} from './components/OrdinoHero';
import {GettingStarted} from './components/GettingStarted';
import {DevelopedByAffiliations} from './components/DevelopedByAffiliations';
import {OrdinoFooter} from 'ordino';
import {OrdinoTeaserCards} from './components/OrdinoTeaserCards';

export function HomePage() {

  return (
    <>
      <OrdinoHero></OrdinoHero>
      <div className="ordino-getting-started-wrapper">
        <GettingStarted></GettingStarted>
        <hr className="m-0" />
        <div className="py-6">
        <DevelopedByAffiliations></DevelopedByAffiliations>
        </div>
      </div>
      <OrdinoTeaserCards></OrdinoTeaserCards>
      <OrdinoFooter testId="homepage"></OrdinoFooter>
    </>
  );
}
