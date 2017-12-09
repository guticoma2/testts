import Actions from './Actions';
import ICanvasAction from './ICanvasAction';

export default (): ICanvasAction => ({
	type: Actions.SetCanvasNotPaintingAction,
});
