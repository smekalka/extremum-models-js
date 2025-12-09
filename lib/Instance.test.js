/*!
 * Module: @extremum/models
 * Test: class Instance
 * Copyright(c) Smekalka, 2017—2025
 * License: ISC
 */

'use strict';

import { Instance } from './Instance.mjs';
import { Model } from './Model.mjs';
import { Origin } from './Origin.mjs';
import { _namespaces, _system } from './_test.js';

//jest.spyOn(console, 'log');

describe('Application class tests', () => {
	const model = new Model(
		'TestModel',
		'A test model.',
		_namespaces,
		'urn:extremum:TestModel',
		'urn:archetypes:Foo'
	);
	var instance = null;

	test('Create an instance.', () => {
		instance = new Instance(
			model,
			_namespaces,
			'https://extremum.io/instances/test'
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

	test('Create a descriptor of an instance. Test 1: static method.', () => {
		var descriptor = Instance.createDescriptor(instance);

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

	test('Create a descriptor of an instance. Test 2: this instance.', () => {
		var descriptor = instance.createDescriptor();

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

	test('Merge instance with an object.', () => {
		instance.merge({
			name: 'Anton Chekhov',
			description: 'Great Russian writer.'
		});

		expect(instance).toHaveProperty('name');
		expect(instance).toHaveProperty('description');

		console.info("✅ The instance has been updated.");
		console.dir(instance, { colors: true, showHidden: false, depth: null });
	});

	test('Add an origin of the instance.', () => {
		origin = new Origin(
			_system, 
			'0123456789', 
			null,
			{
				name: 'Anton Chekhov',
				description: 'Great Russian writer.'
			}
		);

		instance.addOrigin(origin);

		expect(instance._origins[0]).toBeDefined();
		expect(instance._origins[0]).toHaveProperty('system', _system);
		expect(instance._origins[0]).toHaveProperty('xid', '0123456789');
		expect(instance._origins[0]).toHaveProperty('uuid');
		expect(instance._origins[0]).toHaveProperty('extract');

		console.info("✅ A test Origin object added.");
		console.dir(instance._origins[0], { colors: true, showHidden: false, depth: null });
	});

});
