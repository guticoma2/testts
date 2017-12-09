import { combineReducers } from 'redux';
import selectedColor from './selectedColor';
import selectedSize from './selectedSize';
import paintToCanvas from './paintToCanvas';
import canvasDimension from './canvasDimension';

const reducer = combineReducers({
	selectedColor,
	selectedSize,
	paintToCanvas,
	canvasDimension
});

export default reducer;