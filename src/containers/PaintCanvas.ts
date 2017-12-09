import { connect } from 'react-redux';
import { addCanvasPoint, setCanvasNotPainting } from '../actions';
import Canvas, { ICanvasProps } from '../components/Canvas';
import { IPoint } from '../common';

const mapStateToProps = (state: any, ownProps: ICanvasProps): ICanvasProps => {
	return Object.assign({ }, ownProps, state.paintToCanvas, {
		color: state.selectedColor,
		size: state.selectedSize
	});
}

const mapDispatchToProps = (dispatch: any, ownProps: ICanvasProps)=> ({
	onMouseDown: (point: IPoint) => {
		dispatch(addCanvasPoint(point));
	},
	onMouseLeave: () => {
		dispatch(setCanvasNotPainting());
	},
	onMouseMove: (point: IPoint) => {
		dispatch(addCanvasPoint(point));
	},
	onMouseUp: () => {
		dispatch(setCanvasNotPainting());
	}
});

const PaintCanvas = connect(
	mapStateToProps,
	mapDispatchToProps
)(Canvas);

export default PaintCanvas;