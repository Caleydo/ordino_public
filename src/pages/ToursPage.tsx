import * as React from 'react';
import { HeaderNavigation, OrdinoFooter, ToursSection } from 'ordino';
import { I18nextManager } from 'visyn_core/i18n';
import { useAsync } from 'visyn_core/hooks';
import { PluginRegistry } from 'visyn_core/plugin';
import { TourUtils, ITDPTourExtensionDesc } from 'tdp_core';

export function ToursPage() {
  const loadTours = React.useMemo(
    () => async () => {
      // initialize i18n now because it hasn't been initialized before on the homepage
      // and we use language strings in the `ToursSection` and `TourCard` component
      await I18nextManager.getInstance().initI18n();

      const tourEntries = PluginRegistry.getInstance()
        .listPlugins(TourUtils.EXTENSION_POINT_TDP_TOUR)
        .map((d) => d as ITDPTourExtensionDesc);
      return Promise.all(tourEntries.map((tour) => tour.load()));
    },
    [],
  );

  const { status, value: tours } = useAsync(loadTours, []);

  const beginnerTours = tours?.filter((tour) => tour.desc.level === 'beginner');
  const advancedTours = tours?.filter((tour) => tour.desc.level === 'advanced');

  return (
    <>
      <HeaderNavigation />
      <div className="position-relative pt-6" data-testid="tours-page">
        <div className="ordino-container">
          {status === 'success' ? (
            <div className="mt-9 mb-6 container tours-tab">
              <p className="lead text-gray-600">Learn more about Ordino by taking an interactive guided tour</p>
              {beginnerTours ? (
                <ToursSection level="beginner" tours={beginnerTours} hrefBase="/app/?tour={id}" data-testid={`${beginnerTours}-tour-{id}`} />
              ) : null}
              {advancedTours ? <ToursSection level="advanced" tours={advancedTours} hrefBase="/app/?tour={id}" /> : null}
            </div>
          ) : null}
          <OrdinoFooter />
        </div>
      </div>
    </>
  );
}
