import * as React from 'react';
import logoBI from 'ordino_public/dist/assets/logos/boehringer-ingelheim.svg';
import logoJKU from 'ordino_public/dist/assets/logos/johannes-kepler-university-linz.svg';
import logoDatavisyn from 'ordino_public/dist/assets/logos/datavisyn.svg';
export function DevelopedByAffiliations() {
    return (React.createElement("section", { className: "container", "data-testid": "ordino-developed-by" },
        React.createElement("div", { className: "row" },
            React.createElement("div", { className: "col position-relative mb-3 text-center" },
                React.createElement("p", { className: "text-gray fs-5" }, "Ordino is developed by"))),
        React.createElement("div", { className: "row" },
            React.createElement("div", { className: "col position-relative text-center" },
                React.createElement("a", { href: "https://jku.at", target: "_blank", rel: "noopener noreferrer", "data-testid": "jku-link" },
                    React.createElement("img", { src: logoJKU, alt: "Johannes Kepler University Linz", style: { height: '45px' } }))),
            React.createElement("div", { className: "col position-relative text-center" },
                React.createElement("a", { href: "https://www.boehringer-ingelheim.com", target: "_blank", rel: "noopener noreferrer", "data-testid": "boehringer-ingelheim-link" },
                    React.createElement("img", { src: logoBI, alt: "Boehringer Ingelheim", style: { height: '45px' } }))),
            React.createElement("div", { className: "col position-relative text-center" },
                React.createElement("a", { href: "https://www.datavisyn.io", target: "_blank", rel: "noopener noreferrer", "data-testid": "datavisyn-link" },
                    React.createElement("img", { src: logoDatavisyn, alt: "datavisyn", style: { height: '35px' } }))))));
}
//# sourceMappingURL=DevelopedByAffiliations.js.map