import { IPoint } from '../../../common/index';

export default (context: CanvasRenderingContext2D, points: IPoint[], ndx: number) => {
	context.beginPath();
	context.moveTo(points[ndx - 1].x, points[ndx - 1].y);
	context.lineTo(points[ndx].x, points[ndx].y);
	context.closePath();
	context.stroke();
};
