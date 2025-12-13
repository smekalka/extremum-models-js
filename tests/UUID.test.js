/*!
 * Module: @extremum/models
 * Test: class UUID
 * Copyright(c) Smekalka, 2017—2025
 * License: ISC
 */

'use strict';

import { UUID } from '../lib/UUID.mjs';

//jest.spyOn(console, 'log');

describe('UUID class tests', () => {

	test('Create a UUID object.', () => {
		const uuid = new UUID();

		console.log("UUID: %s", uuid);

		console.info("✅ A test UUID object created.");
		console.dir(uuid, { colors: true, showHidden: false, depth: null });

		expect(uuid).toBeDefined();
		expect(uuid).toHaveProperty('bytes');
	});

	test('Compare two UUID objects. Test 1.', () => {
		const uuid1 = new UUID();
		const uuid2 = new UUID();

		console.log("UUID 1: %s", uuid1);
		console.log("UUID 2: %s", uuid2);

		expect(uuid1 == uuid2).toBeFalsy();
	});

	test('Compare two UUID objects. Test 2.', () => {
		const uuid1 = new UUID();
		const uuid2 = new UUID(uuid1);

		console.log("UUID 1: %s", uuid1);
		console.log("UUID 2: %s", uuid2);

		expect(uuid1.equals(uuid2)).toBeTruthy();
	});

});
