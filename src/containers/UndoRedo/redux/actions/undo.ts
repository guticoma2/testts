import { Actions } from '../../../../redux/actions';
import IUndoRedoActions from './IUndoRedoAction';

export default (): IUndoRedoActions => ({
	type: Actions.Undo
});
