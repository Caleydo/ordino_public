import React from 'react';
export interface IHelpPageCardProps {
    openInNewWindow?: boolean;
}
interface IOrdinoHelpSectionProps {
    /**
     * Whether to open the links to other pages in a new tab
     */
    openInNewWindow?: boolean;
    children?: React.ReactNode;
}
export declare function OrdinoHelpSection(props: IOrdinoHelpSectionProps): JSX.Element;
export {};
