
import Canvas from '../../../../components/Canvas';
import { IChangeSizeAction, Actions } from '../../../../redux/actions';

const selectedSize = (state = Canvas.defaultProps.size, action: IChangeSizeAction) => {
	switch (action.type) {
		case Actions.ChangeSize:
			return action.size;
		default:
			return state;
	}
};

export default selectedSize;
