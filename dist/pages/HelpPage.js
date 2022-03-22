import * as React from 'react';
import { HeaderNavigation, OrdinoFooter, useScrollToSlug } from 'ordino';
import { OrdinoHelpSection } from './components/OrdinoHelpSection';
export function HelpPage() {
    useScrollToSlug();
    return (React.createElement(React.Fragment, null,
        React.createElement(HeaderNavigation, null),
        React.createElement("div", { className: "container-fluid ordino-help-page h-100 position-relative pt-6", "data-testid": "helppage" },
            React.createElement(OrdinoHelpSection, null,
                React.createElement(OrdinoFooter, { testid: "help-page" })))));
}
//# sourceMappingURL=HelpPage.js.map