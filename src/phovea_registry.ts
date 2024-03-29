/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */

import { PluginRegistry } from 'visyn_core/plugin';
import reg from './phovea';
/**
 * build a registry by registering all phovea modules
 */
// other modules
import 'ordino/dist/phovea_registry';
// self
PluginRegistry.getInstance().register('ordino_public', reg);
