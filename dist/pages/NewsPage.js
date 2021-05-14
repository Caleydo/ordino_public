import * as React from 'react';
import { HeaderNavigation, OrdinoFooter } from 'ordino';
import gene_signature from 'ordino_public/dist/assets/pages/gene_signature.jpg';
import annotation_column from 'ordino_public/dist/assets/pages/annotation_column.png';
import data_download from 'ordino_public/dist/assets/pages/data_download.png';
import tourdino from 'ordino_public/dist/assets/pages/tourdino.jpg';
import { Link, Element } from 'react-scroll';
const sections = [
    {
        name: 'Version 8.0.0 (2021-03-24)',
        markup: () => (React.createElement(React.Fragment, null,
            React.createElement("p", { className: "card-text" },
                "This update contains more ",
                React.createElement("b", null, "data"),
                ", various ",
                React.createElement("b", null, "usability improvements"),
                ", and several ",
                React.createElement("b", null, "bug fixes"),
                ". The most important changes are:"),
            React.createElement("br", null),
            React.createElement("h5", { className: "card-title" }, "New Data"),
            React.createElement("ul", null,
                React.createElement("li", null,
                    React.createElement("p", { className: "card-text" },
                        React.createElement("i", null, "Gene Signature Scores"),
                        " are now available for cell lines and tissue samples (including GTEx, TCGA, and PDX models). These can be added using the ",
                        React.createElement("i", null, "Add Column"),
                        " dialog:"),
                    React.createElement("img", { className: "border border-ordino-gray-5", src: gene_signature, height: 350, alt: "Gene Signature Score" }),
                    React.createElement("p", { className: "card-text mt-2" }, "Currently, the following gene signature scores are available:"),
                    React.createElement("ul", null,
                        React.createElement("li", null, "NIBR_IFN (Novartis 38 Gene Interferon activity signature)"),
                        React.createElement("li", null, "MERCK18 (MERCK's 18 gene signature for PD1-inhibitor response)")))),
            React.createElement("h5", { className: "card-title mt-3" }, "Usability improvements"),
            React.createElement("ul", null,
                React.createElement("li", null,
                    React.createElement("p", { className: "card-text" }, "It is now possible to add multiple \"Annotation Columns\" at once"),
                    React.createElement("img", { className: "border border-ordino-gray-5", src: annotation_column, height: 200, alt: "Annotation Column" })),
                React.createElement("hr", null),
                React.createElement("li", null,
                    React.createElement("p", { className: "card-text mt-2" }, "The data download dialog has been improved"),
                    React.createElement("img", { className: "border border-ordino-gray-5", src: data_download, height: 400, alt: "Download Data" })))))
    },
    {
        name: 'Version 7.0.0 (2020-08-26)',
        markup: () => (React.createElement(React.Fragment, null,
            React.createElement("p", { className: "card-text" },
                "This update contains more ",
                React.createElement("b", null, "data"),
                ", many ",
                React.createElement("b", null, "new features"),
                ", various ",
                React.createElement("b", null, "improvements"),
                ", and a large number of ",
                React.createElement("b", null, "bug fixes"),
                ". The most important changes are:"),
            React.createElement("br", null),
            React.createElement("h5", { className: "card-title" }, "New Data"),
            React.createElement("ul", null,
                React.createElement("li", null, "All data has be been updated from hg19 to hg38!"),
                React.createElement("li", null,
                    "Now, HLA-A type, Mutational Burden and MSI Status data is available for many cell line and tissue samples.",
                    React.createElement("br", null),
                    React.createElement("i", null, " How to access"),
                    ": Open a list of cell lines \t\u2192 click on \u201C+\u201D to open the \u201Cadd column\u201D dialog \t\u2192 select \"Annotation Columns\" \t\u2192 select the data of interest.")),
            React.createElement("h5", { className: "card-title" }, "Completely new feature"),
            React.createElement("ul", null,
                React.createElement("li", null,
                    React.createElement("p", { className: "card-text" },
                        "It is now possible to do basic statistical analyses, like calculating the correlation of two columns, directly in Ordino.",
                        React.createElement("br", null),
                        React.createElement("i", null, "How to access"),
                        ": Click on the calculator icon on the right. This opens a new side-panel (highlighted in red in the screenshot below).",
                        React.createElement("br", null),
                        " There you can select which columns to compare and then get detailed information about the result."),
                    React.createElement("img", { src: tourdino, height: 400, alt: "Tourdino" }))),
            React.createElement("h5", { className: "card-title" }, "Improved features"),
            React.createElement("ul", null,
                React.createElement("li", null,
                    "Improved column operations (filtering, sorting, etc). ",
                    React.createElement("i", null, "How to access"),
                    ": click on any of the icons in the column headers",
                    React.createElement("ul", null,
                        React.createElement("li", null, "The column dialogs were harmonized."),
                        React.createElement("li", null, "There is now a live preview. For instance, if you modify the filter setting of a column, you can see in the background how this will affect your list of genes, cell lines, and tissue samples."),
                        React.createElement("li", null,
                            "It is now possible to reset all filters at once in the right side-panel. ",
                            React.createElement("i", null, "Access side-panel by clicking on the left-facing arrow in the menu on the right")),
                        React.createElement("li", null,
                            "The grouping of text columns (like mutations) is now working much better (e.g., allowing you to split your cell lines by specific mutations). ",
                            React.createElement("i", null, "How to access: click the \u201C\u2026\u201D in the column header and then select \u201CGroup By\u201D")))),
                React.createElement("li", null, "Improved look and feel of the list of cell lines, genes, and tissue samples."),
                React.createElement("li", null, "Collapsing and expanding of sample / gene groups is now recorded in the session history."),
                React.createElement("li", null, "The columns \"AA mutated\" and \"DNA mutated\" have been harmonized. There is now no category \"Unknown\" anymore, but missing values are handled the same way as in all other columns."),
                React.createElement("li", null, "File upload has been improved and now supports boolean (i.e., true/false) columns.")),
            React.createElement("p", { className: "card-text" },
                "And to make it easier for new users to get to know Ordino, we also added two additional interactive help tours that guide you through the application.",
                React.createElement("br", null),
                React.createElement("i", null, "These can be accessed by clicking on the \u201C?\u201D in the upper right corner of Ordino"))))
    },
    {
        name: 'Version 6.0.0 (2019-10-14)',
        markup: () => (React.createElement(React.Fragment, null,
            React.createElement("p", { className: "card-text" },
                "This update contains new ",
                React.createElement("b", null, "features"),
                ", various ",
                React.createElement("b", null, "improvements"),
                ", and many ",
                React.createElement("b", null, "bug fixes"),
                ". The most important changes are:"),
            React.createElement("ul", null,
                React.createElement("li", null, "There is now an Improved menu for saving and loading of analysis sessions. This menu is now called \"Analysis Session Management\" and is available in the upper right corner."),
                React.createElement("li", null, "Advanced session sharing possibilities have been added. It is now possible to share an analysis session with individual people or a group of people. To do so, click on \"Advanced\" in the \"Save Session\" menu. The same is now possible for sharing uploaded data sets."),
                React.createElement("li", null, "The \"Download Data\" menu has been simplified."))))
    },
    {
        name: 'Version 5.1.0 (2018-12-05)',
        markup: () => (React.createElement(React.Fragment, null,
            React.createElement("p", { className: "card-text" },
                "This update contains new ",
                React.createElement("b", null, "features"),
                ", ",
                React.createElement("b", null, "improvements"),
                ", and ",
                React.createElement("b", null, "bug fixes"),
                ". The most important changes are:"),
            React.createElement("ul", null,
                React.createElement("li", null, "File upload is working again."),
                React.createElement("li", null, "The data up- and download now supports Excel files (*.xlsx)."),
                React.createElement("li", null, "A guided tour explains the basic features of Ordino. You can start the tour by clicking on the '?' in the upper right corner."),
                React.createElement("li", null, "You can now copy gene and cell line lists from almost everywhere (e.g., comma or line separated) and paste them into the text field on the welcome page."),
                React.createElement("li", null, "The overview mode (last button on the right site) is now working for very large lists."),
                React.createElement("li", null, "Spearman correlation computation has been added to the \"Co-expression\" Detail View."))))
    },
    {
        name: 'Version 5.0.0 (2018-11-07)',
        markup: () => (React.createElement(React.Fragment, null,
            React.createElement("p", { className: "card-text" },
                "This update contains more ",
                React.createElement("b", null, "data"),
                ", various ",
                React.createElement("b", null, "usability improvements"),
                ", and several ",
                React.createElement("b", null, "bug fixes"),
                ". The most important changes are:"),
            React.createElement("ul", null,
                React.createElement("li", null,
                    "Improved column headers and column menus",
                    React.createElement("ul", null,
                        React.createElement("li", null, "Column headers start with gene/cell line name and information about data type."),
                        React.createElement("li", null, "New filter and value mapping dialog for numeric columns (e.g., it is now possible to copy the value range from one column to another)."),
                        React.createElement("li", null, "Extended coloring options for numeric columns."))),
                React.createElement("li", null,
                    "Improved column headers and column menus.",
                    React.createElement("ul", null,
                        React.createElement("li", null, "The order of multiple sorting/grouping columns can now be explicitly specified in the side panel on the right (can be opened by clicking on the arrow on the right)."),
                        React.createElement("li", null, "The values of numeric columns can be grouped into an arbitrary number of bins."),
                        React.createElement("li", null, "The values of text columns can now be grouped."))),
                React.createElement("li", null,
                    "Improved aggregated columns.",
                    React.createElement("ul", null,
                        React.createElement("li", null, "Boxplot columns now show outliers."),
                        React.createElement("li", null, "Heatmap columns now support mouse over to identify individual genes/cell lines/values."),
                        React.createElement("li", null, "Heatmap columns now support complex color and value mapping."))),
                React.createElement("li", null,
                    "Improved column types.",
                    React.createElement("ul", null,
                        React.createElement("li", null, "Chromosomes are now correctly sorted."),
                        React.createElement("li", null, "Gene start and end coordinates are now numeric columns allowing correct sorting (can for instance be used to draw copy number profiles)."))),
                React.createElement("li", null,
                    "Improved performance.",
                    React.createElement("ul", null,
                        React.createElement("li", null, "The overview mode (last button on the right panel) is now faster and works even with a larger number of columns."))),
                React.createElement("li", null, "A few external detail views have been added."),
                React.createElement("li", null, "Extended \"Data download\" functionality."),
                React.createElement("li", null,
                    "Improved user interface.",
                    React.createElement("ul", null,
                        React.createElement("li", null, "\"Add column\" menu simplified"),
                        React.createElement("li", null, "Some features renamed to make it clearer what they do."),
                        React.createElement("li", null, "A \"Submit Feedback\" button was added: By clicking on the button in the upper right corner (the life belt icon), you can easily provide feedback about Ordino (bug reports, features requests, etc)."))),
                React.createElement("li", null,
                    "Improved column headers and column menus",
                    React.createElement("ul", null,
                        React.createElement("li", null, "Column headers start with gene/cell line name and information about data type."),
                        React.createElement("li", null, "New filter and value mapping dialog for numeric columns (e.g., it is now possible to copy the value range from one column to another)."),
                        React.createElement("li", null, "Extended coloring options for numeric columns."))))))
    }
];
export function NewsPage() {
    return (React.createElement(React.Fragment, null,
        React.createElement(HeaderNavigation, { fixed: "top" }),
        React.createElement("div", { className: "scrollspy-nav flex-column ml-4 nav" }, sections.map(({ name }, i) => (React.createElement(Link, { className: "nav-link", role: "button", key: i, to: `element-${i}`, spy: true, smooth: true, offset: -180, duration: 500 }, name)))),
        React.createElement("div", { className: "container news-page my-9" }, sections.map(({ name, markup }, i) => (React.createElement(Element, { key: i, name: `element-${i}`, className: "news-page-section" },
            React.createElement("h4", { className: "text-left mt-2 d-flex align-items-center mb-3" },
                React.createElement("i", { className: "mr-2 ordino-icon-1 fas fa-chevron-circle-right" }),
                " ",
                name),
            React.createElement("div", { className: "card shadow-sm p-3 h-100" },
                React.createElement("div", { className: "card-body" }, markup())))))),
        React.createElement(OrdinoFooter, null)));
}
//# sourceMappingURL=NewsPage.js.map