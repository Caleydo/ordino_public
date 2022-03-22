import React from 'react';
import { OrdinoScrollspy, OrdinoScrollspyItem } from 'ordino';
import { DisclaimerCard } from './DisclaimerCard';
import { OrdinoContactForm } from './OrdinoContactForm';
import { VideoCard } from './VideoCard';
import { SourceCodeCard } from './SourceCodeCard';
import { TermsOfUseCard } from './TermsOfUseCard';
import { DevelopedByAffiliations } from './DevelopedByAffiliations';
const cards = [
    {
        id: 'ordino-at-a-glance',
        name: 'Ordino at a glance',
        icon: 'fas fa-mountain',
        factory: (props) => React.createElement(VideoCard, { ...props }),
    },
    {
        id: 'team',
        name: 'Team',
        icon: 'fas fa-users',
        factory: () => (React.createElement("div", { className: "card shadow-sm p-5" },
            React.createElement("div", { className: "card-body" },
                React.createElement(DevelopedByAffiliations, null)))),
    },
    {
        id: 'contact-us',
        name: 'Contact us',
        icon: 'fas fa-at',
        factory: () => React.createElement(OrdinoContactForm, null),
    },
    {
        id: 'disclaimer',
        name: 'Disclaimer',
        icon: 'fas fa-exclamation-triangle',
        factory: () => React.createElement(DisclaimerCard, null),
    },
    {
        id: 'terms-of-use',
        name: 'Terms of use',
        icon: 'fas fa-smile',
        factory: (props) => React.createElement(TermsOfUseCard, { ...props }),
    },
    {
        id: 'source-code-licenses',
        name: 'Source code',
        icon: 'fas fa-code',
        factory: () => React.createElement(SourceCodeCard, null),
    },
];
export function OrdinoHelpSection(props) {
    return (React.createElement(OrdinoScrollspy, { items: cards.map((item) => ({ id: item.id, name: item.name })) }, (handleOnChange) => (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "container pb-6", "data-testid": "helpsection" },
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
                            React.createElement(item.factory, { ...{ openInNewWindow: props.openInNewWindow } }))));
                })))),
        props.children))));
}
//# sourceMappingURL=OrdinoHelpSection.js.map