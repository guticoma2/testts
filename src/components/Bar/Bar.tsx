import * as React from 'react';
import IBarProps from './IBarProps';
import { dimensionToStyle } from '../../utils';
import styles from './module-css/bar.sass';

const Bar: React.SFC<IBarProps> = (props) => {
	const style = Object.assign(
		{ },
		dimensionToStyle(props.dimension, 'px'),
		{
			backgroundColor: props.backgroundColor
		}
	);
	const onClickHandler = (ev: React.SyntheticEvent<HTMLDivElement>) => {
		if (props.onSelect) {
			props.onSelect(props.id);
		}
	};

	return (<div style={style} className={styles.bar} onClick={onClickHandler} />);
};

export default Bar;
