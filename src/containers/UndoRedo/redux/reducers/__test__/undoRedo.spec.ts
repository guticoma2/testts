import { Actions } from '../../../../../redux/actions';
import undoRedo from '../undoRedo';
import { selectedColor } from '../../../../SelectableColor/redux/reducers';
import { UndoRedoOperation } from '../index';

const enhancedReducer = undoRedo(selectedColor);

describe('undoredo enhanced reducer ', () => {
	test('passing invalid action to reducer return default state', () => {
		const initialStateDefault = {
			past: [],
			present: selectedColor(undefined, { type: Actions.ChangeColor, color: 'red' }),
			future: [],
			operation: UndoRedoOperation.None
		};
		const result = enhancedReducer(undefined, {
			type: 'invalid action type'
		});
		expect(result).toMatchObject(initialStateDefault);
	});
	test('passing undo action to reducer move past to present and default to future', () => {
		const stateWithPastContent = {
			past: ['blue'],
			present: 'red',
			future: [],
			operation: UndoRedoOperation.None
		};

		const result = enhancedReducer(stateWithPastContent, {
			type: Actions.Undo
		});
		expect(result).toMatchObject({
			past: [],
			present: 'blue',
			future: ['red'],
			operation: UndoRedoOperation.Undo
		});
	});
	test('passing redo action to reducer move future to present and present to past', () => {
		const stateWithFutureContent = {
			past: [],
			present: 'red',
			future: ['blue'],
			operation: UndoRedoOperation.None
		};

		const result = enhancedReducer(stateWithFutureContent, {
			type: Actions.Redo
		});
		expect(result).toMatchObject({
			past: ['red'],
			present: 'blue',
			future: [],
			operation: UndoRedoOperation.Redo
		});
	});
});