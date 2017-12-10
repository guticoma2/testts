import { combineReducers } from 'redux';
import { selectedColor } from './../../containers/SelectableColor/redux/reducers';
import { selectedSize } from './../../containers/SelectableSize/redux/reducers';
import { paintToCanvas as paintToCavasContainer, canvasDimension }
	from './../../containers/PaintCanvas/redux/reducers';
import { undoRedo } from './../../containers/UndoRedo/redux/reducers';

const paintToCanvas = undoRedo(paintToCavasContainer);

const reducer = combineReducers({
	selectedColor,
	selectedSize,
	paintToCanvas,
	canvasDimension,
});

export default reducer;