/*!
 * Module: @extremum/models
 * Class: UUID
 * Copyright(c) Smekalka, 2017—2025
 * License: ISC
 */

'use strict';

import { randomUUID } from 'crypto';

const HEX_VALUES_OF_BYTE = Array.from({ length: 256 }, (_, i) => i.toString(16).padStart(2, '0'));
const UUID_REGEX = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i;

export class UUID {
	#bytes = new Uint8Array(16);

	static NIL = new UUID('00000000-0000-0000-0000-000000000000');
	static MAX = new UUID('ffffffff-ffff-ffff-ffff-ffffffffffff');

	constructor(uuid) {
		if (uuid == null) {
			this.#bytes = UUID.parse(randomUUID());
		}
		else if (typeof uuid === 'string') {
			this.#bytes = UUID.parse(uuid);
		}
		else if (uuid instanceof UUID) {
			this.#bytes = new Uint8Array(uuid.#bytes);
		}
		else if (uuid instanceof Uint8Array && uuid.length == 16) {
			this.#bytes = new Uint8Array(uuid);
		}
	}

	get bytes() { return this.#bytes; }

	equals(uuid) {
		if (uuid == null) { return false; }

		let _bytes;
		
		if (typeof uuid === 'string') {
			_bytes = UUID.parse(uuid);
		}
		else if (uuid instanceof UUID) {
			_bytes = uuid.bytes;
		}
		else if (uuid instanceof Uint8Array && uuid.length == 16) {
			_bytes = uuid;
		}

		return this.#bytes.length === _bytes.length && this.#bytes.every((element, index) => element === _bytes[index]);
	}

	[Symbol.toPrimitive](hint) {
		if (hint === "string") {
			return UUID.stringify(this.#bytes);
		}
		return null;
	}

	toString() {
		return UUID.stringify(this.#bytes);
	}

	valueOf() {
		this.#bytes.valueOf();
	}

	static v4() {
		return new UUID(randomUUID());
	}

	static stringify(value) {
		if (value instanceof Uint8Array && value.length == 16) {
			let string = new String();
			for (let i = 0; i < 16; i++) {
				string += HEX_VALUES_OF_BYTE[value[i]];
				//string += value[i].toString(16).padStart(2, '0');
				if (i === 3 || i === 5 || i === 7 || i === 9) {
					string += '-';
				}
			}
			return string;
		}
		else{
			return value.toString();
		}
	}

	static validate(string) {
		return typeof string === 'string' && UUID_REGEX.test(string);
	}

	static parse(string) {
		if (!UUID.validate(string)) {
			throw TypeError('Invalid UUID');
		}

		let v;
		return Uint8Array.of(
			(v = parseInt(string.slice(0, 8), 16)) >>> 24,
			(v >>> 16) & 0xff,
			(v >>> 8) & 0xff,
			v & 0xff,
			(v = parseInt(string.slice(9, 13), 16)) >>> 8,
			v & 0xff,
			(v = parseInt(string.slice(14, 18), 16)) >>> 8,
			v & 0xff,
			(v = parseInt(string.slice(19, 23), 16)) >>> 8,
			v & 0xff,
			((v = parseInt(string.slice(24, 36), 16)) / 0x10000000000) & 0xff,
			(v / 0x100000000) & 0xff,
			(v >>> 24) & 0xff,
			(v >>> 16) & 0xff,
			(v >>> 8) & 0xff,
			v & 0xff
		);
	}
};
