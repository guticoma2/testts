import { IPoint } from '../../../common/index';

export default (context: CanvasRenderingContext2D, points: IPoint[], ndx: number) => {
	context.beginPath();
	const currentPoint = points[ndx];
	let previousPoint = points[ndx - 1];
	if (!currentPoint.isDragging) {
		previousPoint = Object.assign({ }, currentPoint, { x: currentPoint.x - 1 });
	}
	context.moveTo(previousPoint.x, previousPoint.y);
	context.lineWidth = previousPoint.size;
	context.strokeStyle = previousPoint.color;
	context.lineTo(currentPoint.x, currentPoint.y);
	context.closePath();
	context.stroke();
};
