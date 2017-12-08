import * as React from 'react';
import { ICanvasProps, ICanvasState, CanvasState } from './';
import { writeCanvasPath, getCanvasSize } from './utils';
import { unionClassNames, getCoordinatesFromMouseEvent } from '../../utils';
import styles from './module-css/canvas.sass';

class Canvas extends React.Component<ICanvasProps, ICanvasState> {
	element: HTMLCanvasElement;
	constructor(props: ICanvasProps) {
		super(props);
		// TODO: mix here props with state
		this.state = CanvasState.getInitialState(props);
	  }
	componentDidMount() {
		this.updateWithDimensions();
	}
	componentDidUpdate() {
		this.updateCanvas();
	}
	updateWithDimensions() {
		this.setState(CanvasState.createWithDimensions(this.state, getCanvasSize(this.element)));
		this.updateCanvas();
	}
	updateCanvas() {
		const context = this.element.getContext('2d');
		if (context !== null) {
			context.lineJoin = 'round';
			const points = this.state.points.toArray();
			for (let ndx = 1, l = points.length; ndx < l; ndx++) {
				writeCanvasPath(context, points, ndx);
			}
		}

	}
	setElement = (el: HTMLCanvasElement) => { this.element = el; };
	onMouseDownHander = (ev: React.MouseEvent<HTMLCanvasElement>) => {
		const coords = getCoordinatesFromMouseEvent(ev, this.element);
		this.setState(CanvasState.create(this.state,  {
			x: coords.x,
			y: coords.y,
			color: this.state.color,
			size: this.state.size,
			isDragging: false
		}));
	}
	onMouseLeaveHandler = (ev: React.MouseEvent<HTMLCanvasElement>) => {
		this.setState(CanvasState.createStopPainting(this.state));
	}
	onMouseMoveHandler = (ev: React.MouseEvent<HTMLCanvasElement>) => {
		if (this.state.isPainting) {
			const coords = getCoordinatesFromMouseEvent(ev, this.element);
			this.setState(CanvasState.create(this.state,  {
				x: coords.x,
				y: coords.y,
				color: this.state.color,
				size: this.state.size,
				isDragging: true
			}));
		}

	}
	onMouseUpHandler = (ev: React.MouseEvent<HTMLCanvasElement>) => {
		this.setState(CanvasState.createStopPainting(this.state));
	}
	// onTouchStartHandler = (ev) => {

	// }
	// onTouchMoveHandler = (ev) => {

	// }
	// onTouchCancel = (ev) => {

	// }
	// onTouchEnd = (ev) => {

	// }
	render() {
		const titleClass = unionClassNames(styles.title, this.props.theme.title);
		const canvasClass = unionClassNames(styles.canvas, this.props.theme.canvas);
		const containerClass = unionClassNames(styles.container, this.props.theme.container);
		
		const dimensions = {
			width: this.state.dimension.width,
			height: this.state.dimension.height
		};
		return (
			<div className={containerClass}>
				<h4 className={titleClass}>{this.props.title}</h4>
				<canvas
					width={dimensions.width} 
					height={dimensions.height} 
					className={canvasClass} 
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
