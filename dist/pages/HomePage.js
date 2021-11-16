import * as React from 'react';
import { OrdinoHero } from './components/OrdinoHero';
import { GettingStarted } from './components/GettingStarted';
import { DevelopedByAffiliations } from './components/DevelopedByAffiliations';
import { OrdinoFooter } from 'ordino';
import { OrdinoTeaserCards } from './components/OrdinoTeaserCards';
export function HomePage() {
    const testId = 'homepage';
    return (React.createElement(React.Fragment, null,
        React.createElement(OrdinoHero, { testId: testId }),
        React.createElement("div", { className: "ordino-getting-started-wrapper" },
            React.createElement(GettingStarted, { testId: testId }),
            React.createElement("hr", { className: "m-0" }),
            React.createElement("div", { className: "py-6" },
                React.createElement(DevelopedByAffiliations, { testId: testId }))),
        React.createElement(OrdinoTeaserCards, { testId: testId }),
        React.createElement(OrdinoFooter, { testId: testId })));
}
//# sourceMappingURL=HomePage.js.map