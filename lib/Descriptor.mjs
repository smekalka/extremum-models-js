/*!
 * Module: @extremum/models
 * Class: Descriptor
 * Copyright(c) Smekalka, 2017—2025
 * License: ISC
 */

'use strict';

import { Model } from './Model.mjs';
import { randomUUID } from "crypto";

export class Descriptor {
	uuid = null;
	namespaces = null;
	iri = null;
	//type = null;
	model = null;
	archetype = null;
	created = null;
	added = null;
	updated = null;
	deleted = null;
	version = 0;

	/**
	 * A Descriptor object constructor.
	 *
	 * @param {string} model
	 * @param {string} uuid
	 * @param {Namespace[]} namespaces
	 * @param {string} iri
	 * @param {string} archetype
	 * @param {BigInt} version
	 * @param {Date} created
	 * @public
	 */
	constructor(uuid, model, namespaces = null, iri = null, version = 0, created = null) {
		if (uuid == null) throw new Error("'uuid' parameter can't be null.");
		if (model == null) throw new Error("'model' parameter can't be null.");
		if (!(model instanceof Model)) throw new TypeError("'model' parameter must be of type Model.");

		const now = (new Date()).toISOString();

		this.uuid = uuid;
		this.model = model;
		//this.type = model.iri;
		this.namespaces = namespaces;
		this.iri = iri;
		this.archetype = model.archetype;
		this.created = created;
		this.added = now;
		this.updated = now;
		this.deleted = null;
		this.version = version;
	}
}
