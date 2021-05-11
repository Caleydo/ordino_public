import * as React from 'react';
import { HeaderNavigation, OrdinoFooter } from 'ordino';
import { DevelopedByAffiliations } from './components/DevelopedByAffiliations';
import { OrdinoHelpSection } from './components/OrdinoHelpSection';
import { Container } from 'react-bootstrap';
export function HelpPage() {
    return (React.createElement(React.Fragment, null,
        React.createElement(HeaderNavigation, null),
        React.createElement(Container, { fluid: true, className: "ordino-help-page h-100 position-relative pt-5" },
            React.createElement(OrdinoHelpSection, null,
                React.createElement(DevelopedByAffiliations, null),
                React.createElement(OrdinoFooter, null)))));
}
//# sourceMappingURL=HelpPage.js.map