/*!
 * Module: @extremum/models
 * Test: class Descriptor
 * Copyright(c) Smekalka, 2017—2025
 * License: ISC
 */

'use strict';

import { Descriptor } from './Descriptor.mjs';
import { Model } from './Model.mjs';
import { randomUUID } from 'crypto';
import { _namespaces } from './_test.js';

//jest.spyOn(console, 'log');

describe('Descriptor class tests', () => {
	const model = new Model(
		'TestModel',
		'A test model.',
		_namespaces,
		'urn:extremum:TestModel',
		'urn:archetypes:Foo'
	);
	var descriptor = null;

	test('Create a Descriptor object.', () => {
		descriptor = new Descriptor(
			randomUUID(),
			model,
			_namespaces,
			'https://extremum.io/instances/test'
		);

		expect(descriptor).toBeDefined();
		expect(descriptor).toHaveProperty('uuid');
		expect(descriptor).toHaveProperty('namespaces');
		expect(descriptor).toHaveProperty('iri');
		expect(descriptor).toHaveProperty('model');
		expect(descriptor).toHaveProperty('archetype');
		expect(descriptor).toHaveProperty('created');
		expect(descriptor).toHaveProperty('added');
		expect(descriptor).toHaveProperty('updated');
		expect(descriptor).toHaveProperty('deleted');
		expect(descriptor).toHaveProperty('version');

		console.info("✅ A test descriptor created.");
		console.dir(descriptor, { colors: true, showHidden: false, depth: null });
	});

});