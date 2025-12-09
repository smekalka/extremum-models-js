/*!
 * Module: @extremum/models
 * Class: System
 * Copyright(c) Smekalka, 2017—2025
 * License: ISC
 */

'use strict';

export class System {
	slug = null;
	name = null;
	uri = null;
	description = null;
	version = null;

	/**
	 * A System instance constructor.
	 *
	 * @param {string} slug
	 * @param {string} name
	 * @param {string} uri
	 * @param {string} description
	 * @param {string} version
	 * @public
	 */
	constructor(slug, name, uri, description = null, version = null) {
		if (slug == null) throw new Error("'slug' parameter can't be null.");
		if (name == null) throw new Error("'name' parameter can't be null.");
		if (uri == null) throw new Error("'uri' parameter can't be null.");
		if (!(typeof slug == "string" || slug instanceof String)) throw new TypeError("'slug' parameter type mismatch.");
		if (!(typeof name == "string" || name instanceof String)) throw new TypeError("'name' parameter type mismatch.");
		if (!(typeof uri == "string" || uri instanceof String)) throw new TypeError("'uri' parameter type mismatch.");

		this.slug = slug;
		this.name = name;
		this.uri = uri;
		this.description = description;
		this.version = version;
	}
}
