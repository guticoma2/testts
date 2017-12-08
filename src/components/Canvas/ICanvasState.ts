import { List } from 'immutable';
import { IPoint, IDimension } from '../../common';

export default interface ICanvasState {
    points: List<IPoint>
    size: number
    color: string
    isPainting: boolean
    dimension: IDimension
}