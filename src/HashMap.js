export default class HashMap {
	constructor(loadFactor = 0.75, capacity = 16) {
		this.loadFactor = loadFactor;
		this.capacity = capacity;
		// Creates an empty array as a bucket for number of capacity
		this.buckets = Array.from({ length: capacity }, () => []);
	}
	// Hash function was imported with the inclusion of % capacity to keep hash within range of capacity
	hash(key) {
		let hashCode = 0;

		const primeNumber = 31;
		for (let i = 0; i < key.length; i++) {
			hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
		}

		return hashCode;
	}
	set(key, value) {
		const index = this.hash(key);

		if (index < 0 || index >= this.buckets.length) {
			throw new Error('Trying to access index out of bounds');
		}

		const bucket = this.buckets[index];

		// Overwite value if key exists
		for (let item of bucket) {
			if (item[0] === key) {
				item[1] = value;
				return;
			}
		}

		bucket.push([key, value]);
	}
	get(key) {
		const index = this.hash(key);

		if (index < 0 || index >= this.buckets.length) {
			throw new Error('Trying to access index out of bounds');
		}

		const bucket = this.buckets[index];

		for (let item of bucket) {
			if (item[0] === key) {
				return item[1];
			}
		}
		return null;
	}
	has(key) {
		const index = this.hash(key);

		if (index < 0 || index >= this.buckets.length) {
			throw new Error('Trying to access index out of bounds');
		}

		const bucket = this.buckets[index];

		for (let item of bucket) {
			if (item[0] === key) {
				return true;
			}
		}
		return false;
	}
	remove(key) {
		const index = this.hash(key);

		if (index < 0 || index >= this.buckets.length) {
			throw new Error('Trying to access index out of bounds');
		}

		const bucket = this.buckets[index];
		const keyIndex = bucket.findIndex((item) => item[0] === key);

		if (keyIndex !== -1) {
			bucket.splice(keyIndex, keyIndex + 1);
			return true;
		}

		return false;
	}
	length() {
		let count = 0;
		for (const bucket of this.buckets) {
			count += bucket.length;
		}
		return count;
	}
	clear() {
		this.buckets = Array.from({ length: this.capacity }, () => []);
	}
	keys() {
		const result = [];
		for (const bucket of this.buckets) {
			for (const entries of bucket) {
				result.push(entries[0]);
			}
		}
		return result;
	}
	values() {
		const result = [];
		for (const bucket of this.buckets) {
			for (const entries of bucket) {
				result.push(entries[1]);
			}
		}
		return result;
	}
	entries() {
		const result = [];
		for (const bucket of this.buckets) {
			for (const entries of bucket) {
				result.push(entries);
			}
		}
		return result;
	}
}
