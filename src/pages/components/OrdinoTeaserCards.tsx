import * as React from 'react';
import { Link } from 'react-router-dom';

export function OrdinoTeaserCards() {
  return (
    <div className="ordino-teaser-cards container" data-testid="ordino-teaser-cards">
      <div className="row row-cols-1 row-cols-md-2 my-5">
        <div className="col position-relative mb-4" data-testid="new-card">
          <h4 className="text-center mb-3">
            <i className="me-2 ordino-icon-2 fas fa-newspaper" /> What&apos;s new?
          </h4>
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <p className="card-text">
                Ordino v11 contains new <b>onboarding tours</b> and several <b>bug fixes</b>.
              </p>
            </div>
            <div className="card-footer">
              <Link to="/news" className="btn btn-light" data-testid="release-notes-link">
                <i className="me-1 fas fa-angle-right" /> Read the release notes
              </Link>
            </div>
          </div>
        </div>
        <div className="col position-relative mb-4" data-testid="publication-card">
          <h4 className="text-center mb-3">
            <i className="me-2 ordino-icon-2 fas fa-book-open" /> Publication
          </h4>
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <p className="card-text">
                Ordino and its components have been published in multiple scientific articles. Please cite the following article when using Ordino and
                publishing your results.
              </p>
              <p className="card-text text-muted">
                Marc Streit, Samuel Gratzl, Holger Stitz, Andreas Wernitznig, Thomas Zichner, Christian Haslinger.
                <br />
                <b>Ordino: visual analysis tool for ranking and exploring genes, cell lines, and tissue samples.</b>
                <br />
                <i> Bioinformatics, 35(17): 3140-3142, 2019. </i>
                <a href="http://dx.doi.org/10.1093/bioinformatics/btz009" target="_blank" rel="noopener noreferrer" data-testid="paper-link">
                  dx.doi.org/10.1093/bioinformatics/btz009
                </a>
              </p>
            </div>
            <div className="card-footer">
              <Link to="/publications" className="btn btn-light" data-testid="publications-link">
                <i className="me-1 fas fa-angle-right" /> List of all publications
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
