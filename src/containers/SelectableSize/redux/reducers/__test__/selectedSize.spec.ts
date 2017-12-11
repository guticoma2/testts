import Canvas from '../../../../../components/Canvas';
import { Actions } from '../../../../../redux/actions';
import selectedSize from '../selectedSize';

describe('selectedColor reducer', () => {
	test('passing invalid action to reducer return default state', () => {
		const result = selectedSize(undefined, {
			type: 'invalid action type',
			size: 2
		});
		expect(result).toBe(Canvas.defaultProps.size);
	});
	test('passing proper action to reducer changes default color', () => {
		const result = selectedSize(undefined, {
			type: Actions.ChangeSize,
			size: 2
		});
		expect(result).toBe(2);
	});
});