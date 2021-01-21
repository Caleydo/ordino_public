import * as React from 'react';
import { HeaderNavigation } from './components/HeaderNavigation';
import { OrdinoFooter } from './components/OrdinoFooter';
import { Row, Col, Nav, Card } from 'react-bootstrap';
import { Waypoint } from 'react-waypoint';
import { useRef } from 'react';
import { DevelopedByAffiliations } from './components/DevelopedByAffiliations';
export function HelpPage() {
    const [section, setSection] = React.useState('');
    //Todo simplify scrollpsy logic
    const sectionsRefs = {};
    sectionsRefs['first'] = useRef();
    sectionsRefs['second'] = useRef();
    sectionsRefs['third'] = useRef();
    sectionsRefs['fourth'] = useRef();
    sectionsRefs['fifth'] = useRef();
    const scrollToView = (evt, name) => {
        console.log();
        sectionsRefs[name].current.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    const activeClass = (name) => section === name ? 'active' : '';
    return (React.createElement(React.Fragment, null,
        React.createElement(HeaderNavigation, null),
        React.createElement("div", { className: "container-md ordino-help-page" },
            React.createElement(Row, null,
                React.createElement(Col, { sm: 3 },
                    React.createElement(Nav, { style: { position: 'fixed' }, className: "flex-column" },
                        React.createElement(Nav.Link, { className: `pl-5 text-left ${activeClass('first')} `, onClick: (evt) => scrollToView(evt, 'first') }, " Ordino at a glance"),
                        React.createElement(Nav.Link, { className: `pl-5 ${activeClass('second')} `, ref: sectionsRefs['second'], onClick: (evt) => scrollToView(evt, 'second') }, " Contact us"),
                        React.createElement(Nav.Link, { className: `pl-5 ${activeClass('third')} `, ref: sectionsRefs['third'], onClick: (evt) => scrollToView(evt, 'third') }, " Disclaimer"),
                        React.createElement(Nav.Link, { className: `pl-5 ${activeClass('fourth')} `, ref: sectionsRefs['fourth'], onClick: (evt) => scrollToView(evt, 'fourth') }, " Terms of Use"),
                        React.createElement(Nav.Link, { className: `pl-5 ${activeClass('fifth')} `, ref: sectionsRefs['fifth'], onClick: (evt) => scrollToView(evt, 'fifth') },
                            " Source code ",
                            "&",
                            " licenses"))),
                React.createElement(Col, { sm: 9 },
                    React.createElement(Row, null,
                        React.createElement(Waypoint, { topOffset: '40%', bottomOffset: '70%', onEnter: () => setSection('first') },
                            React.createElement("section", { ref: sectionsRefs['first'], style: { paddingBottom: '60px', height: "100%" } },
                                React.createElement("h4", { className: "text-left mt-2 mb-3" },
                                    React.createElement("i", { className: "mr-2 fas fa-mountain" }),
                                    " Ordino at a glance"),
                                React.createElement(VideoCard, null)))),
                    React.createElement(Row, null,
                        React.createElement(Waypoint, { topOffset: '40%', bottomOffset: '70%', onEnter: () => setSection('second') },
                            React.createElement("section", { ref: sectionsRefs['second'], style: { paddingBottom: '60px', height: "100%" } },
                                React.createElement("h4", { className: "text-left mt-2 mb-3" },
                                    React.createElement("i", { className: "mr-2 fas fa-at" }),
                                    " Contact us"),
                                React.createElement(VideoCard, null)))),
                    React.createElement(Row, null,
                        React.createElement(Waypoint, { topOffset: '40%', bottomOffset: '70%', onEnter: () => setSection('third') },
                            React.createElement("section", { ref: sectionsRefs['third'], style: { paddingBottom: '60px', height: "100%" } },
                                React.createElement("h4", { className: "text-left mt-2 mb-3" },
                                    React.createElement("i", { className: "mr-2 fas fa-exclamation-triangle " }),
                                    " Disclaimer"),
                                React.createElement(Card, { className: "shadow-sm" },
                                    React.createElement(Card.Body, null,
                                        React.createElement(Card.Text, null,
                                            "The information provided by Johannes Kepler University Linz, Boehringer Ingelheim RCV GmbH ",
                                            "&",
                                            " Co KG, and datavisyn GmbH (\u201Cwe,\u201D \u201Cus\u201D or \u201Cour\u201D) on https://ordino.calyedoapp.org (the \u201CSite\u201D) is for general research purposes and non-commercial use only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, expressed or implied, regarding the accuracy, adequacy, validity, reliability, availability or completeness of any information on the Site."),
                                        React.createElement(Card.Text, null, "Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the Site or reliance on any information provided on the Site. Your use of the Site and your reliance on any information on the Site is solely at your own risk."),
                                        React.createElement(Card.Text, null, "The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability or completeness by us. We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through or embedded within the Site."),
                                        React.createElement(Card.Text, null, "The Site cannot and does not contain medical or health advice. The information is provided for general informational and educational purposes only and is not a substitute for professional advice.")))))),
                    React.createElement(Row, null,
                        React.createElement(Waypoint, { topOffset: '40%', bottomOffset: '70%', onEnter: () => setSection('fourth') },
                            React.createElement("section", { ref: sectionsRefs['fourth'], style: { paddingBottom: '60px', height: "100%" } },
                                React.createElement("h4", { className: "text-left mt-2 mb-3" },
                                    React.createElement("i", { className: "mr-2 fas fa-smile" }),
                                    " Terms of Use"),
                                React.createElement(Card, { className: "shadow-sm" },
                                    React.createElement(Card.Body, null,
                                        React.createElement(Card.Text, null,
                                            "1. Ordino is intended for scientific research and non-commercial use only.",
                                            React.createElement("br", null),
                                            "2. Ordino cannot be used for the provision of medical advice.",
                                            React.createElement("br", null),
                                            "3. We expect attribution (e.g. in publications, services or products) for any of Ordino's online services, databases or software in accordance with good scientific practice.",
                                            React.createElement("br", null),
                                            "4. Ordino provides data collated from the public domain with references to their sources. We cannot guarantee the accuracy of any data or databases nor their suitability for user purposes.",
                                            React.createElement("br", null),
                                            "5. The original data in Ordino may be subject to rights claimed by third parties, including but not limited to, patent, copyright, other intellectual property rights, biodiversity-related access and benefit-sharing rights. It is the responsibility of users of Ordino to ensure that their exploitation of the data does not infringe any of the rights of such third parties.",
                                            React.createElement("br", null),
                                            "6. We are not liable to you or third parties claiming through you, for any loss or damage.",
                                            React.createElement("br", null),
                                            "7. We do not accept responsibility for the consequences of any breach of the confidentiality of the Ordino Site by third parties.",
                                            React.createElement("br", null),
                                            "8. We accept no responsibility for the consequences of any temporary or permanent discontinuity in service of this Site.",
                                            React.createElement("br", null),
                                            "9. Users of Ordino agree not to attempt to use any Ordino computers, files or networks apart from through the service interfaces provided.",
                                            React.createElement("br", null),
                                            "10. Any attempt to use Ordino to a level that prevents, or looks likely to prevent, Ordino providing services to others, will result in the use being blocked.",
                                            React.createElement("br", null),
                                            "11. Any feedback on Ordino will be treated as non-confidential unless the individual or organization providing the feedback states otherwise.",
                                            React.createElement("br", null))))))),
                    React.createElement(Row, null,
                        React.createElement(Waypoint, { topOffset: '40%', bottomOffset: '70%', onEnter: () => setSection('fifth') },
                            React.createElement("section", { ref: sectionsRefs['fifth'], style: { paddingBottom: '60px', height: "100%" } },
                                React.createElement("h4", { className: "text-left mt-2 mb-3" },
                                    React.createElement("i", { className: "mr-2 fab fa-github" }),
                                    " Source code ",
                                    "&",
                                    " licenses"),
                                React.createElement(Card, { className: "shadow-sm" },
                                    React.createElement(Card.Body, null,
                                        React.createElement(Card.Text, null, "The source code of Ordino is available under the Mozilla Public License (MPL) at GitHub."),
                                        React.createElement(Card.Text, null, "This application is part of Phovea, a platform for developing web-based visualization applications. For tutorials, API docs, and more information about the build and deployment process, see the documentation page."),
                                        "Version: 7.0.3-20201119-011617",
                                        React.createElement(Card.Text, null))))))))),
        React.createElement(DevelopedByAffiliations, null),
        React.createElement(OrdinoFooter, null)));
}
function VideoCard() {
    return (React.createElement(Card, { style: { overflow: "hidden" }, className: "shadow-sm" },
        React.createElement("iframe", { src: "https://www.youtube-nocookie.com/embed/TIDUsEOsI_Y?autoplay=0", frameBorder: "0", allow: "autoplay; clipboard-write; encrypted-media; picture-in-picture", allowFullScreen: true }),
        React.createElement(Card.Body, null,
            React.createElement(Card.Text, null, "Ordino is a browser-based visual data analysis solution to flexibly rank, filter, and explore genes, cell lines, and tissue samples based on a rich set of experimental and metadata."),
            React.createElement(Card.Title, null,
                React.createElement("i", { className: "mr-2 fas fa-check" }),
                "Features"),
            React.createElement(Card.Text, null, "You can find an overview of the main features here."),
            React.createElement(Card.Title, null,
                React.createElement("i", { className: "mr-2 fas fa-database" }),
                "Datasets"),
            React.createElement(Card.Text, null, "Many datasets have been integrated and are ready to explore. Read more about datasets."),
            React.createElement(Card.Title, null,
                React.createElement("i", { className: "mr-2 fas fa-mouse-pointer" }),
                "Tours"),
            React.createElement(Card.Text, null, "Another good way to learn about the main features of Ordino are our interactive tours that you can find here."),
            React.createElement(Card.Title, null,
                React.createElement("i", { className: "mr-2 fas fa-book-open" }),
                "Publications"),
            React.createElement(Card.Text, null, "Ordino and its components have been described in several scientific publications. More about the publications."))));
}
//# sourceMappingURL=HelpPage.js.map