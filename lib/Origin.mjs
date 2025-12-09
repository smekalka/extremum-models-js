/*!
 * Module: @extremum/models
 * Class: Origin
 * Copyright(c) Smekalka, 2017—2025
 * License: ISC
 */

'use strict';

import { System } from './System.mjs';
import { randomUUID } from "crypto";

export class Origin {
	uuid = null;
	xid = null;
	system = null;
	extract = null;
	created = null;
	added = null;

	/**
	 * An Origin object constructor.
	 *
	 * @param {System} system
	 * @param {string} xid 
	 * @param {string} uuid
	 * @param {string} extract
	 * @public
	 */
	constructor(system, xid, uuid, extract) {
		if (system == null) throw new Error("'system' parameter can't be null.");
		if (!(system instanceof System)) throw new TypeError("'system' parameter must be of type System.");

		if (xid == null) throw new Error("'xid' parameter can't be null.");
		if (extract == null) throw new Error("'extract' parameter can't be null.");
		if (!(typeof xid == "string" || xid instanceof String)) throw new TypeError("'xid' parameter type mismatch.");
		//if (!(typeof extract == "string" || extract instanceof String)) throw new TypeError("'extract' parameter type mismatch.");

		uuid ??= randomUUID();
		const now = (new Date()).toISOString();

		this.system = system;
		this.uuid = uuid;
		this.xid = xid
		this.extract = extract;
		//this.created = created;
		this.added = now;
	}
}