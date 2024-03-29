import React from 'react';
import { Link } from 'react-router-dom';

import type { IHelpPageCardProps } from './OrdinoHelpSection';

export function TermsOfUseCard({ openInNewWindow = false }: IHelpPageCardProps) {
  return (
    <div className="shadow-sm card p-2">
      <div className="card-body">
        <div className="list-group list-group-flush">
          <div className="list-group-item">This instance of Ordino is intended for scientific research and non-commercial use only.</div>
          <div className="list-group-item">Ordino cannot be used for the provision of medical advice.</div>
          <div className="list-group-item">
            We expect attribution (e.g. in publications, services or products) for any of Ordino&apos;s online services, databases or software in accordance
            with good scientific practice.
            <br />
            Please see the{' '}
            {openInNewWindow ? (
              <Link to="/publications" target="_blank" rel="noopener noreferrer">
                Publications page
              </Link>
            ) : (
              <Link to="/publications">Publications page</Link>
            )}{' '}
            for more information.
          </div>
          <div className="list-group-item">
            Ordino provides data collated from the public domain with references to their sources. We cannot guarantee the accuracy of any data or databases nor
            their suitability for user purposes.
          </div>
          <div className="list-group-item">
            The original data in Ordino may be subject to rights claimed by third parties, including but not limited to, patent, copyright, other intellectual
            property rights, biodiversity-related access and benefit-sharing rights. It is the responsibility of users of Ordino to ensure that their
            exploitation of the data does not infringe any of the rights of such third parties.
          </div>
          <div className="list-group-item">We are not liable to you or third parties claiming through you, for any loss or damage.</div>
          <div className="list-group-item">
            We do not accept responsibility for the consequences of any breach of the confidentiality of the Ordino Site by third parties.
          </div>
          <div className="list-group-item">
            We accept no responsibility for the consequences of any temporary or permanent discontinuity in service of this Site.
          </div>
          <div className="list-group-item">
            Users of Ordino agree not to attempt to use any Ordino computers, files or networks apart from through the service interfaces provided.
          </div>
          <div className="list-group-item">
            Any attempt to use Ordino to a level that prevents, or looks likely to prevent, Ordino providing services to others, will result in the use being
            blocked.
          </div>
          <div className="list-group-item">
            Any feedback on Ordino will be treated as non-confidential unless the individual or organization providing the feedback states otherwise.
          </div>
        </div>
      </div>
    </div>
  );
}
