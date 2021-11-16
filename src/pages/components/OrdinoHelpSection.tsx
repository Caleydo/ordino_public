import React from 'react';
import {DisclaimerCard} from './DisclaimerCard';
import {OrdinoContactForm} from './OrdinoContactForm';
import {IVideoCardProps, VideoCard} from './VideoCard';
import {OrdinoScrollspy, OrdinoScrollspyItem} from 'ordino';
import {SourceCodeCard} from './SourceCodeCard';
import {TermsOfUseCard} from './TermsOfUseCard';
import {DevelopedByAffiliations} from './DevelopedByAffiliations';

const cards = [
  {
    id: 'ordino-at-a-glance',
    name: 'Ordino at a glance',
    icon: 'fas fa-mountain',
    factory: (props: IVideoCardProps) => <VideoCard {...props} />

  },
  {
    id: 'team',
    name: 'Team',
    icon: 'fas fa-users',
    factory: () => <div className="card shadow-sm p-5">
      <div className="card-body"><DevelopedByAffiliations /></div></div>
  },
  {
    id: 'contact-us',
    name: 'Contact us',
    icon: 'fas fa-at',
    factory: ({testId}: {testId?: string}) => <OrdinoContactForm testId={testId} />

  },
  {
    id: 'disclaimer',
    name: 'Disclaimer',
    icon: 'fas fa-exclamation-triangle',
    factory: ({testId}: {testId?: string}) => <DisclaimerCard testId={testId} />

  },
  {
    id: 'terms-of-use',
    name: 'Terms of use',
    icon: 'fas fa-smile',
    factory: () => <TermsOfUseCard />
  },
  {
    id: 'source-code-licenses',
    name: 'Source code',
    icon: 'fas fa-code',
    factory: () => <SourceCodeCard />
  },
];


interface IOrdinoHelpSectionProps {
  /**
   * Whether to open the links to other pages in a new tab
   */
  openInNewWindow?: boolean;
  children?: React.ReactNode;
  testId?: string;
}

export function OrdinoHelpSection(props: IOrdinoHelpSectionProps) {
  const testId = props.testId ? `${props.testId}-helpsection` : 'helptab-helpsection';
  return (<>
    <OrdinoScrollspy items={cards.map((item) => ({id: item.id, name: item.name}))} testId={testId}>
      {(handleOnChange) =>
        <>
          <div className="container pb-6">
            <div className="row">
              <div className="col">
                {cards.map((item, index) => {
                  return (
                    // `id` attribute must match the one in the scrollspy
                    <OrdinoScrollspyItem className="pt-6" id={item.id} key={item.name} index={index} handleOnChange={handleOnChange}>
                      <>
                        <h4 className="text-start  mt-2 mb-3"><i className={`me-2 ordino-icon-2 ${item.icon}`}></i> {item.name}</h4>
                        <item.factory {...{openInNewWindow: props.openInNewWindow, testId}} />
                      </>
                    </OrdinoScrollspyItem>
                  );
                })}
              </div>
            </div>
          </div>
          {props.children}
        </>
      }
    </OrdinoScrollspy>
  </>);
}
