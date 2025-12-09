/*!
 * Module: @extremum/models
 * Class: Namespace
 * Copyright(c) Smekalka, 2017—2025
 * License: ISC
 */

'use strict';

export class Namespace {
	nid = null;
	uri = null;

	/**
	 * A Namespace instance constructor.
	 *
	 * @param {string} nid
	 * @param {string} uri
	 * @public
	 */
	constructor(nid, uri) {
		if (nid == null) throw new Error("'nid' parameter can't be null.");
		if (uri == null) throw new Error("'uri' parameter can't be null.");
		if (!(typeof nid == "string" || nid instanceof String)) throw new TypeError("'nid' parameter type mismatch.");
		if (!(typeof uri == "string" || uri instanceof String)) throw new TypeError("'uri' parameter type mismatch.");

		this.nid = nid;
		this.uri = uri;
	}

	/**
	 * Create a set of namespaces.
	 *
	 * @param {Array} namespaces
	 * @return {Namespace[]}
	 * @public
	 */
	static createNamespaces(namespaces) {
		const result = [];
		namespaces.forEach(element => {
			result.push(new Namespace(element.nid, element.uri));
		});

		return result;
	}
}
