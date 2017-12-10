import Actions from './Actions';
import IUndoRedoActions from './IUndoRedoAction';

export default (): IUndoRedoActions => ({
	type: Actions.Redo
});
