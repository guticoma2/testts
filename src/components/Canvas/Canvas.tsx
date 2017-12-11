import * as React from 'react';
import { ICanvasProps, ICanvasState } from './';
import { writeCanvasPath, getCanvasSize } from './utils';
import { getCoordinatesFromMouseEvent } from '../../utils';
import styles from './module-css/canvas.sass';
import { List } from 'immutable';
import { IPoint } from '../../common/index';

class Canvas extends React.Component<ICanvasProps, ICanvasState> {
	static defaultProps: ICanvasProps = {
		height: 500,
		width: 500,
		points: List<IPoint>(),
		color: 'red',
		size: 1,
		isPainting: false,
		/* tslint:disable:no-empty */
		onMouseDown: () => { },
		onMouseLeave: () => { },
		onMouseMove: () => { },
		onMouseUp: () => { },
		onUpdateDimension: () => { }
	} 
	element: HTMLCanvasElement;
	componentDidMount() {
		window.addEventListener('resize', this.updateWithDimensions);
		this.updateWithDimensions();
	}
	componentDidUpdate() {
		this.updateCanvas();
	}
	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWithDimensions);
	}
	updateWithDimensions = () => {
		this.props.onUpdateDimension(getCanvasSize(this.element));
		this.updateCanvas();
	}
	clear(context: CanvasRenderingContext2D) {
		context.clearRect(0, 0, this.props.width || 200, this.props.height || 200);
	}
	updateCanvas() {
		const context = this.element.getContext('2d');
		if (context !== null) {
			this.clear(context);
			context.lineJoin = 'round';
			const points = this.props.points.toArray();
			for (let ndx = 1, l = points.length; ndx < l; ndx++) {
				writeCanvasPath(context, points, ndx);
			}
		}
	}
	setElement = (el: HTMLCanvasElement) => { this.element = el; };
	onMouseDownHander = (ev: React.MouseEvent<HTMLCanvasElement>) => {
		const coords = getCoordinatesFromMouseEvent(ev, this.element);
		this.props.onMouseDown({
			x: coords.x,
			y: coords.y,
			color: this.props.color,
			size: this.props.size,
			isDragging: false
		});
	}
	onMouseLeaveHandler = (ev: React.MouseEvent<HTMLCanvasElement>) => {
		if (this.props.isPainting) {
			this.props.onMouseLeave();
		}
	}
	onMouseMoveHandler = (ev: React.MouseEvent<HTMLCanvasElement>) => {
		if (this.props.isPainting) {
			const coords = getCoordinatesFromMouseEvent(ev, this.element);
			this.props.onMouseMove({
				x: coords.x,
				y: coords.y,
				color: this.props.color,
				size: this.props.size,
				isDragging: true
			});
		}
	}
	onMouseUpHandler = (ev: React.MouseEvent<HTMLCanvasElement>) => {
		this.props.onMouseUp();
	}
	render() {
		const dimensions = {
			width: this.props.width,
			height: this.props.height
		};
		return (
			<div className={styles.container}>
				<canvas
					width={dimensions.width} 
					height={dimensions.height} 
					className={styles.canvas} 
					onMouseDown={this.onMouseDownHander}
					onMouseLeave={this.onMouseLeaveHandler}
					onMouseMove={this.onMouseMoveHandler}
					onMouseUp={this.onMouseUpHandler}
					ref={this.setElement} 
				/>
			</div>
		);
	}
}

export default Canvas;
