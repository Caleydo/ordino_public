import * as React from 'react';
import { Link } from 'react-router-dom';
export function VideoCard({ openInNewWindow }) {
    const newWindowProps = openInNewWindow
        ? {
            target: '_blank',
            rel: 'noopener noreferrer',
        }
        : {};
    return (React.createElement("div", { style: { overflow: 'hidden' }, className: "card p-2 shadow-sm ordino-video-card" },
        React.createElement("div", { className: "card-body" },
            React.createElement("p", { className: "card-text lead" }, "Ordino is a browser-based visual data analysis solution to flexibly rank, filter, and explore genes, cell lines, and tissue samples based on a rich set of experimental and metadata. Ordino contains a large set of cancer genomics data allowing to readily address a multitude of use cases as, for instance, identifying genes that could serve as potential drug targets or biomarkers, or finding the most appropriate cell line for an experiment."),
            React.createElement("iframe", { className: "w-100 pt-2 pb-1", src: "https://www.youtube-nocookie.com/embed/JZIIf-k852g?autoplay=0", frameBorder: "0", allow: "autoplay; clipboard-write; encrypted-media; picture-in-picture", allowFullScreen: true }),
            React.createElement("h5", { className: "card-title mt-4" },
                React.createElement("i", { className: "me-2 fas fa-check" }),
                "Workflow and Features"),
            React.createElement("p", { className: "card-text" },
                "The user starts the analysis by defining a set of genes, cell lines, or tissue samples to work with. The set of items can be determined by manually entering a list of identifiers (e.g., a list of gene symbols), by selecting a previously saved or predefined list of items, or by uploading a comma-separated file. The list of items together with some basic annotation is then shown in a tabular format.",
                React.createElement("br", null)),
            React.createElement("p", { className: "card-text" }, " Users can then interactively add columns with:"),
            React.createElement("ul", null,
                React.createElement("li", null, "Experimental data or metadata stored in the Ordino database, like the gene expression data for a single cell line or the biotype of all listed genes"),
                React.createElement("li", null, "Dynamically computed scores, such as the average gene expression of tissue samples from a specific tumor type"),
                React.createElement("li", null, "Uploaded custom data attributes")),
            React.createElement("p", { className: "card-text" }, "All this data can then be used to interactivaly rank, filter, and explore the items."),
            React.createElement("p", { className: "card-text" },
                "Additionally, users can select one or more items in the table to explore them in depth using a collection of ",
                React.createElement("i", null, "Detail Views"),
                ".",
                React.createElement("br", null),
                "The available ",
                React.createElement("i", null, "Detail Views"),
                " include:"),
            React.createElement("ul", null,
                React.createElement("li", null, "Specialized visualizations (e.g., a co-expression plot for comparing multiple genes, an expression vs. copy number plot, or an OncoPrint) "),
                React.createElement("li", null, "Another ranked table (e.g., a list of all cell lines plus their gene expression for the selected genes)"),
                React.createElement("li", null, "Embedded external resources (e.g., Ensembl and Open Targets)")),
            React.createElement("p", { className: "card-text" },
                "You can find more detailed information about the main features",
                ' ',
                React.createElement(Link, { ...newWindowProps, className: "card-link", to: "/features" }, "here"),
                "."),
            React.createElement("h5", { className: "card-title mt-4" },
                React.createElement("i", { className: "me-2 fas fa-database" }),
                "Datasets"),
            React.createElement("p", { className: "card-text" },
                "The Ordino database includes metadata as well as mRNA expression, DNA copy number, and mutation data from the Cancer Cell Line Encyclopedia (CCLE),",
                React.createElement("br", null),
                " and The Cancer Genome Atlas (TCGA). Furthermore, two CRISPR / RNAi loss-of-function screen data sets (DRIVE and Avana) are included."),
            React.createElement("p", { className: "card-text" }, "Additionally, users can upload their own tabular data to explore it within Ordino."),
            React.createElement("p", { className: "card-text" },
                "You can find more detailed information about the datasets",
                ' ',
                React.createElement(Link, { ...newWindowProps, className: "card-link", to: "/datasets" }, "here"),
                "."),
            React.createElement("h5", { className: "card-title mt-4" },
                React.createElement("i", { className: "me-2 fas fa-mouse-pointer" }),
                "Tours"),
            React.createElement("p", { className: "card-text" },
                "To learn more about the main features of Ordino and how to use them we provide several interactive help tours that guide you through the application.",
                React.createElement("br", null),
                "You can find them",
                ' ',
                React.createElement(Link, { ...newWindowProps, className: "card-link", to: "/tours" }, "here"),
                "."),
            React.createElement("h5", { className: "card-title mt-4" },
                React.createElement("i", { className: "me-2 fas fa-book-open" }),
                "Publications"),
            React.createElement("p", { className: "card-text" }, "Ordino and its components have been described in the following scientific publications."),
            React.createElement("p", { className: "card-text text-muted" },
                "Marc Streit, Samuel Gratzl, Holger Stitz, Andreas Wernitznig, Thomas Zichner, Christian Haslinger.",
                React.createElement("br", null),
                React.createElement("b", null, "Ordino: visual analysis tool for ranking and exploring genes, cell lines, and tissue samples."),
                React.createElement("br", null),
                React.createElement("i", null, " Bioinformatics, 35(17): 3140-3142, 2019.")),
            React.createElement("p", { className: "card-text text-muted" },
                "Klaus Eckelt, Patrick Adelberger, Thomas Zichner, Andreas Wernitznig, Marc Streit.",
                React.createElement("br", null),
                React.createElement("b", null, "TourDino: A Support View for Confirming Patterns in Tabular Data."),
                React.createElement("br", null),
                React.createElement("i", null, "EuroVis Workshop on Visual Analytics (EuroVA '19), 2019.")),
            React.createElement("p", { className: "card-text text-muted" },
                "Katarina Furmanova, Samuel Gratzl, Holger Stitz, Thomas Zichner, Miroslava Jaresova, Martin Ennemoser, Alexander Lex, Marc Streit.",
                React.createElement("br", null),
                React.createElement("b", null, "Taggle: Combining Overview and Details in Tabular Data Visualizations."),
                React.createElement("br", null),
                React.createElement("i", null, "Information Visualization, 19(2): 114-136, 2019.")),
            React.createElement("p", { className: "card-text" }, "Please cite the first article when using Ordino and publishing your results."),
            React.createElement("p", { className: "card-text" },
                "You can find more information about the publications",
                ' ',
                React.createElement(Link, { ...newWindowProps, className: "card-link", to: "/publications" }, "here"),
                "."))));
}
//# sourceMappingURL=VideoCard.js.map