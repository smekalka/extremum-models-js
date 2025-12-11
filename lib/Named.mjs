/*!
 * Module: @extremum/models
 * Mix-in: Named
 * Copyright(c) Smekalka, 2017—2025
 * License: ISC
 */

'use strict';

export const Named = (Base) =>
	class extends Base {
		slug = null;
		name = null;
	};
