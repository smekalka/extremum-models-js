/*!
 * Module: @extremum/models
 * Class: Model
 * Copyright(c) Smekalka, 2017—2025
 * License: ISC
 */

export class Model {
	/**
	 * A Model instance constructor.
	 *
	 * @param {string} name
	 * @param {string} iri
	 * @param {string} type
	 * @param {string} archetype
	 * @param {Namespace[]} namespaces
	 * @public
	 */
	constructor(name, description, iri, archetype = null, namespaces = [], version = 0) {
		this.name = name;
		this.description = description;
		this.iri = iri;
		this.archetype = archetype;
		this.namespaces = namespaces;
		this.version = version;

		/*
		this = {
			"name": name,
			"iri": iri,
			"archetype": archetype,
			"namespaces": namespaces,
			"version": version
		}
		*/
	}

	/**
	 * Create a blank instance with given IRI and metadata.
	 *
	 * @param {string} iri
	 * @param {string} type
	 * @param {string} archetype
	 * @param {Namespace[]} namespaces
	 * @return {Object}
	 * @public
	 */
	static createInstance(iri, type, archetype, namespaces) {
		const timestamp = Date.now().toISOString();
		const uuid = randomUUID();
		const instance = {
			"uuid": uuid,
			"_namespaces": namespaces,
			"_self": {
				"iri": iri,
				"uuid": uuid,
				"type": type,
				"archetype": archetype,
				"version": 0,
				"added": timestamp,
				"updated": timestamp
			},
			"_origins": []
		}

		return instance;
	}

	/**
	 * Create a blank instance with given IRI.
	 *
	 * @param {string} iri
	 * @return {Object}
	 * @public
	 */
	createInstance(iri) {
		return Model.createInstance(iri, this.iri, this.archetype, this.namespaces);
	}
}
