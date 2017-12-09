import { connect } from 'react-redux';
import { changeColor } from '../actions';
import SizeBoard, { ISizeBoardProps } from '../components/SizeBoard';

const mapStateToProps = (state: any, ownProps: ISizeBoardProps): ISizeBoardProps =>
	Object.assign({ }, ownProps, { selected: state.selectedSize });

const mapDispatchToProps = (dispatch: any, ownProps: ISizeBoardProps) => ({
	onSelect: (value: string) => {
		dispatch(changeColor(value));
	}
});

const SelectableColor = connect(
	mapStateToProps,
	mapDispatchToProps
)(SizeBoard);

export default SelectableColor;