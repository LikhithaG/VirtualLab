import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './registerServiceWorker';
import App from './App';

ReactDOM.render(<App />, document.getElementById('app'));
serviceWorker.unregister();
