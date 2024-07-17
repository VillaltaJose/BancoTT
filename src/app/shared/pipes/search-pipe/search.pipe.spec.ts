import { SearchPipe } from './search.pipe';

describe('SearchPipe', () => {
	let pipe: SearchPipe<any>;

	beforeEach(() => {
		pipe = new SearchPipe();
	});

	it('create an instance', () => {
		expect(pipe).toBeTruthy();
	});

	it('should return empty array when no values provided', () => {
		const result = pipe.transform([], 'searchTerm', 'field');
		expect(result).toEqual([]);
	});

	it('should return original array if no search term or field provided', () => {
		const values = [{ name: 'test1' }, { name: 'test2' }];

		let result = pipe.transform(values);
		expect(result).toEqual(values);
		result = pipe.transform(values, 'searchTerm');
		expect(result).toEqual(values);
	});

	it('should filter array based on search term and field', () => {
		const values = [
			{ name: 'test1' },
			{ name: 'another' },
			{ name: 'test2' },
		];
		const result = pipe.transform(values, 'test', 'name');
		expect(result).toEqual([{ name: 'test1' }, { name: 'test2' }]);
	});

	it('should ignore case', () => {
		const values = [
			{ name: 'Test1' },
			{ name: 'anothertest' },
			{ name: 'TEST2' },
		];
		const result = pipe.transform(values, 'test', 'name');
		expect(result).toEqual([
			{ name: 'Test1' },
			{ name: 'anothertest' },
			{ name: 'TEST2' },
		]);
	});

	it('should return empty array when the field does not exists', () => {
		const values = [{ name: 'test1' }, { name: 'anotherTest' }];
		const result = pipe.transform(values, 'test', 'nonexistentField');
		expect(result).toEqual([]);
	});
});
