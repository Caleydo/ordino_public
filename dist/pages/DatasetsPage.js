import * as React from 'react';
import { HeaderNavigation, OrdinoFooter } from 'ordino';
export function DatasetPageCard({ title, children }) {
    return (React.createElement("div", { className: "card shadow-sm h-100" },
        React.createElement("div", { className: "card-body" },
            React.createElement("h5", { className: "card-title" }, title),
            children)));
}
export function DatasetsPage() {
    const testId = 'datasetspage';
    return (React.createElement(React.Fragment, null,
        React.createElement(HeaderNavigation, { testId: testId }),
        React.createElement("div", { className: "position-relative pt-6" },
            React.createElement("div", { className: "ordino-container" },
                React.createElement("div", { className: "dataset-page py-6 container" },
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col" },
                            React.createElement("h4", { className: "text-start d-flex align-items-center mt-2 mb-3" },
                                React.createElement("i", { className: "me-2 ordino-icon-1 fas fa-chevron-circle-right" }),
                                " Basic Datasets"))),
                    React.createElement("div", { className: "row row-cols-md-2 row-cols-1" },
                        React.createElement("div", { className: "col" },
                            React.createElement(DatasetPageCard, { title: "Cancer Cell Line Encyclopedia (CCLE)" },
                                React.createElement("p", { className: "card-text" }, "Sample annotation, gene expression, mutation, and copy number data"),
                                React.createElement("a", { className: "card-link", href: "https://portals.broadinstitute.org/ccle", target: "_blank", rel: "noopener", "data-testid": `${testId}-card-ccle-link` }, "portals.broadinstitute.org/ccle"))),
                        React.createElement("div", { className: "col" },
                            React.createElement(DatasetPageCard, { title: "The Cancer Genome Atlas (TCGA)" },
                                React.createElement("p", { className: "card-text" }, "Sample annotation, gene expression, mutation, and copy number data "),
                                React.createElement("a", { className: "card-link", href: "https://cancergenome.nih.gov", target: "_blank", rel: "noopener", "data-testid": `${testId}-card-tcga-link` }, "cancergenome.nih.gov")))),
                    React.createElement("div", { className: "row row-cols-md-2 row-cols-1 mt-4" },
                        React.createElement("div", { className: "col" },
                            React.createElement(DatasetPageCard, { title: "Gene Annotation" },
                                React.createElement("p", { className: "card-text" }, "Based on Ensembl 86"),
                                React.createElement("a", { className: "card-link", href: " http://oct2016.archive.ensembl.org/index.html", target: "_blank", rel: "noopener", "data-testid": `${testId}-card-gene-annotation-link` }, "oct2016.archive.ensembl.org")))),
                    React.createElement("div", { className: "row mt-4" },
                        React.createElement("div", { className: "col" },
                            React.createElement("h4", { className: "text-start d-flex align-items-center mt-2 mb-3" },
                                React.createElement("i", { className: "me-2 fas ordino-icon-1 fa-chevron-circle-right" }),
                                " Depletion Screen Data"))),
                    React.createElement("div", { className: "row row-cols-md-2 row-cols-1" },
                        React.createElement("div", { className: "col" },
                            React.createElement(DatasetPageCard, { title: "Project DRIVE" },
                                React.createElement("p", { className: "card-text" }, "RNAi depletion screen data (RSA and ATARiS)"),
                                React.createElement("a", { className: "card-link", href: "https://doi.org/10.1016/j.cell.2017.07.005", target: "_blank", rel: "noopener", "data-testid": `${testId}-card-drive-link` }, " McDonald III, E. R. et. al. Project DRIVE: A Compen- dium of Cancer Dependencies and Synthetic Lethal Relationships Uncovered by Large-Scale, Deep RNAi Screening. Cell 170, Pages 577-592.e10 (2017)."))),
                        React.createElement("div", { className: "col" },
                            React.createElement(DatasetPageCard, { title: "Avana CERES" },
                                React.createElement("p", { className: "card-text" }, "CRISPR-Cas9 depletion screen data"),
                                React.createElement("a", { className: "card-link", href: "https://doi.org/10.1038/ng.3984", target: "_blank", rel: "noopener", "data-testid": `${testId}-card-ceres-link` }, "Meyers, R. M. et. al. Computational correction of copy number effect improves specificity of CRISPR\u2013Cas9 essentiality screens in cancer cells. Nature Genetics 49, 1779\u20131784 (2017)."))))),
                React.createElement(OrdinoFooter, { testId: testId })))));
}
//# sourceMappingURL=DatasetsPage.js.map