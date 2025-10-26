/*!
 * Module: @extremum/models
 * Class: Namespace
 * Copyright(c) Smekalka, 2017—2025
 * License: ISC
 */

export class Namespace {
	/**
	 * A Namespace instance constructor.
	 *
	 * @param {string} nid
	 * @param {string} uri
	 * @public
	 */
	constructor(nid, uri) {
		this.nid = nid;
		this.uri = uri;

		//this = { "nid": nid, "uri": uri }
	}
}
