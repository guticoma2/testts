import Canvas from '../../../../components/Canvas';
import { IChangeColorAction, Actions } from '../../../../redux/actions';

const selectedColor = (state = Canvas.defaultProps.color, action: IChangeColorAction) => {
	switch (action.type) {
		case Actions.ChangeColor:
			return action.color;
		default:
			return state;
	}
};

export default selectedColor;
