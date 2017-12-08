import { List } from 'immutable';
import { IPoint } from '../../common';

export default interface ICanvasProps {
    theme: {
        title: string
        canvas: string
        container: string
    },
    title: string
    height?: number
    width?: number
    points: List<IPoint>
};