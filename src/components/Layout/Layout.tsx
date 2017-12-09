import * as React from 'react';
import { List } from 'immutable';
// import SizeBoard from '../SizeBoard';
import ColorBoard from '../ColorBoard';
import Canvas, { ICanvasProps } from '../Canvas';
import ILayoutProps from './ILayoutProps';
import styles from './module-css/layout.sass';
import { IPoint } from '../../common';
import ILayoutState from './ILayoutState';

class Layout extends React.Component<ILayoutProps, ILayoutState> {
	constructor(props: ILayoutProps) {
		super(props);
		this.state = {
			size: 1,
			color: 'red'
		}
	}
	onColorBoardSelectHandler = (value: string) => {
		this.setState(Object.assign({ }, {
			color: value
		}));
	}
	onSizeBoardSelectHandler = (value: string) => {
		this.setState(Object.assign({ }, {
			size: parseInt(value, 10)
		}));
	}
	render() {
		const colorBoardProps = {
			colors: ['red', 'blue', 'black'],
			onSelect: this.onColorBoardSelectHandler
			
		};
		// const sizeBoardProps = {
		// 	sizes: [1, 2, 3, 4, 5],
		// 	onSelect: this.onSizeBoardSelectHandler
		// };
		const canvasProps: ICanvasProps  = {
			theme: {
				title: '',
				canvas: '',
				container: ''
			},
			title: '',
			points: List<IPoint>(),
			color: this.state.color,
			size: this.state.size
		};
		return (
			<div className={styles.container}>
				<section className={styles['section-canvas']}>
					<Canvas {...canvasProps} />
				</section>
				<section className={styles['section-color-board']}>
					<ColorBoard {...colorBoardProps} />
				</section>
			</div>
		);
	}
}

export default Layout;
{/* <section className={styles['section-size-board']}>
					<SizeBoard {...sizeBoardProps} />
				</section> */}