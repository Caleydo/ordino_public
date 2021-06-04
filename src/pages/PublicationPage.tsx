import * as React from 'react';
import {HeaderNavigation, OrdinoFooter, OrdinoScrollspy, OrdinoScrollspyItem} from 'ordino';

// tslint:disable-next-line: variable-name
const OrdinoPublication = () => {
  return <div className="row">
    <div className="shadow-sm card p-2" style={{overflow: 'hidden'}}>
      <div className="card-body">
        <iframe className="mb-2" width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/TIDUsEOsI_Y?autoplay=0" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture" allowFullScreen></iframe>
        <p className="card-text">
          Ordino is a web-based analysis tool for cancer genomics that allows users to flexibly rank,
          filter and explore genes, cell lines and tissue samples based on pre-loaded data,
          including The Cancer Genome Atlas, the Cancer Cell Line Encyclopedia and manually
          uploaded information. Interactive tabular data visualization that facilitates the
          user-driven prioritization process forms a core component of Ordino. Detail views
          of selected items complement the exploration. Findings can be stored, shared and
          reproduced via the integrated session management.
    </p>
        <p className="card-text">
          Ordino was published in the Oxford Bioinformatics journal. Please consider a citation
          when using Ordino and publishing your results.
    </p>
        <p className="text-muted card-text">
          Marc Streit, Samuel Gratzl, Holger Stitz, Andreas Wernitznig, Thomas Zichner, Christian Haslinger<br />
          <b>Ordino: visual analysis tool for ranking and exploring genes, cell lines, and tissue samples</b><br />
          <i>Bioinformatics, 35(17): 3140-3142, 2019.</i>
        </p>
      </div>
      <div className="card-footer">
        <a href="https://dx.doi.org/10.1093/bioinformatics/btz009" target="_blank" rel="noopener noreferrer" className="btn btn-light mr-2"><i className="mr-1 fas fa-globe-americas"></i> Publisher</a>
        <a href="https://academic.oup.com/bioinformatics/article-pdf/35/17/3140/29591819/btz009.pdf" target="_blank" className="btn btn-light mr-2"><i className="mr-1 fas fa-file-pdf"></i> Download</a>
        <a href="https://github.com/Caleydo/ordino_public" target="_blank" rel="noopener noreferrer" className="btn btn-light"><i className="mr-1 fab fa-github"></i> Source code</a>
      </div>
    </div>
  </div>;
};

// tslint:disable-next-line: variable-name
const TourdinoPublication = () => {
  return <div className="row">
    <div className="shadow-sm card p-2" style={{overflow: 'hidden'}}>
      <div className="card-body">
        <iframe className="mb-2" width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/k6EPm6i-Vw4?autoplay=0" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture" allowFullScreen></iframe>
        <p className="card-text">
          Seeking relationships and patterns in tabular data is a common data exploration task.
          To confirm hypotheses that are based on visual patterns observed during exploratory data analysis,
          users need to be able to quickly compare data subsets, and get further information on the significance of the result and the statistical test applied.
          Existing tools, however, either focus on the comparison of a single data type, such as comparing numerical attributes only, or provide little or no statistical evaluation to assess a hypothesis. To fill this gap,
          we present TourDino, a support view that helps users who are not experts in statistics to verify generated hypotheses and confirm insights gained during the exploration of tabular data.
          In TourDino we present an overview of the statistical significance of various row or column comparisons. On demand, we show further details, including the test score, a textual description, and a detail visualization explaining the results.
          To demonstrate the efficacy of our approach, we have integrated TourDino in the Ordino drug discovery platform for the purpose of identifying new drug targets.
              </p>
        <p className="card-text">
          {/* // TODO: Check if this text makes sense  */}
          Tourdino was presented in the EuroVis Workshop on Visual Analytics. Please consider a citation
          when using Ordino and publishing your results.
              </p>
        <p className="card-text text-muted">
          Klaus Eckelt, Patrick Adelberger, Thomas Zichner, Andreas Wernitznig, Marc Streit.<br />
          <b>TourDino: A Support View for Confirming Patterns in Tabular Data.</b><br />
          <i>EuroVis Workshop on Visual Analytics (EuroVA '19), 2019.</i></p>
      </div>
      <div className="card-footer">
        <a href="https://diglib.eg.org/handle/10.2312/eurova20191117" target="_blank" rel="noopener noreferrer" className="btn btn-light mr-2"><i className="mr-1 fas fa-globe-americas"></i>Publisher</a>
        <a href="https://diglib.eg.org/bitstream/handle/10.2312/eurova20191117/007-011.pdf?sequence=1&amp;isAllowed=y" target="_blank" className="btn btn-light mr-2"><i className="mr-1 fas fa-file-pdf"></i> Download</a>
        <a href="https://github.com/Caleydo/tourdino" target="_blank" rel="noopener noreferrer" className="btn btn-light"><i className="mr-1 fab fa-github"></i> Source code</a>
      </div>
    </div>
  </div>;
};

// tslint:disable-next-line: variable-name
const TagglePublication = () => {
  return <div className="row">
    <div className="shadow-sm card p-2" style={{overflow: 'hidden'}}>
      <div className="card-body">
        <iframe className="mb-2" width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/t50KgQKK8EQ?autoplay=0" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture" allowFullScreen></iframe>
        <p className="card-text">
          Most tabular data visualization techniques focus on overviews, yet many practical analysis tasks are concerned with investigating individual items of interest.
          At the same time, relating an item to the rest of a potentially large table is important. In this work we present Taggle, a tabular visualization technique for exploring and presenting large and complex tables. Taggle takes an item-centric, spreadsheet-like approach, visualizing each row in the source data individually using visual encodings for the cells. At the same time, Taggle introduces data-driven aggregation of data subsets. The aggregation strategy is complemented by interaction methods tailored to answer specific analysis questions, such as sorting based on multiple columns and rich data selection and filtering capabilities.
          We demonstrate Taggle using a case study conducted by a domain expert on complex genomics data analysis for the purpose of drug discovery.
      </p>
        <p className="card-text">
          Taggle was published in the Information Visualization journal. Please consider a citation
          when using Taggle and publishing your results.
      </p>
        <p className="card-text text-muted">
          Katarina Furmanova, Samuel Gratzl, Holger Stitz, Thomas Zichner, Miroslava Jaresova, Martin Ennemoser, Alexander Lex, Marc Streit.<br />
          <b>Taggle: Combining Overview and Details in Tabular Data Visualizations.</b><br />
          <i>Information Visualization, 19(2): 114-136, 2019.</i></p>
      </div>
      <div className="card-footer">
        <a href="https://dx.doi.org/10.1177/1473871619878085" target="_blank" rel="noopener noreferrer" className="btn btn-light mr-2"><i className="mr-1 fas fa-globe-americas"></i> Publisher</a>
        <a href="https://journals.sagepub.com/doi/pdf/10.1177/1473871619878085" target="_blank" className="btn btn-light mr-2"><i className="mr-1 fas fa-file-pdf"></i> Download</a>
        <a href="https://github.com/lineupjs/lineupjs" target="_blank" rel="noopener noreferrer" className="btn btn-light"><i className="mr-1 fab fa-github"></i> Source code</a>
      </div>
    </div>
  </div>;
};

const publications = [
  {
    id: 'ordino-publication',
    name: 'Ordino',
    icon: 'fas fa-book-open',
    factory: () => <OrdinoPublication />

  },
  {
    id: 'tourdino-publication',
    name: 'Tourdino',
    icon: 'fas fa-book-open',
    factory: () => <TourdinoPublication />

  },
  {
    id: 'taggle-publication',
    name: 'Taggle',
    icon: 'fas fa-book-open',
    factory: () => <TagglePublication />
  },
];


export function PublicationPage() {
  return (
    <>
      <HeaderNavigation />
      <div className="position-relative pt-6">
        <OrdinoScrollspy items={publications.map((publication) => ({id: publication.id, name: publication.name}))}>
          {(handleOnChange) =>
            <>
              <div className="ordino-publication-page container pb-6">
                <div className="row">
                  <div className="col">
                    {publications.map((item, index) => {
                      return (
                        // `id` attribute must match the one in the scrollspy
                        <OrdinoScrollspyItem className="pt-6" id={item.id} key={item.name} index={index} handleOnChange={handleOnChange}>
                          <>
                            <h4 className="text-left mt-2 mb-3"><i className={`mr-2 ordino-icon-2 ${item.icon}`}></i> {item.name}</h4>
                            <item.factory />
                          </>
                        </OrdinoScrollspyItem>
                      );
                    })}
                  </div>
                </div>
              </div>
              <OrdinoFooter></OrdinoFooter>
            </>
          }
        </OrdinoScrollspy>
      </div>
    </>
  );
}
