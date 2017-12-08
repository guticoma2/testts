import * as React from 'react';
import './App.css';
import Canvas from './components/Canvas/Canvas';
import ICanvasProps from './components/Canvas/ICanvasProps';

class App extends React.Component {
	render() {
		const canvasProps: ICanvasProps  = {
			theme: {
				title: '',
				canvas: '',
				container: ''
			},
			title: ''
		};
		return (
			<div className="App">
				<div className="App-header" />
				<Canvas theme={canvasProps.theme} title={canvasProps.title} />
			</div>
		);
	}
}

export default App;
