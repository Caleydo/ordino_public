import { OrdinoFooter } from 'ordino';
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { DevelopedByAffiliations } from '../pages/components/DevelopedByAffiliations';
import { OrdinoHelpSection } from '../pages/components/OrdinoHelpSection';
// TODO: fix when replacing scrollspy
export default function HelpTab() {
    return React.createElement(React.Fragment, null,
        React.createElement(BrowserRouter, { basename: "/#" },
            React.createElement(OrdinoHelpSection, null),
            React.createElement(DevelopedByAffiliations, null),
            React.createElement(OrdinoFooter, { openInNewWindow: true })));
}
//# sourceMappingURL=HelpTab.js.map