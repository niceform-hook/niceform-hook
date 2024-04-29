/*
 * This code is based on an implementation provided by Federico Brigante
 * [https://github.com/fregante/many-keys-map]
 * Copyright (c) Federico Brigante <me@fregante.com> (https://fregante.com)
 * release v2.0.1
 */

const nullKey = Symbol('null'); // `objectHashes` key for null

let keyCounter = 0;

export class ManyKeysMap<K, V> extends Map<K[], V> {
    
    private _objectHashes: WeakMap<any, any>
    private _symbolHashes: Map<any, any>
    private _publicKeys: Map<any, any>

	constructor() {
		super();

		this._objectHashes = new WeakMap();
		this._symbolHashes = new Map(); // https://github.com/tc39/ecma262/issues/1194
		this._publicKeys = new Map();

		const [pairs] = arguments; // Map compat
		if (pairs === null || pairs === undefined) {
			return;
		}

		if (typeof pairs[Symbol.iterator] !== 'function') {
			throw new TypeError(typeof pairs + ' is not iterable (cannot read property Symbol(Symbol.iterator))');
		}

		for (const [keys, value] of pairs) {
			this.set(keys, value);
		}
	}

	_getPublicKeys(keys, create = false) {
		if (!Array.isArray(keys)) {
			throw new TypeError('The keys parameter must be an array');
		}

		const privateKey = this._getPrivateKey(keys, create);

		let publicKey;
		if (privateKey && this._publicKeys.has(privateKey)) {
			publicKey = this._publicKeys.get(privateKey);
		} else if (create) {
			publicKey = [...keys]; // Regenerate keys array to avoid external interaction
			this._publicKeys.set(privateKey, publicKey);
		}

		return {privateKey, publicKey};
	}

	_getPrivateKey(keys, create = false) {
		const privateKeys: any[] = [];
		for (let key of keys) {
			if (key === null) {
				key = nullKey;
			}

			const hashes = typeof key === 'object' || typeof key === 'function' ? '_objectHashes' : (typeof key === 'symbol' ? '_symbolHashes' : false);

			if (!hashes) {
				privateKeys.push(key);
			} else if (this[hashes].has(key)) {
				privateKeys.push(this[hashes].get(key));
			} else if (create) {
				const privateKey = `@@mkm-ref-${keyCounter++}@@`;
				this[hashes].set(key, privateKey);
				privateKeys.push(privateKey);
			} else {
				return false;
			}
		}

		return JSON.stringify(privateKeys);
	}

	set(keys: K[], value: V) {
		const {publicKey} = this._getPublicKeys(keys, true);
		return super.set(publicKey, value);
	}

	get(keys: K[]): V | undefined {
		const {publicKey} = this._getPublicKeys(keys);
		return super.get(publicKey);
	}

	has(keys: K[]) {
		const {publicKey} = this._getPublicKeys(keys);
		return super.has(publicKey);
	}

	delete(keys: K[]) {
		const {publicKey, privateKey} = this._getPublicKeys(keys);
		return Boolean(publicKey && super.delete(publicKey) && this._publicKeys.delete(privateKey));
	}

	clear() {
		super.clear();
		this._symbolHashes.clear();
		this._publicKeys.clear();
	}

	get [Symbol.toStringTag]() {
		return 'ManyKeysMap';
	}

	get size() {
        // @ts-ignore
		return super.size;
	}
}