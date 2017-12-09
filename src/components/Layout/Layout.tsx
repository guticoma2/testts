import * as React from 'react';
import { List } from 'immutable';
// import SizeBoard from '../SizeBoard';
// import ColorBoard from '../ColorBoard';
import SelectableColor from '../../containers/SelectableColor';
import PaintCanvas from '../../containers/PaintCanvas';
import ILayoutProps from './ILayoutProps';
import styles from './module-css/layout.sass';
import { IPoint } from '../../common';
import ILayoutState from './ILayoutState';
import { ICanvasProps } from '../Canvas/index';

class Layout extends React.Component<ILayoutProps, ILayoutState> {
	constructor(props: ILayoutProps) {
		super(props);
		this.state = {
			size: 1,
			color: 'red'
		};
	}
	// onColorBoardSelectHandler = (value: string) => {
	// 	this.setState(Object.assign({ }, {
	// 		color: value
	// 	}));
	// }
	// onSizeBoardSelectHandler = (value: string) => {
	// 	this.setState(Object.assign({ }, {
	// 		size: parseInt(value, 10)
	// 	}));
	// }
	render() {
		const colorBoardProps = {
			colors: ['red', 'blue', 'black'],
			// onSelect: this.onColorBoardSelectHandler,
			selected: 'red'
			
		};
		// const sizeBoardProps = {
		// 	sizes: [1, 2, 3, 4, 5],
		// 	onSelect: this.onSizeBoardSelectHandler
		// };
		const canvasProps: ICanvasProps  = {
			points: List<IPoint>(),
			color: this.state.color,
			size: this.state.size,
			isPainting: false,
			onMouseDown: () => { },
			onMouseLeave: () => { },
			onMouseMove: () => { },
			onMouseUp: () => { }
		};
		return (
			<div className={styles.container}>
				<section className={styles['section-canvas']}>
					<PaintCanvas {...canvasProps} />
				</section>
				<section className={styles['section-color-board']}>
					<SelectableColor {...colorBoardProps} />
				</section>
			</div>
		);
	}
}

export default Layout;
{/* <section className={styles['section-size-board']}>
					<SizeBoard {...sizeBoardProps} />
				</section> */}