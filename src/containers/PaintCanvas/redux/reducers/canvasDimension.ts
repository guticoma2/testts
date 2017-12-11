
import Canvas from '../../../../components/Canvas';
import { IUpdateCanvasDimensionAction, Actions } from '../../../../redux/actions';

const canvasDimension = (state = {
		width: Canvas.defaultProps.width,
		height: Canvas.defaultProps.height
	},                      action: IUpdateCanvasDimensionAction) => {
	switch (action.type) {
		case Actions.UpdateCanvasDimension:
			return action.dimension;
		default:
			return state;
	}
};

export default canvasDimension;