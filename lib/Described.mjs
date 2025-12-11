/*!
 * Module: @extremum/models
 * Mix-in: Described
 * Copyright(c) Smekalka, 2017—2025
 * License: ISC
 */

'use strict';

export const Described = (Base) =>
	class extends Base {
		description = null;
	};
