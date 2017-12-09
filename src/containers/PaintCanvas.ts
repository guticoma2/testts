import { connect } from 'react-redux';
import { addCanvasPoint, setCanvasNotPainting , updateCanvasDimension } from '../actions';
import Canvas, { ICanvasProps } from '../components/Canvas';
import { IPoint, IDimension } from '../common';

const mapStateToProps = (state: any, ownProps: ICanvasProps): ICanvasProps => {
	return Object.assign({ }, ownProps, state.paintToCanvas, {
		color: state.selectedColor,
		size: state.selectedSize
	}, {
		width: state.canvasDimension.width,
		height: state.canvasDimension.height
	});
};

const mapDispatchToProps = (dispatch: any, ownProps: ICanvasProps) => ({
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
	},
	onUpdateDimension: (dimension: IDimension) => {
		dispatch(updateCanvasDimension(dimension));
	}
});

const PaintCanvas = connect(
	mapStateToProps,
	mapDispatchToProps
)(Canvas);

export default PaintCanvas;