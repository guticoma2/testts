import { IPoint } from '../../../../common';

export default interface ICanvasAction {
	type: string;
	point?: IPoint;
}
