import { List } from 'immutable';
import { IPoint, IDimension } from '../../common';

export default interface ICanvasProps {
    height?: number
    width?: number
    points: List<IPoint>
    color: string
    size: number
    isPainting: boolean
    onMouseDown(point: IPoint): void
	onMouseLeave(): void
	onMouseMove(point: IPoint): void
    onMouseUp(): void
    onUpdateDimension(dimension: IDimension): void
};