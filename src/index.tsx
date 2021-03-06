import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import { reducer } from './redux/reducers';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const store = createStore(reducer);

ReactDOM.render(
	<Provider store={store}>
		<App />	
	</Provider>,
	document.getElementById('root') as HTMLElement
);
registerServiceWorker();
