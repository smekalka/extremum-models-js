/*!
 * Module: @extremum/models
 * Class: Instance
 * Copyright(c) Smekalka, 2017—2025
 * License: ISC
 */

'use strict';

import { Model } from './Model.mjs';
import { Descriptor } from './Descriptor.mjs';
import { Origin } from './Origin.mjs';
import { randomUUID } from 'crypto';
//import { merge as _merge } from 'lodash';
import _ from 'lodash';

export class Instance {
	#modified = false;

	uuid = null;
	iri = null;
	_self = null;
	_origins = null;

	/**
	 * An Instance constructor.
	 *
	 * @param {Model} model
	 * @param {Namespace[]} namespaces
	 * @param {string} iri
	 * @param {BigInt} version
	 * @public
	 */
	constructor(model, namespaces = [], iri = null, version = 0) {
		if (model == null) throw new Error("'model' parameter can't be null.");
		if (!(model instanceof Model)) throw new TypeError("'model' parameter must be of type Model.");
		
		this.uuid = randomUUID();
		this.iri = iri,
		this._self = new Descriptor(this.uuid, model, namespaces, iri, version);
		this._origins = [];
	}

	[Symbol.dispose]() {
		if (this.#modified) {
			this.sync();
		}
	}

	get model() { return this._self.model; }

	get namespaces() { return this._self.namespaces; }

	static createDescriptor(instance) {
		if (instance == null) throw new Error("'instance' parameter can't be null.");
		if (!(instance instanceof Instance)) throw new TypeError("'instance' parameter must be of type Instance.");

		return new Descriptor(
			instance.uuid,
			instance.model,
			instance.namespaces,
			instance.iri,
			instance.version,
			instance.created
		);
	}

	createDescriptor() {
		return Instance.createDescriptor(this);
	}

	/**
	 * Merges given delta with the instance.
	 *
	 * @param {Object} delta
	 * @public
	 */
	merge(delta) {
		if (delta == null) return;
		//_merge(this, delta);
		_.merge(this, delta);

		this.#modified = true;
	}

	/**
	 * Applies given patch to the instance.
	 *
	 * @param {Patch} patch
	 * @public
	 */
	patch(patch) {
		// ...

		this.#modified = true;
	}

	/**
	 * Adds an origin to the instance.
	 *
	 * @param {Origin} origin
	 * @public
	 */
	addOrigin(origin) {
		if (origin == null) throw new Error("'origin' parameter can't be null.");
		if (!(origin instanceof Origin)) throw new TypeError("'origin' parameter must be of type Instance.");

		this._origins.push(origin);
		this.#modified = true;
	}

	sync() {
		// ...

		this.#modified = false;
	}
}
