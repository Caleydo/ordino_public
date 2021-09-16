import * as React from 'react';
import {HeaderNavigation, OrdinoFooter} from 'ordino';

export function Error404Page() {
  const testId = 'errorpage';
  return (
    <>
      <HeaderNavigation testId={testId} />
      <div className="container">
        <div className="row">
          <div className="col position-relative"><h2>Page Not Found</h2></div>
        </div>
      </div>
      <OrdinoFooter testId={testId}></OrdinoFooter>
    </>
  );
}
