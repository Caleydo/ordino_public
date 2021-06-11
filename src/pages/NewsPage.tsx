import * as React from 'react';
import {HeaderNavigation, OrdinoFooter, OrdinoScrollspy, OrdinoScrollspyItem} from 'ordino';

import v700_tourdino from 'ordino_public/dist/assets/pages/news/v700_tourdino.jpg';

import v800_gene_signature from 'ordino_public/dist/assets/pages/news/v800_gene_signature.jpg';
import v800_annotation_column from 'ordino_public/dist/assets/pages/news/v800_annotation_column.png';
import v800_data_download from 'ordino_public/dist/assets/pages/news/v800_data_download.png';

import v900_homepage from 'ordino_public/dist/assets/pages/news/v900_homepage.png';
import v900_start_menu from 'ordino_public/dist/assets/pages/news/v900_start_menu.png';
import v900_start_menu_tabs from 'ordino_public/dist/assets/pages/news/v900_start_menu_tabs.png';
import v900_application_help from 'ordino_public/dist/assets/pages/news/v900_application_help.png';
import v900_ranking_redesign from 'ordino_public/dist/assets/pages/news/v900_ranking_redesign.png';


const sections = [
  {
    id: 'v9-0-0',
    name: 'Version 9.0 (2021-06-15)',
    markup: () => (
      <>
        <p className="lead text-muted">
          This update contains more a whole new homepage, start menu, and various <b>usability improvements</b>.
        </p>

        <h4 className="my-4">Hello Ordino! 👋</h4>

        <p>
          With this release we provide a dedicated homepage for Ordino to welcome new and recurring users.
          The modern pages provide an overview of the Ordino features, loaded datasets, and publications.
          We also inform about the most recent changes and developments on this page.
        </p>

        <img className="img-fluid mb-4" src={v900_homepage} alt="The new Ordino Hompage welcomes its user." />

        <p>
          The application itself was moved to the <a href="./app" target="_blank" rel="noopener noreferrer"><code>/app</code> directory</a>.
          Please update your bookmarks if you want to access Ordino directly and to skip the homepage.
        </p>


        <h4 className="my-4">Start menu overhaul</h4>

        <p>
          In addition to the new homepage we designed an entirely new Ordino start menu.
          The new start menu is divided into three main tabs: datasets, sessions, and tours.
          Each tab has now more space and is structured into different sections to select or upload datasets,
          save a session, or start a tour.
        </p>


        <img className="img-fluid mb-4" src={v900_start_menu} alt="The new Ordino start menu." />

        <p>
          From an analysis you can now directly access these tab from the application header.
        </p>

        <img className="img-fluid mb-4" src={v900_start_menu_tabs} alt="Access the start menu tabs from the application header in your analysis." />


        <p>
          In case you need help or want give feedback or report a bug, click on the ?-icon in the application header.
        </p>

        <img className="img-fluid mb-4" src={v900_application_help} alt="Ordino at a glance integrated in the application." />

        <h4 className="my-4">A new look</h4>

        <p>
          We have improved the design and usability of the whole application in general
          and the ranking views in specific to make the usage easier and more appealing.
        </p>

        <img className="img-fluid mb-4" src={v900_ranking_redesign} alt="Face-lift of the ranking views and application user interface." />
      </>
    )
  },
  {
    id: 'v8-0-0',
    name: 'Version 8.0 (2021-03-24)',
    markup: () => (
      <>
        <p className="lead text-muted">
          This update contains more <b>data</b>, various <b>usability improvements</b>, and several <b>bug fixes</b>. The most important changes are:
        </p>
        <h4 className="my-4">New data</h4>

        <h5 className="mt-4">Gene Signature Scores</h5>

        <p>
          <i>Gene Signature Scores</i> are now available for cell lines and tissue samples (including GTEx, TCGA, and PDX models). These can be added using the <i>Add Column</i> dialog:
         </p>
        <img className=" img-fluid border border-ordino-gray-5" src={v800_gene_signature} alt="Gene Signature Score" />

        <p className="card-text mt-2">Currently, the following gene signature scores are available:</p>
        <ul>
          <li>
            NIBR_IFN (Novartis 38 Gene Interferon activity signature)
              </li>
          <li>
            MERCK18 (MERCK's 18 gene signature for PD1-inhibitor response)
              </li>
        </ul>


        <h4 className="my-4">Usability improvements</h4>
        <h5 className="mt-4">Annotation columns</h5>

        <p>
          It is now possible to add multiple "Annotation Columns" at once
              </p>
        <img className="img-fluid border border-ordino-gray-5" src={v800_annotation_column} alt="Annotation Column" />

        <h5 className="mt-4">Data download</h5>
        <p className="mt-2">
          The data download dialog has been improved
              </p>
        <img className="img-fluid border border-ordino-gray-5" src={v800_data_download} alt="Download Data" />
      </>
    )
  },
  {
    id: 'v7-0-0',
    name: 'Version 7.0 (2020-08-26)',
    markup: () => (
      <>
        <p className="lead text-muted">
          This update contains more <b>data</b>, many <b>new features</b>, various <b>improvements</b>, and a large number of <b>bug fixes</b>. The most important changes are:
      </p>

        <h4 className="my-4">New data</h4>

        <h5 className="mt-4">Database</h5>
        <p>
          All data has be been updated from hg19 to hg38!
            </p>

        <h5 className="mt-4">HLA-A type, Mutational Burden and MSI Status</h5>
        <p>
          Now, HLA-A type, Mutational Burden and MSI Status data is available for many cell line and tissue samples.<br />
        </p>
        <p>
          <i> How to access</i>: Open a list of cell lines 	&#8594; click on “+” to open the “add column” dialog 	&#8594; select "Annotation Columns" 	&#8594; select the data of interest.
        </p>

        <h4 className="my-4">Completely new features</h4>
        <h5 className="mt-4">Basic statistical analyses</h5>
        <img className="img-fluid mb-2" src={v700_tourdino} alt="Tourdino" />
        <p>
          It is now possible to do basic statistical analyses, like calculating the correlation of two columns, directly in Ordino.
      </p>
        <p>
          <i>How to access</i>: Click on the calculator icon on the right. This opens a new side-panel (highlighted in red in the screenshot above).<br /> There you can select which columns to compare and then get detailed information about the result.
      </p>

        <h4 className="my-4">Improved features</h4>

        <h5 className="mt-4">Improved column operations (filtering, sorting, etc)</h5>
        <p>
          <i>How to access</i>: click on any of the icons in the column headers.
            </p>
        <p>
          The column dialogs were harmonized.
        </p>
        <p>
          There is now a live preview. For instance, if you modify the filter setting of a column, you can see in the background how this will affect your list of genes, cell lines, and tissue samples.
        </p>
        <p>
          It is now possible to reset all filters at once in the right side-panel. <i>Access side-panel by clicking on the left-facing arrow in the menu on the right</i>.
        </p>

        <p>
          The grouping of text columns (like mutations) is now working much better (e.g., allowing you to split your cell lines by specific mutations). <i>How to access: click the “…” in the column header and then select “Group By”</i>.
      </p>

        <h5 className="mt-4">Interactive help tours</h5>
        <p>
          To make it easier for new users to get to know Ordino, we also added two additional interactive help tours that guide you through the application.
            </p>
        <p>
          <i>These can be accessed by clicking on the “?” in the upper right corner of Ordino</i>.
      </p>

        <h5 className="mt-4">Briefly noted</h5>

        <p>
          Improved look and feel of the list of cell lines, genes, and tissue samples.
         </p>
        <p>
          Collapsing and expanding of sample / gene groups is now recorded in the session history.
         </p>
        <p>
          The columns "AA mutated" and "DNA mutated" have been harmonized. There is now no category "Unknown" anymore, but missing values are handled the same way as in all other columns.
         </p>
        <p>
          File upload has been improved and now supports boolean (i.e., true/false) columns.
         </p>
      </>)
  },
  {
    id: 'v6-0-0',
    name: 'Version 6.0 (2019-10-14)',
    markup: () => (
      <>
        <p className="lead text-muted">
          This update contains new <b>features</b>, various <b>improvements</b>, and many <b>bug fixes</b>. The most important changes are:
      </p>
        <h5 className="mt-4">Session management</h5>
        <p >
          There is now an Improved menu for saving and loading of analysis sessions.
          </p>
        <p >
          This menu is now called "Analysis Session Management" and is available in the upper right corner.
          Advanced session sharing possibilities have been added. It is now possible to share an analysis session with individual people or a group of people.
          </p>
        <h5 className="mt-4">Session sharing</h5>
        <p>
          Advanced session sharing possibilities have been added. It is now possible to share an analysis session with individual people or a group of people.
          </p>
        <p>
          To do so, click on "Advanced" in the "Save Session" menu. The same is now possible for sharing uploaded data sets.
          </p>
        <h5 className="mt-4">Download data</h5>
        <p>
          The "Download Data" menu has been simplified.
          </p>
      </>
    )
  },
  {
    id: 'v5-1-0',
    name: 'Version 5.1 (2018-12-05)',
    markup: () => (
      <>
        <p className="lead text-muted">
          This update contains new <b>features</b>, <b>improvements</b>, and <b>bug fixes</b>. The most important changes are:
      </p>
        <h5 className="mt-4">Briefly noted</h5>
        <p>
          File upload is working again.
       </p>
        <p>
          The data up- and download now supports Excel files (*.xlsx).
       </p>
        <p>
          A guided tour explains the basic features of Ordino. You can start the tour by clicking on the '?' in the upper right corner.
       </p>
        <p>
          You can now copy gene and cell line lists from almost everywhere (e.g., comma or line separated) and paste them into the text field on the welcome page.
       </p>
        <p>
          The overview mode (last button on the right site) is now working for very large lists.
       </p>
        <p>
          Spearman correlation computation has been added to the "Co-expression" Detail View.
       </p>
      </>
    )
  },
  {
    id: 'v5-0-0',
    name: 'Version 5.0 (2018-11-07)',
    markup: () => (
      <>
        <p className="lead text-muted">
          This update contains more <b>data</b>, various <b>usability improvements</b>, and several <b>bug fixes</b>. The most important changes are:
      </p>

        <h5 className="mt-4">Improved column headers and column menus</h5>
        <p>Column headers start with gene/cell line name and information about data type.</p>
        <p>New filter and value mapping dialog for numeric columns (e.g., it is now possible to copy the value range from one column to another).</p>
        <p>Extended coloring options for numeric columns.</p>

        <h5 className="mt-4">Improved column sorting and grouping</h5>
        <p> The order of multiple sorting/grouping columns can now be explicitly specified in the side panel on the right (can be opened by clicking on the arrow on the right).</p>
        <p>The values of numeric columns can be grouped into an arbitrary number of bins.</p>
        <p>  The values of text columns can now be grouped.</p>

        <h5 className="mt-4"> Improved aggregated columns</h5>
        <p> Boxplot columns now show outliers.</p>
        <p> Heatmap columns now support mouse over to identify individual genes/cell lines/values.</p>
        <p>Heatmap columns now support complex color and value mapping.</p>

        <h5 className="mt-4"> Improved column types</h5>
        <p> Chromosomes are now correctly sorted.</p>
        <p> Gene start and end coordinates are now numeric columns allowing correct sorting (can for instance be used to draw copy number profiles).</p>

        <h5 className="mt-4"> Improved performance</h5>
        <p>  The overview mode (last button on the right panel) is now faster and works even with a larger number of columns.</p>

        <h5 className="mt-4"> Improved user interface</h5>
        <p>"Add column" menu simplified.</p>
        <p> Some features renamed to make it clearer what they do.</p>
        <p>A "Submit Feedback" button was added: By clicking on the button in the upper right corner (the life belt icon), you can easily provide feedback about Ordino (bug reports, features requests, etc).</p>


        <h5 className="mt-4"> Briefly noted</h5>
        <p> A few external detail views have been added.</p>
        <p> Extended "Data download" functionality.</p>

      </>
    )
  }
];



export function NewsPage() {
  return (
    <>
      <HeaderNavigation />
      <div className="position-relative py-6">
        <OrdinoScrollspy items={sections.map((section) => ({id: section.id, name: section.name}))}>
          {(handleOnChange) =>
            <>
              <div className="container pb-6">
                <div className="row">
                  <div className="col">
                    {sections.map((item, index) => {
                      return (
                        // `id` attribute must match the one in the scrollspy
                        <OrdinoScrollspyItem className="pt-6" id={item.id} key={item.name} index={index} handleOnChange={handleOnChange}>
                          <>
                            <h4 className="text-left mt-2 d-flex align-items-center mb-3"><i className="mr-2 ordino-icon-1 fas fa-chevron-circle-right"></i> {item.name}</h4>
                            <div className="card shadow-sm h-100">
                              <div className="card-body">
                                {item.markup()}
                              </div>
                            </div>
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
