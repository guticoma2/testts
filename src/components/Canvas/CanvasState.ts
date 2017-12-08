import { List } from 'immutable';
import { IPoint, IDimension } from '../../common';
import { ICanvasState, ICanvasProps } from './';

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
	static getInitialState(props?: ICanvasProps): ICanvasState {
		return {
			points: List<IPoint>(),
			isPainting: false,
			color: '#df4b26',
			size: 5,
			dimension: {
				width: props ? props.width || 200 : 200,
				height: props ? props.height || 200 : 200
			}
		};
	}
	static createWithDimensions(state: ICanvasState, dimension: IDimension) {
		return Object.assign({ }, state, { dimension });
	}
}

export default CanvasState;
