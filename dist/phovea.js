import { PluginRegistry } from 'phovea_core';
import { EP_PHOVEA_CORE_LOCALE } from 'phovea_core';
import { EP_PHOVEA_CLUE_PROVENANCE_GRAPH } from 'phovea_clue';
export default function (registry) {
    //registry.push('extension-type', 'extension-id', function() { return import('./extension_impl'); }, {});
    // generator-phovea:begin
    registry.push('ordinoWelcomeView', 'ordinoPublicWelcomeView', function () { return import('./app/WelcomeView'); }, {
        factory: 'new WelcomeView',
        priority: 20
    });
    registry.push(EP_PHOVEA_CORE_LOCALE, 'ordinoPublicTdpLocaleEN', function () {
        return import('./locales/en/tdp.json').then(PluginRegistry.getInstance().asResource);
    }, {
        ns: 'tdp',
    });
    registry.push(EP_PHOVEA_CLUE_PROVENANCE_GRAPH, 'dismissMigrationPopup', () => import('./app/WelcomeView'), {
        factory: 'dismissMigrationPopup'
    });
    // generator-phovea:end
}
//# sourceMappingURL=phovea.js.map