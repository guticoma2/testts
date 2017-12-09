import { IChangeColorAction, Actions } from '../actions';

const selectedColor = (state = 'red', action: IChangeColorAction) => {
	switch (action.type) {
		case Actions.ChangeColor:
			return action.color;
		default:
			return state;
	}
};

export default selectedColor;
