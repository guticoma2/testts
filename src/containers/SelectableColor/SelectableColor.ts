import { connect } from 'react-redux';
import { changeColor } from '../../redux/actions';
import ColorBoard, { IColorBoardProps } from '../../components/ColorBoard';

const mapStateToProps = (state: any, ownProps: IColorBoardProps): IColorBoardProps =>
	Object.assign({ }, ownProps, { selected: state.selectedColor });

const mapDispatchToProps = (dispatch: any, ownProps: IColorBoardProps) => ({
	onSelect: (value: string) => {
		dispatch(changeColor(value));
	}
});

const SelectableColor = connect(
	mapStateToProps,
	mapDispatchToProps
)(ColorBoard);

export default SelectableColor;
