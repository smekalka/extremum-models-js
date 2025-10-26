/*!
 * Module: @extremum/models
 * Class: ModelSet
 * Copyright(c) Smekalka, 2017—2025
 * License: ISC
 */

export class ModelSet {
	/**
	 * A ModelSet instance constructor.
	 *
	 * @param {string} name
	 * @param {string} iri
	 * @param {Namespace[]} namespaces
	 * @public
	 */
	constructor(name, iri, namespaces = []) {
		this.name = name;
		this.iri = iri;
		this.namespaces = namespaces;
		this.models = [];

		/*
		this = {
			"name":name,
			"iri": iri,
			"namespaces": namespaces,
			"models": []
		}
		*/
	}

	/**
	 * Create a blank instance with given IRI.
	 *
	 * @param {string} iri
	 * @param {string} type
	 * @param {string} archetype
	 * @param {Namespace[]} namespaces
	 * @return {Object}
	 * @public
	 */
	createInstance(iri) {
		return Model.createInstance(iri, this.type, this.archetype, this.namespaces);
	}

	/**
	 * Add a model to the ModelSet.
	 *
	 * @param {Model} model
	 * @return {null}
	 * @public
	 */
	add(model)
	{
		this.models.push(model);
	}

	/**
	 * Add a model to the ModelSet.
	 *
	 * @param {Model} model
	 * @return {boolean}
	 * @public
	 */
	remove(model)
	{
		const index = this.models.findIndex(function(item) { return (item === model); });
		if (index == -1) return false;

		this.models.splice(index, 1);
		return true;
	}

	/**
	 * Create a blank instance of a model with given IRI.
	 *
	 * @param {string} model
	 * @param {string} iri
	 * @return {Object}
	 * @public
	 */
	createInstance(model, iri) {
		const _model = this.models.findIndex(function(item) { return (item.name == model.name); });
		return _model.createInstance(iri);
	}
}
