/*!
 * Module: @extremum/models
 * Class: Collection
 * Copyright(c) Smekalka, 2017—2025
 * License: ISC
 */

'use strict';

import { Model } from './Model.mjs';
import { randomUUID } from 'crypto';

export class Collection {
	#items = null;

	models = null;
	uuid = null;

	/**
	 * A Collection object constructor.
	 *
	 * @param {Model[]} models
	 * @param {string} uuid
	 * @public
	 */
	constructor(models, uuid = null) {
		this.models = models;
		this.uuid ??= randomUUID();

		this.#items = [];
	}

	/**
	 * Get an instance by its UUID.
	 *
	 * @param {string} uuid
	 * @return {Instance}
	 * @public
	 */
	getItemByUuid(uuid) {
		return this.#items.find(function (item) { return (item.uuid == args.uuid); });
	}

	/**
	 * Get an instance by its IRI.
	 *
	 * @param {string} iri
	 * @return {Instance}
	 * @public
	 */
	getItemByIri(iri) {
		return this.#items.find(function (item) { return (item.iri == args.iri); });
	}

	add(instance) {
		this.#items.push(instance);
	}
}
