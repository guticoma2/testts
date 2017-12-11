import { connect } from 'react-redux';
import { addCanvasPoint, setCanvasNotPainting } from '../../redux/actions';
import Canvas, { ICanvasProps } from '../../components/Canvas';
import { IPoint, IDimension } from '../../common';
import { UndoRedoOperation } from '../UndoRedo/redux/reducers';
import { updateCanvasDimension } from './redux/actions/index';

const mapStateToProps = (state: any, ownProps: ICanvasProps): ICanvasProps => {
	return Object.assign({ }, ownProps, state.paintToCanvas.present, {
			color: state.selectedColor,
			size: state.selectedSize
		},                  {
			width: state.canvasDimension.width,
			height: state.canvasDimension.height
		},                  {
			isPainting: (state.paintToCanvas.operation !== UndoRedoOperation.None ?
				false : state.paintToCanvas.present.isPainting)
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