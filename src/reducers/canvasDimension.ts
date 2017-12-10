
import { IUpdateCanvasDimensionAction, Actions } from '../actions';

const canvasDimension = (state = { width: 500, height: 500 }, action: IUpdateCanvasDimensionAction) => {
	switch (action.type) {
		case Actions.UpdateCanvasDimension:
			return action.dimension;
		default:
			return state;
	}
};

export default canvasDimension;