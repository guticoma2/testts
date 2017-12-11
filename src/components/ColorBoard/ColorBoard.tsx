import * as React from 'react';
import IColorBoardProps from './IColorBoardProps';
import Bar from '../Bar';
import styles from './module-css/colorBoard.sass';

const ColorBoard: React.SFC<IColorBoardProps> = (props) => {
	const onSelectHandler = (value: string) => {
		if (props.onSelect) {
			props.onSelect(value);
		}
	};
	const getAllBars = props.colors
		.map((color) => {
			const barProps = {
				onSelect: onSelectHandler,
				dimension: { height: 5 },
				backgroundColor: color,
				id: color,
				selected: props.selected === color
			};
			return (<Bar key={color} {...barProps} />);
		});
	return (<div className={styles.container}>{getAllBars}</div>);
};

ColorBoard.defaultProps = {
	colors: [],
	selected: '',
	// tslint:disable-next-line:no-empty
	onSelect: () => { }
};

export default ColorBoard;
