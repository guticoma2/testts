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
}

export default UndoRedo;
