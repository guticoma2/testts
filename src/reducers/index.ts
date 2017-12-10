import { combineReducers } from 'redux';
import selectedColor from './selectedColor';
import selectedSize from './selectedSize';
import paintToCavasContainer from './paintToCanvas';
import canvasDimension from './canvasDimension';
import undoRedo from './undoRedo';

const paintToCanvas = undoRedo(paintToCavasContainer);

const reducer = combineReducers({
	selectedColor,
	selectedSize,
	paintToCanvas,
	canvasDimension,
});

export default reducer;