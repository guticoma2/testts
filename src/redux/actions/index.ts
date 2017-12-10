import { changeColor, IChangeColorAction } from '../../containers/SelectableColor/redux/actions';
import { changeSize, IChangeSizeAction } from '../../containers/SelectableSize/redux/actions';
import {
	addCanvasPoint,
	setCanvasNotPainting,
	ICanvasAction,
	updateCanvasDimension,
	IUpdateCanvasDimensionAction } from '../../containers/PaintCanvas/redux/actions';
import Actions from './Actions';
import { undo, redo, IUndoRedoAction } from '../../containers/UndoRedo/redux/actions';

export {
	changeColor,
	IChangeColorAction,
	changeSize,
	IChangeSizeAction,
	addCanvasPoint,
	ICanvasAction,
	setCanvasNotPainting,
	updateCanvasDimension,
	IUpdateCanvasDimensionAction,
	undo,
	redo,
	IUndoRedoAction,
	Actions
};
