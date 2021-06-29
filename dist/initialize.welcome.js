import 'ordino/dist/robots.txt';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { HomePage, DatasetsPage, FeaturesPage, NewsPage, Error404Page, PublicationPage, HelpPage } from './pages';
import { RouterScrollToTop } from './utils';
import { ToursPage } from './pages/ToursPage';
// maintain compatibility with old session links (e.g., bookmarks, vistories)
// redirect to app subdirectory if URL hash contains a CLUE session
const location = document.defaultView.location;
if (location.hash.includes('clue_graph') || location.hash.includes('clue_state')) {
    location.replace(location.href.replace('#', 'app#'));
}
ReactDOM.render(React.createElement(React.Fragment, null,
    React.createElement(HashRouter, null,
        React.createElement(RouterScrollToTop, null),
        React.createElement(Switch, null,
            React.createElement(Route, { path: "/news/:slug" },
                React.createElement(NewsPage, null)),
            React.createElement(Route, { path: "/news" },
                React.createElement(NewsPage, null)),
            React.createElement(Route, { path: "/tours" },
                React.createElement(ToursPage, null)),
            React.createElement(Route, { path: "/features" },
                React.createElement(FeaturesPage, null)),
            React.createElement(Route, { path: "/datasets" },
                React.createElement(DatasetsPage, null)),
            React.createElement(Route, { path: "/publications" },
                React.createElement(PublicationPage, null)),
            React.createElement(Route, { path: "/help/:slug" },
                React.createElement(HelpPage, null)),
            React.createElement(Route, { path: "/help" },
                React.createElement(HelpPage, null)),
            React.createElement(Route, { exact: true, path: "/" },
                React.createElement(HomePage, null)),
            React.createElement(Route, null,
                React.createElement(Error404Page, null))))), document.querySelector('#welcome'));
//# sourceMappingURL=initialize.welcome.js.map