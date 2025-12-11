/*!
 * Module: @extremum/models
 * Test: class Model
 * Copyright(c) Smekalka, 2017—2025
 * License: ISC
 */

'use strict';

import { Model } from '../lib/Model.mjs';
import { _namespaces } from './_test.js';

//jest.spyOn(console, 'log');

describe('Model class tests', () => {
	var model = null;

	test('Create a model.', () => {
		model = new Model(
			'TestModel',
			'A test model.',
			_namespaces,
			'urn:extremum:TestModel',
			'urn:archetypes:Foo'
		);

		expect(model).toBeDefined();
		expect(model).toHaveProperty('name', 'TestModel');

		console.info("✅ A test model created.");
		console.dir(model, { colors: true, showHidden: false, depth: null });
	});

	test('Create an instance of model.', () => {
			instance = model.createInstance(
				'https://extremum.io/instances/test',
				5
			);
	
			expect(instance).toBeDefined();
			expect(instance).toHaveProperty('uuid');
			expect(instance).toHaveProperty('iri');
			//expect(instance).toHaveProperty('_namespaces');
			expect(instance).toHaveProperty('_self');
			expect(instance).toHaveProperty('_origins');
	
			console.info("✅ A test instance created.");
			console.dir(instance, { colors: true, showHidden: false, depth: null });
		});

});
