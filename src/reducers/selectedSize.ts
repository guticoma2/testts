
import { IChangeSizeAction, Actions } from '../actions';

const selectedSize = (state = 1, action: IChangeSizeAction) => {
	switch (action.type) {
		case Actions.ChangeSize:
			return action.size;
		default:
			return state;
	}
};

export default selectedSize;
