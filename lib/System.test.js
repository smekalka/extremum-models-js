/*!
 * Module: @extremum/models
 * Test: class System
 * Copyright(c) Smekalka, 2017—2025
 * License: ISC
 */

'use strict';

import { System } from './System.mjs';
import { _namespaces } from './_test.js';

//jest.spyOn(console, 'log');

describe('System class tests', () => {
	const slug = 'extremum';
	const name = 'Extremum';
	const uri = 'https://extremum.io/v0';
	const description = 'Extremum is a great+simple platform for backend and frontend.';
	const version = '4.0';
	
	var system = null;

	test('Create a System object.', () => {
		system = new System(slug, name, uri, description,version);

		expect(system).toBeDefined();
		expect(system).toHaveProperty('slug', slug);
		expect(system).toHaveProperty('name', name);
		expect(system).toHaveProperty('uri', uri);
		expect(system).toHaveProperty('description', description);
		expect(system).toHaveProperty('version', version);

		console.info("✅ A test System object created.");
		console.dir(system, { colors: true, showHidden: false, depth: null });
	});

});
