export default class HashMap {
	constructor(loadFactor = 0.75, capacity = 16) {
		this.loadFactor = loadFactor;
		this.capacity = capacity;
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
}

// Index out of range error

// if (index < 0 || index >= buckets.length) {
//   throw new Error("Trying to access index out of bounds");
// }
