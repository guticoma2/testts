import * as React from 'react';
import IBarProps from './IBarButtonProps';
import { dimensionToStyle } from '../../utils';
import unionClassNames from '../../utils/unionClassNames';
import styles from './module-css/bar.sass';

const Bar: React.SFC<IBarProps> = (props) => {
	const style = Object.assign(
		{ },
		dimensionToStyle(props.dimension, 'px'),
		{
			backgroundColor: props.backgroundColor
		}
	);
	const onClickHandler = (ev: React.SyntheticEvent<HTMLButtonElement>) => {
		if (props.onSelect) {
			props.onSelect(props.id);
		}
	};
	const buttonClass = unionClassNames(styles.button, (props.selected ? styles.active : ''));
	return (
	<button
		className={buttonClass}
		onClick={onClickHandler}
	>
		<div style={style} className={styles.bar} />
	</button>);
};

Bar.defaultProps = {
	id: '',
	backgroundColor: 'red',
	dimension: { height: 5 },
	selected: false,
	// tslint:disable-next-line:no-empty
	onSelect: () => { }
};

export default Bar;
