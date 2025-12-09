/*!
 * Module: @extremum/models
 * Test: class Collection
 * Copyright(c) Smekalka, 2017—2025
 * License: ISC
 */

'use strict';

import { Collection } from './Collection.mjs';
import { Model } from './Model.mjs';
import { _namespaces } from './_test.js';

//jest.spyOn(console, 'log');

describe('Collection class tests', () => {
    const model = new Model(
        'TestModel',
        'A test model.',
        _namespaces,
        'urn:extremum:TestModel',
        'urn:archetypes:Foo'
    );
    var collection = null;

    test('Create a Collection object.', () => {
        collection = new Collection([model]);

        expect(collection).toBeDefined();
        expect(collection).toHaveProperty('models');
        expect(collection).toHaveProperty('uuid');

        console.info("✅ A test collection created.");
        console.dir(collection, { colors: true, showHidden: false, depth: null });
    });

});