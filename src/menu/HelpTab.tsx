import {OrdinoFooter} from 'ordino';
import * as React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {OrdinoHelpSection} from '../pages/components/OrdinoHelpSection';

export default function HelpTab() {
    return <>
        <BrowserRouter basename="/#">
            <OrdinoHelpSection openInNewWindow>
                <OrdinoFooter openInNewWindow></OrdinoFooter>
            </OrdinoHelpSection>
        </BrowserRouter>
    </>;
}
