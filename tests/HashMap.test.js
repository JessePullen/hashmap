import HashMap from '../src/HashMap.js';

test('Hash method takes a string key and produces a hash code within range of capacity', () => {
	const hashMap = new HashMap(0.75, 16);

	expect(hashMap.hash('cat')).toBe(6);
	expect(hashMap.hash('hello')).toBe(2);
	expect(hashMap.hash('apple')).toBe(10);
});

test('Set takes a key and a value assigned to the key, this should overwite existing key to new value', () => {
	const hashMap = new HashMap(0.75, 16);

	hashMap.set('Carlos', 'I am the old value.');

	expect(hashMap.get('Carlos')).toBe('I am the old value.');

	hashMap.set('Carlos', 'I am the new value.');

	expect(hashMap.get('Carlos')).toBe('I am the new value.');
});

test('Get returns value of key or returns null', () => {
	const hashMap = new HashMap(0.75, 16);

	expect(hashMap.get('Test')).toBe(null);
});

test('Inputting the value should return true or false based on whether the key is present', () => {
	const hashMap = new HashMap(0.75, 16);

	expect(hashMap.has('Carlos')).toBe(false);

	hashMap.set('Carlos', 'I am the old value.');

	expect(hashMap.has('Carlos')).toBe(true);
});

test('Inputting a key should remove the entry and return true or return false if key is not in hashmap', () => {
	const hashMap = new HashMap(0.75, 16);

	expect(hashMap.remove('Carlos')).toBe(false);

	hashMap.set('Carlos', 'I am the old value.');

	expect(hashMap.remove('Carlos')).toBe(true);
	expect(hashMap.has('Carlos')).toBe(false);
});

test('Throws an error when hash returns an out-of-bounds index', () => {
	const hashMap = new HashMap(0.75, 16);

	// spyOn allows custom return value of mock hash function
	jest.spyOn(hashMap, 'hash').mockReturnValue(16);

	// Anonymous function lets function run before checking for error toThrow
	expect(() => hashMap.set('test', 'value')).toThrow('Trying to access index out of bounds');
});

test('Length should return number of stored keys inside the hash map', () => {
	const hashMap = new HashMap(0.75, 16);

	expect(hashMap.length()).toBe(0);

	hashMap.set('Carlos', 'I am the old value.');

	expect(hashMap.length()).toBe(1);
});
