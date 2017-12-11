import * as React from 'react';
import IUndoRedoBoardProps from './IUndoRedoBoardProps';
import styles from './modul-css/undoRedo.sass';

const UndoRedo: React.SFC<IUndoRedoBoardProps> = (props) => {
	return (
		<div className={styles.container}> 
			<button className={styles.button} onClick={props.onUndo} disabled={!props.canUndo}>
				Undo
			</button>
			<button className={styles.button} onClick={props.onRedo} disabled={!props.canRedo}>
				Redo
			</button>
		</div>
	);
};

UndoRedo.defaultProps = {
	canUndo: false,
	canRedo: false,
	// tslint:disable-next-line:no-empty
	onUndo: () => { },
	// tslint:disable-next-line:no-empty
	onRedo: () => { }
};

export default UndoRedo;
