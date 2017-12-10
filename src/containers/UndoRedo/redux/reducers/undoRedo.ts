import { Actions } from '../../../../redux/actions';
import UndoRedoOperation from './UndoRedoOperation';

// TODO: type this
// eg: reducer <T,U>(state: T, action U) or create base IAction IReducer..
export default (reducer: any) => {
	
	// Call the reducer with empty action to populate the initial state
	const initialState = {
		past: [],
		present: reducer(undefined, {}),
		future: [],
		operation: UndoRedoOperation.None
	};

	// Return a reducer that handles undo and redo
	return (state = initialState, action: any) => {
		const { past, present, future } = state;
			
		switch (action.type) {
		// previous becomes present, and present goes to future
		case Actions.Undo:
			const previous = past[past.length - 1];
			const newPast = past.slice(0, past.length - 1);
			return {
				past: newPast,
				present: previous,
				future: [present, ...future],
				operation: UndoRedoOperation.Undo
			};
		// present becomes past, and first future goes to present
		case Actions.Redo:
			const next = future[0];
			const newFuture = future.slice(1);
			return {
				past: [...past, present],
				present: next,
				future: newFuture,
				operation: UndoRedoOperation.Redo
			};
		default:
			// Delegate handling the action to the passed reducer
			const newPresent = reducer(present, action);
			if (present === newPresent) {
				return state;
			}
			return {
				past: [...past, present],
				present: newPresent,
				future: [],
				operation: UndoRedoOperation.None
			};
		}
	};
};
