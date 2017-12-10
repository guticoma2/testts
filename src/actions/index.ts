import changeColor, { IChangeColorAction } from './changeColor';
import changeSize, { IChangeSizeAction } from './changeSize';
import addCanvasPoint from './addCanvasPoint';
import setCanvasNotPainting from './setCanvasNotPainting';
import ICanvasAction from './ICanvasAction';
import Actions from './Actions';
import updateCanvasDimension, { IUpdateCanvasDimensionAction } from './updateCanvasDimension';
import undo from './undo';
import redo from './redo';
import IUndoRedoAction from './IUndoRedoAction';

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
