import * as React from 'react';
import { List } from 'immutable';
import SelectableColor from '../../containers/SelectableColor';
import PaintCanvas from '../../containers/PaintCanvas';
import ILayoutProps from './ILayoutProps';
import styles from './module-css/layout.sass';
import { IPoint } from '../../common';
import ILayoutState from './ILayoutState';
import { ICanvasProps } from '../Canvas/index';
import { SelectableSize } from '../../containers/index';

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
		const canvasProps: ICanvasProps  = {
			points: List<IPoint>(),
			color: 'red',
			size: 1,
			isPainting: false,
			onMouseDown: () => { },
			onMouseLeave: () => { },
			onMouseMove: () => { },
			onMouseUp: () => { },
			onUpdateDimension: () => { }
		};
		return (
			<div className={styles.container}>
				<section className={styles['section-canvas']}>
					<PaintCanvas {...canvasProps} />
				</section>
				<section className={styles['section-color-board']}>
					<SelectableColor {...colorBoardProps} />
				</section>
				<section className={styles['section-size-board']}>
					<SelectableSize {...sizeBoardProps} />
				</section>
			</div>
		);
	}
}

export default Layout;
