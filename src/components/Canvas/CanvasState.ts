import { List } from 'immutable';
import { IPoint, IDimension } from '../../common';
import { ICanvasState } from './';

class CanvasState implements ICanvasState {
	dimension: IDimension;
	width: number;
	height: number;
	isPainting: boolean;
	points: List<IPoint>;
	size: number;
	color: string;
	static create(state: ICanvasState, point: IPoint): ICanvasState {
		return Object.assign({ }, state, {
			points: state.points.push(point),
			isPainting: true
		});
	}
	static createWithNewSize(state: ICanvasState, nextSize: number): ICanvasState {
		return Object.assign({ }, state, {
			size: nextSize
		});
	}
	static createWithNewColor(state: ICanvasState, nextColor: string): ICanvasState {
		return Object.assign({ }, state, {
			color: nextColor
		});
	}
	static createStopPainting(state: ICanvasState): ICanvasState {
		return Object.assign({ }, state, { isPainting: false });
	}
	static createWithDimensions(state: ICanvasState, dimension: IDimension) {
		return Object.assign({ }, state, { dimension });
	}
}

export default CanvasState;
