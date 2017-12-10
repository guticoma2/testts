import * as React from 'react';
import { List } from 'immutable';
import SelectableColor from '../../containers/SelectableColor';
import PaintCanvas from '../../containers/PaintCanvas';
import ILayoutProps from './ILayoutProps';
import styles from './module-css/layout.sass';
import { IPoint } from '../../common';
import ILayoutState from './ILayoutState';
import { SelectableSize } from '../../containers/index';
import UndoRedo from '../../containers/UndoRedo';

class Layout extends React.Component<ILayoutProps, ILayoutState> {
	constructor(props: ILayoutProps) {
		super(props);
		this.state = {
			size: 1,
			color: 'red'
		};
	}
	render() {
		const colorBoardProps = {
			colors: ['red', 'blue', 'black'],
			selected: 'red'
		};
		const sizeBoardProps = {
			sizes: [1, 2, 3, 4, 5],
			selected: 1
		};
		const canvasProps = {
			points: List<IPoint>(),
			color: 'red',
			size: 1,
			isPainting: false,
			/* tslint:disable:no-empty */
			onMouseDown: () => { },
			onMouseLeave: () => { },
			onMouseMove: () => { },
			onMouseUp: () => { },
			onUpdateDimension: () => { }
		};
		const undoRedoProps = {
			canUndo: false,
			canRedo: false,
			onUndo: () => { },
			onRedo: () => { }
		};
		return (
			<div className={styles.container}>
				<section className={styles.canvas}>
					<PaintCanvas {...canvasProps} />
				</section>
				<section className={styles.board}>
					<UndoRedo {...undoRedoProps} />
					<SelectableColor {...colorBoardProps} />
					<SelectableSize {...sizeBoardProps} />
				</section>
			</div>
		);
	}
}

export default Layout;
