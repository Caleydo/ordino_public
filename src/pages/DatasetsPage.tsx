import * as React from 'react';
import { HeaderNavigation, OrdinoFooter } from 'ordino';

interface IDatasetPageCardProps {
  title: string;
  children?: React.ReactNode;
}

export function DatasetPageCard({ title, children }: IDatasetPageCardProps) {
  return (
    <div className="card shadow-sm h-100">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        {children}
      </div>
    </div>
  );
}

export function DatasetsPage() {
  return (
    <>
      <HeaderNavigation />
      <div className="position-relative pt-6" data-testid="datasetspage">
        <div className="ordino-container">
          <div className="dataset-page py-6 container">
            <div className="row">
              <div className="col">
                <h4 className="text-start d-flex align-items-center mt-2 mb-3">
                  <i className="me-2 ordino-icon-1 fas fa-chevron-circle-right" /> Basic Datasets
                </h4>
              </div>
            </div>
            <div className="row row-cols-md-2 row-cols-1">
              <div className="col">
                <DatasetPageCard title="Cancer Cell Line Encyclopedia (CCLE)">
                  <p className="card-text">Sample annotation, gene expression, mutation, and copy number data</p>
                  <a className="card-link" href="https://portals.broadinstitute.org/ccle" data-testid="ccle-link" target="_blank" rel="noopener noreferrer">
                    portals.broadinstitute.org/ccle
                  </a>
                </DatasetPageCard>
              </div>
              <div className="col">
                <DatasetPageCard title="The Cancer Genome Atlas (TCGA)">
                  <p className="card-text">Sample annotation, gene expression, mutation, and copy number data </p>
                  <a className="card-link" href="https://cancergenome.nih.gov" data-testid="tcga-link" target="_blank" rel="noopener noreferrer">
                    cancergenome.nih.gov
                  </a>
                </DatasetPageCard>
              </div>
            </div>

            <div className="row row-cols-md-2 row-cols-1 mt-4">
              <div className="col">
                <DatasetPageCard title="Gene Annotation">
                  <p className="card-text">Based on Ensembl 86</p>
                  <a
                    className="card-link"
                    href=" http://oct2016.archive.ensembl.org/index.html"
                    data-testid="gene-annotation-link"
                    target="_blank"
                    rel="noopener"
                  >
                    oct2016.archive.ensembl.org
                  </a>
                </DatasetPageCard>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col">
                <h4 className="text-start d-flex align-items-center mt-2 mb-3">
                  <i className="me-2 fas ordino-icon-1 fa-chevron-circle-right" /> Depletion Screen Data
                </h4>
              </div>
            </div>

            <div className="row row-cols-md-2 row-cols-1">
              <div className="col">
                <DatasetPageCard title="Project DRIVE">
                  <p className="card-text">RNAi depletion screen data (RSA and ATARiS)</p>
                  <a className="card-link" href="https://doi.org/10.1016/j.cell.2017.07.005" data-testid="drive-link" target="_blank" rel="noopener noreferrer">
                    {' '}
                    McDonald III, E. R. et. al. Project DRIVE: A Compendium of Cancer Dependencies and Synthetic Lethal Relationships Uncovered by (2017).
                  </a>
                </DatasetPageCard>
              </div>
              <div className="col">
                <DatasetPageCard title="Avana CERES">
                  <p className="card-text">CRISPR-Cas9 depletion screen data</p>
                  <a className="card-link" href="https://doi.org/10.1038/ng.3984" data-testid="ceres-link" target="_blank" rel="noopener noreferrer">
                    Meyers, R. M. et. al. Computational correction of copy number effect improves specificity of CRISPR–Cas9 essentiality screens in cancer
                    cells. Nature Genetics 49, 1779–1784 (2017).
                  </a>
                </DatasetPageCard>
              </div>
            </div>
          </div>
          <OrdinoFooter />
        </div>
      </div>
    </>
  );
}
