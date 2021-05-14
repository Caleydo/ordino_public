import * as React from 'react';
import { HeaderNavigation, OrdinoFooter, OrdinoScrollspy, OrdinoScrollspyItem } from 'ordino';
import cardImage from 'ordino_public/dist/assets/welcome-view-step2.png';
import { UniqueIdManager } from 'phovea_core';
const sections = [
    {
        name: 'Ordino 7.0.0',
        markup: () => (React.createElement("ul", { className: "list-unstyled" },
            React.createElement("li", null,
                "Improve usability of ranking views",
                React.createElement("br", null),
                React.createElement("ul", null,
                    React.createElement("li", null, "Dialogs, such as filter, provide a live preview"),
                    React.createElement("li", null, "Harmonize dialogs"),
                    React.createElement("li", null, "Collapse/Expand of groups is recorded in session history\""))),
            React.createElement("li", null,
                "Integration of Tourdino as ranking side panel",
                React.createElement("br", null),
                React.createElement("ul", null,
                    React.createElement("li", null, "Support statistical analysis"))),
            React.createElement("li", null,
                "Update to hg38 database",
                React.createElement("br", null)),
            React.createElement("li", null,
                "New scores",
                React.createElement("br", null),
                React.createElement("ul", null,
                    React.createElement("li", null, "Add cell line and tissue scores for HLA Type, MSI Status, and Mutational Burden"),
                    React.createElement("li", null, "Add cell line score PRISM drug screen"))),
            React.createElement("li", null,
                "New Ordino tours:",
                React.createElement("br", null),
                React.createElement("ul", null,
                    React.createElement("li", null, "Overview of Start Menu"),
                    React.createElement("li", null, "Adding Data Columns"))),
            React.createElement("li", null,
                "Improve support for Boolean columns in uploaded Excel files",
                React.createElement("br", null))))
    },
    {
        name: 'Ordino 6.0.0',
        markup: () => (React.createElement("ul", { className: "list-unstyled" },
            React.createElement("li", null, " LineUp v3.2"),
            React.createElement("li", null, "Add Matomo tracking"),
            React.createElement("li", null, "Updated internal and external detail views to latest genome build"),
            React.createElement("li", null, "Improved add column dropdown menu"),
            React.createElement("li", null, "Improved session loading / saving menu"),
            React.createElement("li", null, "Simplified data download dialog"),
            React.createElement("li", null, "Fixed filtering of missing values of numerical columns in LineUp cannot be undone"),
            React.createElement("li", null, "Remove surplus divider in user menu"),
            React.createElement("li", null, "When checking for browser compatibility, indicate that IE is not working"),
            React.createElement("li", null, "Add help text to \"Save List of Entities\" dialog"),
            React.createElement("li", null, "When uploading a dataset, DB columns cannot be added"),
            React.createElement("li", null, "Slim Ordino header does not look nice on hover"),
            React.createElement("li", null, "Rename \"RegExp\" into \"Use regular expressions\""),
            React.createElement("li", null, "Rename \"TPM\" to \"Normalized Gene Expression (TPM Values)\""),
            React.createElement("li", null, "Aggregated score: Comparison value should allow float numbers"),
            React.createElement("li", null, "When checking for browser compatibility, indicate that IE is not working")))
    },
    {
        name: 'Ordino 5.4.0',
        markup: () => (React.createElement("ul", { className: "list-unstyled" },
            React.createElement("li", null,
                "Improve usability of ranking views",
                React.createElement("br", null),
                React.createElement("ul", null,
                    React.createElement("li", null, "Dialogs, such as filter, provide a live preview"),
                    React.createElement("li", null, "Harmonize dialogs"),
                    React.createElement("li", null, "Collapse/Expand of groups is recorded in session history\""))),
            React.createElement("li", null,
                "Improve usability of ranking views",
                React.createElement("br", null),
                React.createElement("ul", null,
                    React.createElement("li", null, "Dialogs, such as filter, provide a live preview"),
                    React.createElement("li", null, "Harmonize dialogs"),
                    React.createElement("li", null, "Collapse/Expand of groups is recorded in session history\""))),
            React.createElement("li", null,
                "Improve usability of ranking views",
                React.createElement("br", null),
                React.createElement("ul", null,
                    React.createElement("li", null, "Dialogs, such as filter, provide a live preview"),
                    React.createElement("li", null, "Harmonize dialogs"),
                    React.createElement("li", null, "Collapse/Expand of groups is recorded in session history\"")))))
    },
    {
        name: 'Ordino 5.0.0',
        markup: () => (React.createElement("ul", { className: "list-unstyled" },
            React.createElement("li", null,
                "Improve usability of ranking views",
                React.createElement("br", null),
                React.createElement("ul", null,
                    React.createElement("li", null, "Dialogs, such as filter, provide a live preview"),
                    React.createElement("li", null, "Harmonize dialogs"),
                    React.createElement("li", null, "Collapse/Expand of groups is recorded in session history\""))),
            React.createElement("li", null,
                "Improve usability of ranking views",
                React.createElement("br", null),
                React.createElement("ul", null,
                    React.createElement("li", null, "Dialogs, such as filter, provide a live preview"),
                    React.createElement("li", null, "Harmonize dialogs"),
                    React.createElement("li", null, "Collapse/Expand of groups is recorded in session history\""))),
            React.createElement("li", null,
                "Improve usability of ranking views",
                React.createElement("br", null),
                React.createElement("ul", null,
                    React.createElement("li", null, "Dialogs, such as filter, provide a live preview"),
                    React.createElement("li", null, "Harmonize dialogs"),
                    React.createElement("li", null, "Collapse/Expand of groups is recorded in session history\"")))))
    },
];
export function NewsPage() {
    const suffix = React.useMemo(() => UniqueIdManager.getInstance().uniqueId(), []);
    return (React.createElement(React.Fragment, null,
        React.createElement(HeaderNavigation, null),
        React.createElement("div", { className: "position-relative pt-5" },
            React.createElement(OrdinoScrollspy, { items: sections.map((section, index) => ({ id: `card${index}_${suffix}`, name: section.name })) }, (handleOnChange) => React.createElement("div", null,
                React.createElement("div", { className: "container pb-10 pt-5" },
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col" }, sections.map((item, index) => {
                            return (
                            // `id` attribute must match the one in the scrollspy
                            React.createElement(OrdinoScrollspyItem, { className: "pt-3 pb-5", id: `card${index}_${suffix}`, key: item.name, index: index, handleOnChange: handleOnChange },
                                React.createElement("div", null,
                                    React.createElement("h4", { className: "text-left mt-2 d-flex align-items-center mb-3" },
                                        React.createElement("i", { className: "mr-2 ordino-icon-1 fas fa-chevron-circle-right" }),
                                        " ",
                                        item.name),
                                    React.createElement("div", { className: "card shadow-sm p-3 h-100" },
                                        React.createElement("div", { className: "card-body" },
                                            React.createElement("div", { className: "align-items-top row row-cols-xl-2 row-cols-lg-1" },
                                                React.createElement("div", { className: "col col-sm-7" }, item.markup()),
                                                React.createElement("div", { className: "col" },
                                                    React.createElement("img", { src: cardImage, className: "card-img img-fit", alt: "Card image" }))))))));
                        })))),
                React.createElement(OrdinoFooter, null))))));
}
//# sourceMappingURL=NewsPage.js.map