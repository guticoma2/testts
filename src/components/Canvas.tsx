import React, { Component } from 'react';
import ICanvasProps from './ICanvasProps';

class Canvas extends Component<ICanvasProps, object> {
    componentDidMount() {
		this.updateCanvas();
	}
	componentDidUpdate() {
		this.updateCanvas();
	}
	updateCanvas() {
		const context = this.el.getContext('2d');
    }
    setElement = (el) => { this.element = el; }
	render() {
		const titleClass = unionClassNames(styles.title, this.props.theme.title);
		const canvasClass = unionClassNames(styles.canvas, this.props.theme.canvas);
		const containerClass = unionClassNames(styles.container, this.props.theme.container);
		const dimensions = this.props.graphType.getDimensions(this.props.data, this.props.scale);
		return (
			<div className={containerClass}>
				<h4 className={titleClass}>{this.props.title}</h4>
				<canvas width={dimensions.width} height={dimensions.height} className={canvasClass} ref={this.setElement} />
			</div>
		);
	}
};

export default Canvas;

