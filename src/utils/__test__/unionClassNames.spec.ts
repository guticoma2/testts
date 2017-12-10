import unionClassNames from '../unionClassNames';

describe('unionClassNames', () => {
	test('class names should be concatenated with white spaces', () => {
		const result = unionClassNames('test', 'test1', 'test2');
		expect(result).toBe('test test1 test2');
	});

	test('empty white spaces in class names should be removed from result', () => {
		const result = unionClassNames('test ', ' test1  ', '  test2');
		expect(result).toBe('test test1 test2');
	});

	test('duplicate classes should be removed from result', () => {
		const result = unionClassNames('test1', 'test', 'test1', 'test1');
		expect(result).toBe('test1 test');
	});
});