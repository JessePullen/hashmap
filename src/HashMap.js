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
		const hash = this.hash(key);
		const bucket = this.buckets[hash];

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
		const hash = this.hash(key);
		const bucket = this.buckets[hash];

		for (let item of bucket) {
			if (item[0] === key) {
				return item[1];
			}
		}
		return null;
	}
	has(key) {
		const hash = this.hash(key);
		const bucket = this.buckets[hash];

		for (let item of bucket) {
			if (item[0] === key) {
				return true;
			}
		}
		return false;
	}
}

// Index out of range error

// if (index < 0 || index >= buckets.length) {
//   throw new Error("Trying to access index out of bounds");
// }
