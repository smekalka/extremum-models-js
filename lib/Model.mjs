/*!
 * Module: @extremum/models
 * Class: Model
 * Copyright(c) Smekalka, 2017—2025
 * License: ISC
 */

'use strict';

import { Instance } from './Instance.mjs';

export class Model {
	name = null;
	description = null;
	namespaces = null;
	iri = null;
	archetype = null;
	version = 0;

	/**
	 * A Model instance constructor.
	 *
	 * @param {string} name
	 * @param {string} description
	 * @param {Namespace[]} namespaces
	 * @param {string} iri
	 * @param {string} archetype
	 * @param {BigInt} version
	 * @public
	 */
	constructor(name, description, namespaces, iri, archetype = null, version = 0) {
		if (!(typeof name == "string" || name instanceof String)) throw new TypeError("'name' parameter type mismatch.");
		if (!(typeof description == "string" || description instanceof String)) throw new TypeError("'description' parameter type mismatch.");

		this.name = name;
		this.description = description;
		this.namespaces = namespaces;
		this.iri = iri;
		this.archetype = archetype;
		this.version = version;
	}

	/**
	 * Create an instance of model with given IRI.
	 *
	 * @param {string} iri
	 * @return {Instance}
	 * @public
	 */
	createInstance(iri, version = 0) {
		return new Instance(this, this.namespaces, iri, version);
	}
}
