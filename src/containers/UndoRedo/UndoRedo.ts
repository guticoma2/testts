
import { connect } from 'react-redux';
import UndoRedoBoard, { IUndoRedoBoardProps } from '../../components/UndoRedoBoard';
import { undo, redo } from '../../redux/actions';

const mapStateToProps = (state: any, ownProps: IUndoRedoBoardProps): IUndoRedoBoardProps =>
	Object.assign({ }, ownProps, {
		canUndo: state.paintToCanvas.past.length > 0,
		canRedo: state.paintToCanvas.future.length > 0
	 });

const mapDispatchToProps = (dispatch: any, ownProps: IUndoRedoBoardProps) => ({
	onUndo: () => dispatch(undo()),
    onRedo: () => dispatch(redo())
});

const UndoRedo = connect(
	mapStateToProps,
	mapDispatchToProps
)(UndoRedoBoard);

export default UndoRedo;