/*!
 * Module: @extremum/models
 * Test: class Namespace
 * Copyright(c) Smekalka, 2017—2025
 * License: ISC
 */

'use strict';

import { Namespace } from '../lib/Namespace.mjs';
import { _namespaces } from './_test.js';

//jest.spyOn(console, 'log');

describe('Namespace class tests', () => {
	const nid = 'archetypes';
	const uri = 'https://archetypes.dev/v0';
	var namespace = null;

	test('Create a namespace object.', () => {
		namespace = new Namespace(nid, uri);

		expect(namespace).toBeDefined();
		expect(namespace).toHaveProperty('nid', nid);
		expect(namespace).toHaveProperty('uri', uri);

		console.info("✅ A test namespace created.");
		console.dir(namespace, { colors: true, showHidden: false, depth: null });
	});

	test('Create a set of namespaces.', () => {
		const namespaces = Namespace.createNamespaces(_namespaces);

		expect(namespaces).toBeDefined();
		expect(namespaces).toEqual(
			expect.arrayOf(
				expect.objectContaining({
					nid: expect.any(String),
					uri: expect.any(String),
				}),
			),
		);

		console.info("✅ A test set of namespaces created.");
		console.dir(namespaces, { colors: true, showHidden: false, depth: null });
	});

});
