import * as React from 'react';
import ISizeBoardProps from './ISizeBoardProps';
import Bar from '../Bar';
import styles from './module-css/sizeBoard.sass';

const ColorBoard: React.SFC<ISizeBoardProps> = (props) => {
	const onSelectHandler = (value: string) => {
		if (props.onSelect) {
			props.onSelect(value);
		}
	};
	const getAllBars = props.sizes
		.map((size) => {
			const barProps = {
				onSelect: onSelectHandler,
				dimension: { height: size },
				backgroundColor: 'black',
				id: size.toString()
			};
			return (<button key={size} className={styles.button}><Bar {...barProps} /></button>);
		});
	return (<div className={styles.container}>{getAllBars}</div>);
};

export default ColorBoard;
