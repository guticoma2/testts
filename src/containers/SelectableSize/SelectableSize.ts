import { connect } from 'react-redux';
import { changeSize } from '../../redux/actions';
import SizeBoard, { ISizeBoardProps } from '../../components/SizeBoard';

const mapStateToProps = (state: any, ownProps: ISizeBoardProps): ISizeBoardProps =>
	Object.assign({ }, ownProps, { selected: state.selectedSize });

const mapDispatchToProps = (dispatch: any, ownProps: ISizeBoardProps) => ({
	onSelect: (value: string) => {
		dispatch(changeSize(parseInt(value, 10)));
	}
});

const SelectableColor = connect(
	mapStateToProps,
	mapDispatchToProps
)(SizeBoard);

export default SelectableColor;