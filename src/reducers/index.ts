import { combineReducers } from 'redux';
import selectedColor from './selectedColor';
import selectedSize from './selectedSize';
import paintToCanvas from './paintToCanvas';


const reducer = combineReducers({
	selectedColor,
	selectedSize,
	paintToCanvas
});

export default reducer;