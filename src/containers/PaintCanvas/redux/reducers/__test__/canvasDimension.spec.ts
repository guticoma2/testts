import canvasDimension from '../canvasDimension';
import Canvas from '../../../../../components/Canvas';
import { Actions } from '../../../../../redux/actions';

describe('canvasDimension reducer', () => {
	test('passing to reducer without state and unknown action returns default value 500x500', () => {
		const result = canvasDimension(undefined, {
			type: 'invalid action type',
			dimension: {
				width: 100,
				height: 100
			}
		});
		expect(result).toMatchObject({
			height: Canvas.defaultProps.height,
			width: Canvas.defaultProps.width
		});
	});
	test('passing to reducer with proper action updates result with dimension', () => {
		const result = canvasDimension(undefined, {
			type: Actions.UpdateCanvasDimension,
			dimension: {
				width: 100,
				height: 100
			}
		});
		expect(result).toMatchObject({
			height: 100,
			width: 100
		});
	});
});
