import { Actions } from '../../../../../redux/actions';
import { ICanvasState } from '../../../../../components/Canvas/index';
import { List } from 'immutable';
import { IPoint } from '../../../../../common/index';
import { CanvasState } from '../../../../../components/Canvas/index';
import { paintToCanvas } from '../index';


const initialState: ICanvasState = {
	points: List<IPoint>(),
	size: 1,
	color: 'red',
	isPainting: false,
	dimension: {
		width: 500,
		height: 500
	}
};

describe('paintToCanvas reducer', () => {
	test('passing to reducer without state and unknown action returns default state', () => {
		const result = paintToCanvas(undefined, {
			type: 'something other',
		});
		expect(result).toMatchObject(initialState);
	});
	test('passing to reducer with add point action updates result with the point', () => {
		const point: IPoint = {
			x: 120,
			y: 120,
			size: 3,
			color: 'blue',
			isDragging: true
		};
		const result = paintToCanvas(undefined, {
			type: Actions.AddCanvasPoint,
			point
		});
		const properResult = CanvasState.create(initialState, point);
		expect(result).toMatchObject(properResult);
	});
	test('passing stop painting action to reducer creates state with stop painting prop to true', () => {
		const result = paintToCanvas(undefined, {
			type: Actions.SetCanvasNotPaintingAction
		});
		const properResult = CanvasState.createStopPainting(initialState);
		expect(result).toMatchObject(properResult);
	});
});