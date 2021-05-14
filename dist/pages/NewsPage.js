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
            React.createElement("p", { className: "lead" },
                "This update contains more ",
                React.createElement("b", null, "data"),
                ", various ",
                React.createElement("b", null, "usability improvements"),
                ", and several ",
                React.createElement("b", null, "bug fixes"),
                ". The most important changes are:"),
            React.createElement("h4", null, "New data"),
            React.createElement("div", { className: "row row-cols-2" },
                React.createElement("div", { className: "col mb-4" },
                    React.createElement("div", { className: "card shadow-sm" },
                        React.createElement("div", { className: "h6 card-header" }, "Gene Signature Scores"),
                        React.createElement("div", { className: "card-body" },
                            React.createElement("p", { className: "card-text" },
                                React.createElement("i", null, "Gene Signature Scores"),
                                " are now available for cell lines and tissue samples (including GTEx, TCGA, and PDX models). These can be added using the ",
                                React.createElement("i", null, "Add Column"),
                                " dialog:")),
                        React.createElement("div", { className: "card-img text-center" },
                            React.createElement("img", { src: gene_signature, height: 350, alt: "Gene Signature Score" })),
                        React.createElement("div", { className: "card-body" },
                            React.createElement("p", { className: "card-text" }, "Currently, the following gene signature scores are available:"),
                            React.createElement("ul", null,
                                React.createElement("li", null, "NIBR_IFN (Novartis 38 Gene Interferon activity signature)"),
                                React.createElement("li", null, "MERCK18 (MERCK's 18 gene signature for PD1-inhibitor response)")))))),
            React.createElement("h4", null, "Usability improvements"),
            React.createElement("div", { className: "row row-cols-2" },
                React.createElement("div", { className: "col mb-4" },
                    React.createElement("div", { className: "card shadow-sm" },
                        React.createElement("div", { className: "h6 card-header" }, "Annotation Columns"),
                        React.createElement("div", { className: "card-body" },
                            React.createElement("p", { className: "card-text" }, "It is now possible to add multiple \"Annotation Columns\" at once")),
                        React.createElement("div", { className: "card-img-bottom text-center" },
                            React.createElement("img", { src: annotation_column, height: 200, alt: "Annotation Column" })))),
                React.createElement("div", { className: "col mb-4" },
                    React.createElement("div", { className: "card shadow-sm" },
                        React.createElement("div", { className: "h6 card-header" }, "Data download"),
                        React.createElement("div", { className: "card-body" },
                            React.createElement("p", { className: "card-text" }, "The data download dialog has been improved")),
                        React.createElement("div", { className: "card-img-bottom text-center" },
                            React.createElement("img", { src: data_download, height: 400, alt: "Download Data" })))))))
    },
    {
        name: 'Version 7.0.0 (2020-08-26)',
        markup: () => (React.createElement(React.Fragment, null,
            React.createElement("p", { className: "lead" },
                "This update contains more ",
                React.createElement("b", null, "data"),
                ", many ",
                React.createElement("b", null, "new features"),
                ", various ",
                React.createElement("b", null, "improvements"),
                ", and a large number of ",
                React.createElement("b", null, "bug fixes"),
                ". The most important changes are:"),
            React.createElement("h4", null, "New data"),
            React.createElement("div", { className: "row row-cols-2" },
                React.createElement("div", { className: "col mb-4" },
                    React.createElement("div", { className: "card shadow-sm" },
                        React.createElement("div", { className: "h6 card-header" }, "Database"),
                        React.createElement("div", { className: "card-body" },
                            React.createElement("p", { className: "card-text" }, "All data has be been updated from hg19 to hg38!")))),
                React.createElement("div", { className: "col mb-4" },
                    React.createElement("div", { className: "card shadow-sm" },
                        React.createElement("div", { className: "h6 card-header" }, "HLA-A type, Mutational Burden, and MSI Status"),
                        React.createElement("div", { className: "card-body" },
                            React.createElement("p", { className: "card-text" }, "Now, HLA-A type, Mutational Burden, and MSI Status data is available for many cell line and tissue samples."),
                            React.createElement("p", { className: "card-text" },
                                React.createElement("i", null, " How to access"),
                                ": Open a list of cell lines \t\u2192 click on \"+\" to open the \"add column\" dialog \t\u2192 select \"Annotation Columns\" \t\u2192 select the data of interest."))))),
            React.createElement("h4", null, "Completely new features"),
            React.createElement("div", { className: "row row-cols-1" },
                React.createElement("div", { className: "col mb-4" },
                    React.createElement("div", { className: "card shadow-sm" },
                        React.createElement("div", { className: "h6 card-header" }, "Basic statistical analyses"),
                        React.createElement("img", { className: "card-img w-100 h-auto", src: tourdino, height: 400, alt: "Tourdino" }),
                        React.createElement("div", { className: "card-body" },
                            React.createElement("p", { className: "card-text" }, "It is now possible to do basic statistical analyses, like calculating the correlation of two columns, directly in Ordino."),
                            React.createElement("p", { className: "card-text" },
                                React.createElement("i", null, "How to access"),
                                ": Click on the calculator icon on the right. This opens a new side-panel (highlighted in red in the screenshot below).",
                                React.createElement("br", null),
                                " There you can select which columns to compare and then get detailed information about the result."))))),
            React.createElement("h4", null, "Improved features"),
            React.createElement("div", { className: "row row-cols-2" },
                React.createElement("div", { className: "col mb-4" },
                    React.createElement("div", { className: "card shadow-sm" },
                        React.createElement("div", { className: "h6 card-header" }, "Improved column operations (filtering, sorting, etc)"),
                        React.createElement("ul", { className: "list-group list-group-flush" },
                            React.createElement("li", { className: "list-group-item" },
                                React.createElement("i", null, "How to access"),
                                ": click on any of the icons in the column headers"),
                            React.createElement("li", { className: "list-group-item" }, "The column dialogs were harmonized."),
                            React.createElement("li", { className: "list-group-item" }, "There is now a live preview. For instance, if you modify the filter setting of a column, you can see in the background how this will affect your list of genes, cell lines, and tissue samples."),
                            React.createElement("li", { className: "list-group-item" },
                                "It is now possible to reset all filters at once in the right side-panel. ",
                                React.createElement("i", null, "Access side-panel by clicking on the left-facing arrow in the menu on the right")),
                            React.createElement("li", { className: "list-group-item" },
                                "The grouping of text columns (like mutations) is now working much better (e.g., allowing you to split your cell lines by specific mutations).",
                                React.createElement("br", null),
                                React.createElement("i", null, "How to access: click the \"\u2026\" in the column header and then select \"Group By\""))))),
                React.createElement("div", { className: "col mb-4" },
                    React.createElement("div", { className: "card shadow-sm" },
                        React.createElement("div", { className: "h6 card-header" }, "Briefly noted"),
                        React.createElement("ul", { className: "list-group list-group-flush" },
                            React.createElement("li", { className: "list-group-item" }, "Improved look and feel of the list of cell lines, genes, and tissue samples."),
                            React.createElement("li", { className: "list-group-item" }, "Collapsing and expanding of sample / gene groups is now recorded in the session history."),
                            React.createElement("li", { className: "list-group-item" }, "The columns \"AA mutated\" and \"DNA mutated\" have been harmonized. There is now no category \"Unknown\" anymore, but missing values are handled the same way as in all other columns."),
                            React.createElement("li", { className: "list-group-item" }, "File upload has been improved and now supports boolean (i.e., true/false) columns.")))),
                React.createElement("div", { className: "col mb-4" },
                    React.createElement("div", { className: "card shadow-sm" },
                        React.createElement("div", { className: "h6 card-header" }, "Interactive help tours"),
                        React.createElement("div", { className: "card-body" },
                            React.createElement("p", { className: "card-text" }, "And to make it easier for new users to get to know Ordino, we also added two additional interactive help tours that guide you through the application."),
                            React.createElement("p", { className: "card-text" },
                                React.createElement("i", null, "These can be accessed by clicking on the \"?\" in the upper right corner of Ordino"))))))))
    },
    {
        name: 'Version 6.0.0 (2019-10-14)',
        markup: () => (React.createElement(React.Fragment, null,
            React.createElement("p", { className: "lead" },
                "This update contains new ",
                React.createElement("b", null, "features"),
                ", various ",
                React.createElement("b", null, "improvements"),
                ", and many ",
                React.createElement("b", null, "bug fixes"),
                ". The most important changes are:"),
            React.createElement("div", { className: "row row-cols-2" },
                React.createElement("div", { className: "col mb-4" },
                    React.createElement("div", { className: "card shadow-sm" },
                        React.createElement("div", { className: "h6 card-header" }, "Session management"),
                        React.createElement("div", { className: "card-body" },
                            React.createElement("p", { className: "card-text" }, "There is now an improved menu for saving and loading of analysis sessions."),
                            React.createElement("p", { className: "card-text" }, "This menu is now called \"Analysis Session Management\" and is available in the upper right corner.")))),
                React.createElement("div", { className: "col mb-4" },
                    React.createElement("div", { className: "card shadow-sm" },
                        React.createElement("div", { className: "h6 card-header" }, "Session sharing"),
                        React.createElement("div", { className: "card-body" },
                            React.createElement("p", { className: "card-text" }, "Advanced session sharing possibilities have been added. It is now possible to share an analysis session with individual people or a group of people."),
                            React.createElement("p", { className: "card-text" }, "To do so, click on \"Advanced\" in the \"Save Session\" menu. The same is now possible for sharing uploaded data sets.")))),
                React.createElement("div", { className: "col mb-4" },
                    React.createElement("div", { className: "card shadow-sm" },
                        React.createElement("div", { className: "h6 card-header" }, "Download data"),
                        React.createElement("div", { className: "card-body" },
                            React.createElement("p", { className: "card-text" }, "The \"Download Data\" menu has been simplified.")))))))
    },
    {
        name: 'Version 5.1.0 (2018-12-05)',
        markup: () => (React.createElement(React.Fragment, null,
            React.createElement("p", { className: "lead" },
                "This update contains new ",
                React.createElement("b", null, "features"),
                ", ",
                React.createElement("b", null, "improvements"),
                ", and ",
                React.createElement("b", null, "bug fixes"),
                ". The most important changes are:"),
            React.createElement("div", { className: "row row-cols-2" },
                React.createElement("div", { className: "col mb-4" },
                    React.createElement("div", { className: "card shadow-sm" },
                        React.createElement("div", { className: "h6 card-header" }, "Briefly noted"),
                        React.createElement("ul", { className: "list-group list-group-flush" },
                            React.createElement("li", { className: "list-group-item" }, "File upload is working again."),
                            React.createElement("li", { className: "list-group-item" }, "The data up- and download now supports Excel files (*.xlsx)."),
                            React.createElement("li", { className: "list-group-item" }, "A guided tour explains the basic features of Ordino. You can start the tour by clicking on the '?' in the upper right corner."),
                            React.createElement("li", { className: "list-group-item" }, "You can now copy gene and cell line lists from almost everywhere (e.g., comma or line separated) and paste them into the text field on the welcome page."),
                            React.createElement("li", { className: "list-group-item" }, "The overview mode (last button on the right site) is now working for very large lists."),
                            React.createElement("li", { className: "list-group-item" }, "Spearman correlation computation has been added to the \"Co-expression\" Detail View.")))))))
    },
    {
        name: 'Version 5.0.0 (2018-11-07)',
        markup: () => (React.createElement(React.Fragment, null,
            React.createElement("p", { className: "lead" },
                "This update contains more ",
                React.createElement("b", null, "data"),
                ", various ",
                React.createElement("b", null, "usability improvements"),
                ", and several ",
                React.createElement("b", null, "bug fixes"),
                ". The most important changes are:"),
            React.createElement("div", { className: "row row-cols-2" },
                React.createElement("div", { className: "col mb-4" },
                    React.createElement("div", { className: "card shadow-sm" },
                        React.createElement("div", { className: "h6 card-header" }, "Improved column headers and column menus"),
                        React.createElement("ul", { className: "list-group list-group-flush" },
                            React.createElement("li", { className: "list-group-item" }, "Column headers start with gene/cell line name and information about data type."),
                            React.createElement("li", { className: "list-group-item" }, "New filter and value mapping dialog for numeric columns (e.g., it is now possible to copy the value range from one column to another)."),
                            React.createElement("li", { className: "list-group-item" }, "Extended coloring options for numeric columns.")))),
                React.createElement("div", { className: "col mb-4" },
                    React.createElement("div", { className: "card shadow-sm" },
                        React.createElement("div", { className: "h6 card-header" }, "Improved column sorting and grouping"),
                        React.createElement("ul", { className: "list-group list-group-flush" },
                            React.createElement("li", { className: "list-group-item" }, "The order of multiple sorting/grouping columns can now be explicitly specified in the side panel on the right (can be opened by clicking on the arrow on the right)."),
                            React.createElement("li", { className: "list-group-item" }, "The values of numeric columns can be grouped into an arbitrary number of bins."),
                            React.createElement("li", { className: "list-group-item" }, "The values of text columns can now be grouped.")))),
                React.createElement("div", { className: "col mb-4" },
                    React.createElement("div", { className: "card shadow-sm" },
                        React.createElement("div", { className: "h6 card-header" }, "Improved aggregated columns"),
                        React.createElement("ul", { className: "list-group list-group-flush" },
                            React.createElement("li", { className: "list-group-item" }, "Boxplot columns now show outliers."),
                            React.createElement("li", { className: "list-group-item" }, "Heatmap columns now support mouse over to identify individual genes/cell lines/values."),
                            React.createElement("li", { className: "list-group-item" }, "Heatmap columns now support complex color and value mapping.")))),
                React.createElement("div", { className: "col mb-4" },
                    React.createElement("div", { className: "card shadow-sm" },
                        React.createElement("div", { className: "h6 card-header" }, "Improved column types"),
                        React.createElement("ul", { className: "list-group list-group-flush" },
                            React.createElement("li", { className: "list-group-item" }, "Chromosomes are now correctly sorted."),
                            React.createElement("li", { className: "list-group-item" }, "Gene start and end coordinates are now numeric columns allowing correct sorting (can for instance be used to draw copy number profiles).")))),
                React.createElement("div", { className: "col mb-4" },
                    React.createElement("div", { className: "card shadow-sm" },
                        React.createElement("div", { className: "h6 card-header" }, "Improved user interface"),
                        React.createElement("ul", { className: "list-group list-group-flush" },
                            React.createElement("li", { className: "list-group-item" }, "\"Add column\" menu simplified"),
                            React.createElement("li", { className: "list-group-item" }, "Some features renamed to make it clearer what they do."),
                            React.createElement("li", { className: "list-group-item" }, "A \"Submit Feedback\" button was added: By clicking on the button in the upper right corner (the life belt icon), you can easily provide feedback about Ordino (bug reports, features requests, etc).")))),
                React.createElement("div", { className: "col mb-4" },
                    React.createElement("div", { className: "card shadow-sm" },
                        React.createElement("div", { className: "h6 card-header" }, "Improved performance"),
                        React.createElement("div", { className: "card-body" },
                            React.createElement("p", { className: "card-text" }, "The overview mode (last button on the right panel) is now faster and works even with a larger number of columns.")))),
                React.createElement("div", { className: "col mb-4" },
                    React.createElement("div", { className: "card shadow-sm" },
                        React.createElement("div", { className: "h6 card-header" }, "Briefly noted"),
                        React.createElement("ul", { className: "list-group list-group-flush" },
                            React.createElement("li", { className: "list-group-item" }, "A few external detail views have been added."),
                            React.createElement("li", { className: "list-group-item" }, "Extended \"Data download\" functionality.")))))))
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
            markup())))),
        React.createElement(OrdinoFooter, null)));
}
//# sourceMappingURL=NewsPage.js.map