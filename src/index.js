import React from 'react';
import ReactDOM from 'react-dom';

import './css/index.css';
import App from './components/Main/index';
import registerServiceWorker from './config/registerServiceWorker';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
registerServiceWorker();
