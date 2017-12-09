import Actions from './Actions';
import { IPoint } from '../common';
import ICanvasAction from './ICanvasAction';

export default (point: IPoint): ICanvasAction => ({
	type: Actions.AddCanvasPoint,
	point
});
