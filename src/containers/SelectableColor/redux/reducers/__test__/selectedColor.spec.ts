import Canvas from '../../../../../components/Canvas';
import { Actions } from '../../../../../redux/actions';
import selectedColor from '../selectedColor';

describe('selectedColor reducer', () => {
	test('passing invalid action to reducer return default state', () => {
		const result = selectedColor(undefined, {
			type: 'invalid action type',
			color: 'blue'
		});
		expect(result).toBe(Canvas.defaultProps.color);
	});
	test('passing proper action to reducer changes default color', () => {
		const result = selectedColor(undefined, {
			type: Actions.ChangeColor,
			color: 'blue'
		});
		expect(result).toBe('blue');
	});
});