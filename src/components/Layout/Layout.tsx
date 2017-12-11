import * as React from 'react';
import SelectableColor from '../../containers/SelectableColor';
import PaintCanvas from '../../containers/PaintCanvas';
import ILayoutProps from './ILayoutProps';
import styles from './module-css/layout.sass';
import Canvas from '../Canvas';
import ILayoutState from './ILayoutState';
import { SelectableSize } from '../../containers/index';
import UndoRedo from '../../containers/UndoRedo';

class Layout extends React.Component<ILayoutProps, ILayoutState> {
	render() {
		const colorBoardProps = {
			colors: ['red', 'blue', 'black'],
			selected: Canvas.defaultProps.color
		};
		const sizeBoardProps = {
			sizes: [1, 2, 3, 4, 5],
			selected: Canvas.defaultProps.size
		};
		const undoRedoProps = {
			canUndo: false,
			canRedo: false,
			// tslint:disable-next-line:no-empty
			onUndo: () => { },
			// tslint:disable-next-line:no-empty
			onRedo: () => { }
		};
		return (
			<div className={styles.container}>
				<section className={styles.canvas}>
					<PaintCanvas {...Canvas.defaultProps} />
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
