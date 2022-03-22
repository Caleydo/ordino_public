import * as React from 'react';
import { OrdinoFooter } from 'ordino';
import { OrdinoHero } from './components/OrdinoHero';
import { GettingStarted } from './components/GettingStarted';
import { DevelopedByAffiliations } from './components/DevelopedByAffiliations';
import { OrdinoTeaserCards } from './components/OrdinoTeaserCards';
export function HomePage() {
    return (React.createElement(React.Fragment, null,
        React.createElement(OrdinoHero, null),
        React.createElement("div", { className: "ordino-getting-started-wrapper" },
            React.createElement(GettingStarted, null),
            React.createElement("hr", { className: "m-0" }),
            React.createElement("div", { className: "py-6" },
                React.createElement(DevelopedByAffiliations, null))),
        React.createElement(OrdinoTeaserCards, null),
        React.createElement(OrdinoFooter, { testId: "homepage" })));
}
//# sourceMappingURL=HomePage.js.map