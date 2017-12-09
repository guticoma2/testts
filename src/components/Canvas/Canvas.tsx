import * as React from 'react';
import { ICanvasProps, ICanvasState, CanvasState } from './';
import { writeCanvasPath, getCanvasSize } from './utils';
import { getCoordinatesFromMouseEvent } from '../../utils';
import styles from './module-css/canvas.sass';

class Canvas extends React.Component<ICanvasProps, ICanvasState> {
	element: HTMLCanvasElement;
	constructor(props: ICanvasProps) {
		super(props);
		// TODO: review this, after redux 
		this.state = CanvasState.getInitialState(props);
	}
	componentDidMount() {
		window.addEventListener("resize", this.updateWithDimensions);
		this.updateWithDimensions();
	}
	componentDidUpdate() {
		this.updateCanvas();
	}
	componentWillUnmount() {
        window.removeEventListener("resize", this.updateWithDimensions);
    }
	updateWithDimensions = () => {
		this.setState(CanvasState.createWithDimensions(this.state, getCanvasSize(this.element)));
		this.updateCanvas();
	}
	updateCanvas() {
		const context = this.element.getContext('2d');
		if (context !== null) {
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
		if (this.props.onMouseDown) this.props.onMouseDown({
			x: coords.x,
			y: coords.y,
			color: this.props.color,
			size: this.props.size,
			isDragging: false
		});
	}
	onMouseLeaveHandler = (ev: React.MouseEvent<HTMLCanvasElement>) => {
		if (this.props.onMouseLeave) this.props.onMouseLeave();
	}
	onMouseMoveHandler = (ev: React.MouseEvent<HTMLCanvasElement>) => {
		if (this.props.isPainting) {
			const coords = getCoordinatesFromMouseEvent(ev, this.element);
			if (this.props.onMouseMove) this.props.onMouseMove({
				x: coords.x,
				y: coords.y,
				color: this.props.color,
				size: this.props.size,
				isDragging: true
			});
		}
	}
	onMouseUpHandler = (ev: React.MouseEvent<HTMLCanvasElement>) => {
		if (this.props.onMouseUp) this.props.onMouseUp();
	}
	render() {
		const dimensions = {
			width: this.state.dimension.width,
			height: this.state.dimension.height
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
