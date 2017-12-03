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
      scale: 1,
      title: ''
    };
    return (
      <div className="App">
        <div className="App-header">
        
        </div>
        <Canvas theme={canvasProps.theme} scale={canvasProps.scale} title={canvasProps.title} />
      </div>
    );
  }
}

export default App;
