import { ICanvasAction, Actions } from '../actions';
import { ICanvasState, CanvasState } from '../components/Canvas/index';
import { List } from 'immutable';
import { IPoint } from '../common/index';

const initialState: ICanvasState = {
	points: List<IPoint>(),
	size: 1,
	color: 'red',
	isPainting: false,
	dimension: {
		width: 200,
		height: 200
	}
};

const paintToCanvas = (state = initialState, action: ICanvasAction) => {
	switch (action.type) {
		case Actions.AddCanvasPoint:
			if (action.point) {
				return CanvasState.create(state, action.point);
			}
		case Actions.SetCanvasNotPaintingAction:
			return CanvasState.createStopPainting(state);
		default:
			return state;
	}
};

export default paintToCanvas;
