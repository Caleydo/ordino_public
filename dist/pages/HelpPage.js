import * as React from 'react';
import { HeaderNavigation, OrdinoFooter } from 'ordino';
import { DevelopedByAffiliations } from './components/DevelopedByAffiliations';
import { OrdinoHelpSection } from './components/OrdinoHelpSection';
import { useScrollToSlug } from 'ordino';
export function HelpPage() {
    const testId = 'help';
    useScrollToSlug();
    return (React.createElement(React.Fragment, null,
        React.createElement(HeaderNavigation, { testId: testId }),
        React.createElement("div", { className: "container-fluid ordino-help-page h-100 position-relative pt-6" },
            React.createElement(OrdinoHelpSection, { testId: testId },
                React.createElement(DevelopedByAffiliations, { testId: testId }),
                React.createElement(OrdinoFooter, { testId: testId })))));
}
//# sourceMappingURL=HelpPage.js.map