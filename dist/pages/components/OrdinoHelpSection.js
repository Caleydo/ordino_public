import React from 'react';
import { DisclaimerCard } from './DisclaimerCard';
import { OrdinoContactForm } from './OrdinoContactForm';
import { VideoCard } from './VideoCard';
import { OrdinoScrollspy, OrdinoScrollspyItem } from 'ordino';
import { SourceCodeCard } from './SourceCodeCard';
import { TermsOfUseCard } from './TermsOfUseCard';
import { DevelopedByAffiliations } from './DevelopedByAffiliations';
const cards = [
    {
        id: 'ordino-at-a-glance',
        name: 'Ordino at a glance',
        icon: 'fas fa-mountain',
        factory: (props) => React.createElement(VideoCard, Object.assign({}, props))
    },
    {
        id: 'team',
        name: 'Team',
        icon: 'fas fa-users',
        factory: () => React.createElement("div", { className: "card shadow-sm p-5" },
            React.createElement("div", { className: "card-body" },
                React.createElement(DevelopedByAffiliations, null)))
    },
    {
        id: 'contact-us',
        name: 'Contact us',
        icon: 'fas fa-at',
        factory: ({ testId }) => React.createElement(OrdinoContactForm, { testId: testId })
    },
    {
        id: 'disclaimer',
        name: 'Disclaimer',
        icon: 'fas fa-exclamation-triangle',
        factory: ({ testId }) => React.createElement(DisclaimerCard, { testId: testId })
    },
    {
        id: 'terms-of-use',
        name: 'Terms of use',
        icon: 'fas fa-smile',
        factory: () => React.createElement(TermsOfUseCard, null)
    },
    {
        id: 'source-code-licenses',
        name: 'Source code',
        icon: 'fas fa-code',
        factory: () => React.createElement(SourceCodeCard, null)
    },
];
export function OrdinoHelpSection(props) {
    const testId = props.testId ? `${props.testId}-helpsection` : 'helptab-helpsection';
    return (React.createElement(React.Fragment, null,
        React.createElement(OrdinoScrollspy, { items: cards.map((item) => ({ id: item.id, name: item.name })), testId: testId }, (handleOnChange) => React.createElement(React.Fragment, null,
            React.createElement("div", { className: "container pb-6" },
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col" }, cards.map((item, index) => {
                        return (
                        // `id` attribute must match the one in the scrollspy
                        React.createElement(OrdinoScrollspyItem, { className: "pt-6", id: item.id, key: item.name, index: index, handleOnChange: handleOnChange },
                            React.createElement(React.Fragment, null,
                                React.createElement("h4", { className: "text-start  mt-2 mb-3" },
                                    React.createElement("i", { className: `me-2 ordino-icon-2 ${item.icon}` }),
                                    " ",
                                    item.name),
                                React.createElement(item.factory, Object.assign({}, { openInNewWindow: props.openInNewWindow, testId })))));
                    })))),
            props.children))));
}
//# sourceMappingURL=OrdinoHelpSection.js.map