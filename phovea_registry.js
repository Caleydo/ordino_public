/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */

import {register} from 'phovea_core';
import reg from './src/phovea';
/**
 * build a registry by registering all phovea modules
 */
//other modules
import 'ordino/phovea_registry.js';
//self
register('ordino_public', reg);
