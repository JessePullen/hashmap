import HashMap from '../src/HashMap.js';

test('Hash method takes a string key and produces a hash code within range of capacity', () => {
	let hashMap = new HashMap(0.75, 16);

	expect(hashMap.hash('cat')).toBe(6);
	expect(hashMap.hash('hello')).toBe(2);
	expect(hashMap.hash('apple')).toBe(10);
});

test('Set takes a key and a value assigned to the key, this should overwite existing key to new value', () => {
	let hashMap = new HashMap(0.75, 16);

	hashMap.set('Carlos', 'I am the old value.');

	expect(hashMap.get('Carlos')).toBe('I am the old value.');

	hashMap.set('Carlos', 'I am the new value.');

	expect(hashMap.get('Carlos')).toBe('I am the new value.');
});

test('Get returns value of key or returns null', () => {
	let hashMap = new HashMap(0.75, 16);

	expect(hashMap.get('Test')).toBe(null);
});

test('Inputting the value should return true or false based on whether the key is present', () => {
	let hashMap = new HashMap(0.75, 16);

	expect(hashMap.has('Carlos')).toBe(false);

	hashMap.set('Carlos', 'I am the old value.');

	expect(hashMap.has('Carlos')).toBe(true);
});

test('Inputting a key should remove the entry and return true or return false if key is not in hashmap', () => {
	let hashMap = new HashMap(0.75, 16);

	expect(hashMap.remove('Carlos')).toBe(false);

	hashMap.set('Carlos', 'I am the old value.');

	expect(hashMap.remove('Carlos')).toBe(true);
	expect(hashMap.has('Carlos')).toBe(false);
});
