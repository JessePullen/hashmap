import HashMap from '../src/HashMap.js';

test('Method takes a string key and produces a hash code within range of capacity', () => {
	let hashMap = new HashMap(0.75, 16);

	expect(hashMap.hash('cat')).toBe(6);
	expect(hashMap.hash('hello')).toBe(2);
	expect(hashMap.hash('apple')).toBe(10);
});
