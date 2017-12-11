import { ICanvasAction, Actions } from '../../../../redux/actions';
import Canvas from '../../../../components/Canvas';
import { ICanvasState, CanvasState } from '../../../../components/Canvas/index';

const initialState: ICanvasState = {
	points: Canvas.defaultProps.points,
	size: Canvas.defaultProps.size,
	color: Canvas.defaultProps.color,
	isPainting: Canvas.defaultProps.isPainting,
	dimension: {
		width: Canvas.defaultProps.width,
		height: Canvas.defaultProps.height
	}
};

const paintToCanvas = (state = initialState, action: ICanvasAction) => {
	switch (action.type) {
		case Actions.AddCanvasPoint:
			if (action.point) {
				return CanvasState.create(state, action.point);
			}
			return state;
		case Actions.SetCanvasNotPaintingAction:
			return CanvasState.createStopPainting(state);
		default:
			return state;
	}
};

export default paintToCanvas;
