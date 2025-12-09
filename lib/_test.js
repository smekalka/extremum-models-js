/*!
 * Module: @extremum/models
 * Common test objects
 * Copyright(c) Smekalka, 2017—2025
 * License: ISC
 */

import { System } from '../index.mjs';

export const _namespaces = [
	{
		nid: 'archetypes',
		uri: 'https://archetypes.dev/v0'
	},
	{
		nid: 'extremum',
		uri: 'https://schema.extremum.io/v4'
	}
];

export const _system = new System(
	'extremum',
	'Extremum',
	'https://extremum.io/v0',
	'Extremum is a great+simple platform for backend and frontend.',
	'4.0'
);
