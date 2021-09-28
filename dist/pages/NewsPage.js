import * as React from 'react';
import { HeaderNavigation, OrdinoFooter, OrdinoScrollspy, OrdinoScrollspyItem, useScrollToSlug } from 'ordino';
import v700_tourdino from 'ordino_public/dist/assets/pages/news/v700_tourdino.jpg';
import v800_gene_signature from 'ordino_public/dist/assets/pages/news/v800_gene_signature.jpg';
import v800_annotation_column from 'ordino_public/dist/assets/pages/news/v800_annotation_column.png';
import v800_data_download from 'ordino_public/dist/assets/pages/news/v800_data_download.png';
import v900_homepage from 'ordino_public/dist/assets/pages/news/v900_homepage.png';
import v900_start_menu from 'ordino_public/dist/assets/pages/news/v900_start_menu.png';
import v900_start_menu_tabs from 'ordino_public/dist/assets/pages/news/v900_start_menu_tabs.png';
import v900_application_help from 'ordino_public/dist/assets/pages/news/v900_application_help.png';
import v900_ranking_redesign from 'ordino_public/dist/assets/pages/news/v900_ranking_redesign.png';
import v910_auto_complete from 'ordino_public/dist/assets/pages/news/v910_auto_complete.png';
import v910_usability_improvements from 'ordino_public/dist/assets/pages/news/v910_usability_improvements.png';
const sections = [
    {
        if: 'v9-1',
        name: 'Version 9.1 (2021-09-29)',
        markup: () => (React.createElement(React.Fragment, null,
            React.createElement("p", { className: "lead text-muted" },
                "This update contains various ",
                React.createElement("b", null, "usability improvements"),
                ", and several ",
                React.createElement("b", null, "bug fixes"),
                ". The most important changes are:"),
            React.createElement("h5", { className: "mt-4" }, "Usability improvements"),
            React.createElement("ul", null,
                React.createElement("li", null, "We have continued with our design and usability improvements of the whole application. The overall appearance of the application changed slightly. Additionally, the add column button is now more prominent and easier to find.")),
            React.createElement("img", { className: " img-fluid border border-gray-300", src: v910_usability_improvements, alt: "Usability Improvements" }),
            React.createElement("h5", { className: "mt-4" }, "Auto-complete when filtering text columns"),
            React.createElement("ul", null,
                React.createElement("li", null, "When filtering a text column, a list of items is now suggested while typing.")),
            React.createElement("img", { className: " img-fluid border border-gray-300", src: v910_auto_complete, alt: "Auto Complete" }),
            React.createElement("h5", { className: "mt-4" }, "Briefly noted"),
            React.createElement("ul", null,
                React.createElement("li", null, "Added scroll bars to dataset and session lists"),
                React.createElement("li", null, "Relative date was not correct for old sessions"),
                React.createElement("li", null, "Display list of uploaded data sets in reverse order"),
                React.createElement("li", null, "Side panel input field for filtering a text column lost focus while typing"),
                React.createElement("li", null, "Dialogs in rankings are now confirmed with click on background (previously it canceled the dialog)"),
                React.createElement("li", null, "Ranking: Display a dash (i.e., missing value indicator) for combined columns when at least one value of the nested columns is missing"))))
    },
    {
        id: 'v9-0',
        name: 'Version 9.0 (2021-07-12)',
        markup: () => (React.createElement(React.Fragment, null,
            React.createElement("p", { className: "lead text-muted" },
                "This update contains a ",
                React.createElement("b", null, "whole new homepage"),
                ", ",
                React.createElement("b", null, "start menu"),
                ", and various ",
                React.createElement("b", null, "usability improvements"),
                "."),
            React.createElement("h4", { className: "my-4" }, "Hello Ordino! \uD83D\uDC4B"),
            React.createElement("p", null, "With this release we provide a dedicated homepage for Ordino to welcome new and recurring users. The modern pages provide an overview of the Ordino features, loaded datasets, and publications. We also inform about the most recent changes and developments on this page."),
            React.createElement("img", { className: "img-fluid mb-4", src: v900_homepage, alt: "The new Ordino Hompage welcomes its user." }),
            React.createElement("p", null,
                "The application itself was moved to the ",
                React.createElement("a", { href: "./app", target: "_blank", rel: "noopener noreferrer" },
                    React.createElement("code", null, "/app"),
                    " directory"),
                ". Please update your bookmarks if you want to access Ordino directly and to skip the homepage."),
            React.createElement("h4", { className: "my-4" }, "Start menu overhaul"),
            React.createElement("p", null, "In addition to the new homepage we designed an entirely new Ordino start menu. The new start menu is divided into three main tabs: datasets, sessions, and tours. Each tab has now more space and is structured into different sections to select or upload datasets, save a session, or start a tour."),
            React.createElement("img", { className: "img-fluid mb-4", src: v900_start_menu, alt: "The new Ordino start menu." }),
            React.createElement("p", null, "From an analysis you can now directly access these tab from the application header."),
            React.createElement("img", { className: "img-fluid mb-4", src: v900_start_menu_tabs, alt: "Access the start menu tabs from the application header in your analysis." }),
            React.createElement("p", null, "In case you need help or want give feedback or report a bug, click on the ?-icon in the application header."),
            React.createElement("img", { className: "img-fluid mb-4", src: v900_application_help, alt: "Ordino at a glance integrated in the application." }),
            React.createElement("h4", { className: "my-4" }, "A new look"),
            React.createElement("p", null, "We have improved the design and usability of the whole application in general and the ranking views in specific to make the usage easier and more appealing."),
            React.createElement("img", { className: "img-fluid mb-4", src: v900_ranking_redesign, alt: "Face-lift of the ranking views and application user interface." })))
    },
    {
        id: 'v8-0',
        name: 'Version 8.0 (2021-03-24)',
        markup: () => (React.createElement(React.Fragment, null,
            React.createElement("p", { className: "lead text-muted" },
                "This update contains more ",
                React.createElement("b", null, "data"),
                ", various ",
                React.createElement("b", null, "usability improvements"),
                ", and several ",
                React.createElement("b", null, "bug fixes"),
                ". The most important changes are:"),
            React.createElement("h4", { className: "my-4" }, "New data"),
            React.createElement("h5", { className: "mt-4" }, "Gene Signature Scores"),
            React.createElement("ul", null,
                React.createElement("li", null,
                    React.createElement("i", null, "Gene Signature Scores"),
                    " are now available for cell lines and tissue samples (including GTEx, TCGA, and PDX models). These can be added using the ",
                    React.createElement("i", null, "Add Column"),
                    " dialog:")),
            React.createElement("img", { className: " img-fluid border border-gray-300", src: v800_gene_signature, alt: "Gene Signature Score" }),
            React.createElement("p", { className: "card-text mt-2" }, "Currently, the following gene signature scores are available:"),
            React.createElement("ul", null,
                React.createElement("li", null, "NIBR_IFN (Novartis 38 Gene Interferon activity signature)"),
                React.createElement("li", null, "MERCK18 (MERCK's 18 gene signature for PD1-inhibitor response)")),
            React.createElement("h4", { className: "my-4" }, "Usability improvements"),
            React.createElement("h5", { className: "mt-4" }, "Annotation columns"),
            React.createElement("ul", null,
                React.createElement("li", null, "It is now possible to add multiple \"Annotation Columns\" at once")),
            React.createElement("img", { className: "img-fluid border border-gray-300", src: v800_annotation_column, alt: "Annotation Column" }),
            React.createElement("h5", { className: "mt-4" }, "Data download"),
            React.createElement("ul", { className: "mt-2" },
                React.createElement("li", null, "The data download dialog has been improved")),
            React.createElement("img", { className: "img-fluid border border-gray-300", src: v800_data_download, alt: "Download Data" })))
    },
    {
        id: 'v7-0',
        name: 'Version 7.0 (2020-08-26)',
        markup: () => (React.createElement(React.Fragment, null,
            React.createElement("p", { className: "lead text-muted" },
                "This update contains more ",
                React.createElement("b", null, "data"),
                ", many ",
                React.createElement("b", null, "new features"),
                ", various ",
                React.createElement("b", null, "improvements"),
                ", and a large number of ",
                React.createElement("b", null, "bug fixes"),
                ". The most important changes are:"),
            React.createElement("h4", { className: "my-4" }, "New data"),
            React.createElement("h5", { className: "mt-4" }, "Database"),
            React.createElement("ul", null,
                React.createElement("li", null, "All data has be been updated from hg19 to hg38!")),
            React.createElement("h5", { className: "mt-4" }, "HLA-A type, Mutational Burden and MSI Status"),
            React.createElement("ul", null,
                React.createElement("li", null, "Now, HLA-A type, Mutational Burden and MSI Status data is available for many cell line and tissue samples."),
                React.createElement("li", null,
                    React.createElement("i", null, " How to access"),
                    ": Open a list of cell lines \t\u2192 click on \u201C+\u201D to open the \u201Cadd column\u201D dialog \t\u2192 select \"Annotation Columns\" \t\u2192 select the data of interest.")),
            React.createElement("h4", { className: "my-4" }, "Completely new features"),
            React.createElement("h5", { className: "mt-4" }, "Basic statistical analyses"),
            React.createElement("img", { className: "img-fluid mb-2", src: v700_tourdino, alt: "Tourdino" }),
            React.createElement("ul", null,
                React.createElement("li", null, "It is now possible to do basic statistical analyses, like calculating the correlation of two columns, directly in Ordino."),
                React.createElement("li", null,
                    React.createElement("i", null, "How to access"),
                    ": Click on the calculator icon on the right. This opens a new side-panel (highlighted in red in the screenshot above).",
                    React.createElement("br", null),
                    "There you can select which columns to compare and then get detailed information about the result.")),
            React.createElement("h4", { className: "my-4" }, "Improved features"),
            React.createElement("h5", { className: "mt-4" }, "Improved column operations (filtering, sorting, etc)"),
            React.createElement("ul", null,
                React.createElement("li", null,
                    React.createElement("i", null, "How to access"),
                    ": click on any of the icons in the column headers."),
                React.createElement("li", null, "The column dialogs were harmonized."),
                React.createElement("li", null, "There is now a live preview. For instance, if you modify the filter setting of a column, you can see in the background how this will affect your list of genes, cell lines, and tissue samples."),
                React.createElement("li", null,
                    "It is now possible to reset all filters at once in the right side-panel. ",
                    React.createElement("i", null, "Access side-panel by clicking on the left-facing arrow in the menu on the right"),
                    "."),
                React.createElement("li", null,
                    "The grouping of text columns (like mutations) is now working much better (e.g., allowing you to split your cell lines by specific mutations). ",
                    React.createElement("i", null, "How to access: click the \u201C\u2026\u201D in the column header and then select \u201CGroup By\u201D"),
                    ".")),
            React.createElement("h5", { className: "mt-4" }, "Interactive help tours"),
            React.createElement("ul", null,
                React.createElement("li", null, "To make it easier for new users to get to know Ordino, we also added two additional interactive help tours that guide you through the application."),
                React.createElement("li", null,
                    React.createElement("i", null, "These can be accessed by clicking on the \u201C?\u201D in the upper right corner of Ordino"),
                    ".")),
            React.createElement("h5", { className: "mt-4" }, "Briefly noted"),
            React.createElement("ul", null,
                React.createElement("li", null, "Improved look and feel of the list of cell lines, genes, and tissue samples."),
                React.createElement("li", null, "Collapsing and expanding of sample / gene groups is now recorded in the session history."),
                React.createElement("li", null, "The columns \"AA mutated\" and \"DNA mutated\" have been harmonized. There is now no category \"Unknown\" anymore, but missing values are handled the same way as in all other columns."),
                React.createElement("li", null, "File upload has been improved and now supports boolean (i.e., true/false) columns."))))
    },
    {
        id: 'v6-0',
        name: 'Version 6.0 (2019-10-14)',
        markup: () => (React.createElement(React.Fragment, null,
            React.createElement("p", { className: "lead text-muted" },
                "This update contains new ",
                React.createElement("b", null, "features"),
                ", various ",
                React.createElement("b", null, "improvements"),
                ", and many ",
                React.createElement("b", null, "bug fixes"),
                ". The most important changes are:"),
            React.createElement("h5", { className: "mt-4" }, "Session management"),
            React.createElement("ul", null,
                React.createElement("li", null, "There is now an Improved menu for saving and loading of analysis sessions."),
                React.createElement("li", null, "This menu is now called \"Analysis Session Management\" and is available in the upper right corner. Advanced session sharing possibilities have been added. It is now possible to share an analysis session with individual people or a group of people.")),
            React.createElement("h5", { className: "mt-4" }, "Session sharing"),
            React.createElement("ul", null,
                React.createElement("li", null, "Advanced session sharing possibilities have been added. It is now possible to share an analysis session with individual people or a group of people."),
                React.createElement("li", null, "To do so, click on \"Advanced\" in the \"Save Session\" menu. The same is now possible for sharing uploaded data sets.")),
            React.createElement("h5", { className: "mt-4" }, "Download data"),
            React.createElement("ul", null,
                React.createElement("li", null, "The \"Download Data\" menu has been simplified."))))
    },
    {
        id: 'v5-1',
        name: 'Version 5.1 (2018-12-05)',
        markup: () => (React.createElement(React.Fragment, null,
            React.createElement("p", { className: "lead text-muted" },
                "This update contains new ",
                React.createElement("b", null, "features"),
                ", ",
                React.createElement("b", null, "improvements"),
                ", and ",
                React.createElement("b", null, "bug fixes"),
                ". The most important changes are:"),
            React.createElement("h5", { className: "mt-4" }, "Briefly noted"),
            React.createElement("ul", null,
                React.createElement("li", null, "File upload is working again."),
                React.createElement("li", null, "The data up- and download now supports Excel files (*.xlsx)."),
                React.createElement("li", null,
                    "A guided tour explains the basic features of Ordino. You can start the tour by clicking on the '?' in the upper right corner.",
                    React.createElement("br", null),
                    "More detailed tours will follow. Let us know if you have specific wishes."),
                React.createElement("li", null, "You can now copy gene and cell line lists from almost everywhere (e.g., comma or line separated) and paste them into the text field on the welcome page."),
                React.createElement("li", null, "The overview mode (last button on the right site) is now working for very large lists."),
                React.createElement("li", null, "Spearman correlation computation has been added to the \"Co-expression\" Detail View."))))
    },
    {
        id: 'v5-0',
        name: 'Version 5.0 (2018-11-07)',
        markup: () => (React.createElement(React.Fragment, null,
            React.createElement("p", { className: "lead text-muted" },
                "This update contains more ",
                React.createElement("b", null, "data"),
                ", various ",
                React.createElement("b", null, "usability improvements"),
                ", and several ",
                React.createElement("b", null, "bug fixes"),
                ". The most important changes are:"),
            React.createElement("h5", { className: "mt-4" }, "Improved column headers and column menus"),
            React.createElement("ul", null,
                React.createElement("li", null, "Column headers start with gene/cell line name and information about data type."),
                React.createElement("li", null, "New filter and value mapping dialog for numeric columns (e.g., it is now possible to copy the value range from one column to another)."),
                React.createElement("li", null, "Extended coloring options for numeric columns.")),
            React.createElement("h5", { className: "mt-4" }, "Improved column sorting and grouping"),
            React.createElement("ul", null,
                React.createElement("li", null, "The order of multiple sorting/grouping columns can now be explicitly specified in the side panel on the right (can be opened by clicking on the arrow on the right)."),
                React.createElement("li", null, "The values of numeric columns can be grouped into an arbitrary number of bins."),
                React.createElement("li", null, "The values of text columns can now be grouped.")),
            React.createElement("h5", { className: "mt-4" }, " Improved aggregated columns"),
            React.createElement("ul", null,
                React.createElement("li", null, "Boxplot columns now show outliers."),
                React.createElement("li", null, "Heatmap columns now support mouse over to identify individual genes/cell lines/values."),
                React.createElement("li", null, "Heatmap columns now support complex color and value mapping.")),
            React.createElement("h5", { className: "mt-4" }, " Improved column types"),
            React.createElement("ul", null,
                React.createElement("li", null, "Chromosomes are now correctly sorted."),
                React.createElement("li", null, "Gene start and end coordinates are now numeric columns allowing correct sorting (can for instance be used to draw copy number profiles).")),
            React.createElement("h5", { className: "mt-4" }, " Improved performance"),
            React.createElement("ul", null,
                React.createElement("li", null, "The overview mode (last button on the right panel) is now faster and works even with a larger number of columns.")),
            React.createElement("h5", { className: "mt-4" }, " Improved user interface"),
            React.createElement("ul", null,
                React.createElement("li", null, "\"Add column\" menu simplified."),
                React.createElement("li", null, "Some features renamed to make it clearer what they do."),
                React.createElement("li", null, "A \"Submit Feedback\" button was added: By clicking on the button in the upper right corner (the life belt icon), you can easily provide feedback about Ordino (bug reports, features requests, etc).")),
            React.createElement("h5", { className: "mt-4" }, " Briefly noted"),
            React.createElement("ul", null,
                React.createElement("li", null,
                    React.createElement("p", null, " A few external detail views have been added.")),
                React.createElement("li", null,
                    React.createElement("p", null, " Extended \"Data download\" functionality.")))))
    }
];
export function NewsPage() {
    useScrollToSlug();
    return (React.createElement(React.Fragment, null,
        React.createElement(HeaderNavigation, null),
        React.createElement("div", { className: "position-relative py-6" },
            React.createElement(OrdinoScrollspy, { items: sections.map((section) => ({ id: section.id, name: section.name })) }, (handleOnChange) => React.createElement(React.Fragment, null,
                React.createElement("div", { className: "container pb-6" },
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col" }, sections.map((item, index) => {
                            return (
                            // `id` attribute must match the one in the scrollspy
                            React.createElement(OrdinoScrollspyItem, { className: "pt-6", id: item.id, key: item.name, index: index, handleOnChange: handleOnChange },
                                React.createElement(React.Fragment, null,
                                    React.createElement("h4", { className: "text-start mt-2 d-flex align-items-center mb-3" },
                                        React.createElement("i", { className: "me-2 ordino-icon-1 fas fa-chevron-circle-right" }),
                                        " ",
                                        item.name),
                                    React.createElement("div", { className: "card shadow-sm h-100" },
                                        React.createElement("div", { className: "card-body" }, item.markup())))));
                        })))),
                React.createElement(OrdinoFooter, null))))));
}
//# sourceMappingURL=NewsPage.js.map