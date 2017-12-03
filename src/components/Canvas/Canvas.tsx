import * as React from 'react';
import ICanvasProps from './ICanvasProps';
import unionClassNames from '../../utils/unionClassNames';
import styles from './module-css/canvas.sass';


class Canvas extends React.Component<ICanvasProps, object> {
	element: HTMLCanvasElement
    componentDidMount() {
		this.updateCanvas();
	}
	componentDidUpdate() {
		this.updateCanvas();
	}
	updateCanvas() {
		// const context = this.element.getContext('2d');
    }
    setElement = (el: HTMLCanvasElement) => { this.element = el; }
	render() {
		const titleClass = unionClassNames(styles.title, this.props.theme.title);
		const canvasClass = unionClassNames(styles.canvas, this.props.theme.canvas);
		const containerClass = unionClassNames(styles.container, this.props.theme.container);
		
		const dimensions = {
			width: '100px',
			height: '100px'
		}
		return (
			<div className={containerClass}>
				<h4 className={titleClass}>{this.props.title}</h4>
				<canvas width={dimensions.width} height={dimensions.height} className={canvasClass} ref={this.setElement} />
			</div>
		);
	}
};

export default Canvas;

