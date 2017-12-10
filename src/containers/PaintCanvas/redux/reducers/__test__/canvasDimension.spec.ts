import canvasDimension from '../canvasDimension';
import { Actions } from '../../../../../redux/actions';

describe('canvasDimension reducer', () => {
	test('passing to reducer without state and unknown action returns default value 500x500', () => {
		const result = canvasDimension(undefined, {
			type: 'something other',
			dimension: {
				width: 100,
				height: 100
			}
		});
		expect(result).toMatchObject({
			height: 500,
			width: 500
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
