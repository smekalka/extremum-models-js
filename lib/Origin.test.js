/*!
 * Module: @extremum/models
 * Test: class Origin
 * Copyright(c) Smekalka, 2017—2025
 * License: ISC
 */

'use strict';

import { Origin } from './Origin.mjs';
import { System } from './System.mjs';
import { _namespaces } from './_test.js';

//jest.spyOn(console, 'log');

describe('Origin class tests', () => {
	const slug = 'extremum';
	const name = 'Extremum';
	const uri = 'https://extremum.io/v0';
	const description = 'Extremum is a great+simple platform for backend and frontend.';
	const version = '4.0';
	
	const system = new System(
		'extremum',
		'Extremum',
		'https://extremum.io/v0',
		'Extremum is a great+simple platform for backend and frontend.',
		'4.0'
	);

	var origin = null;

	test('Create an Origin object.', () => {
		origin = new Origin(
			system, 
			'0123456789', 
			null,
			{
				name: 'Anton Chekhov',
				description: 'Great Russian writer.'
			}
		);

		expect(origin).toBeDefined();
		expect(origin).toHaveProperty('system', system);
		expect(origin).toHaveProperty('xid', '0123456789');
		expect(origin).toHaveProperty('uuid');
		expect(origin).toHaveProperty('extract');

		console.info("✅ A test Origin object created.");
		console.dir(origin, { colors: true, showHidden: false, depth: null });
	});

});
