import { Actions } from '../../../../redux/actions';
import ICanvasAction from './ICanvasAction';

export default (): ICanvasAction => ({
	type: Actions.SetCanvasNotPaintingAction,
});
