import * as React from 'react';
import {HeaderNavigation, OrdinoFooter} from 'ordino';
import {headerNavigationLinks} from './config';

export function Error404Page() {
  return (
    <>
      <HeaderNavigation links={headerNavigationLinks} />
      <div className="container">
        <div className="row">
          <div className="col position-relative"><h2>Page Not Found</h2></div>
        </div>
      </div>
      <OrdinoFooter></OrdinoFooter>
    </>
  );
}
