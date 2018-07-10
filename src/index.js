import React from 'react';
import ReactDOM from 'react-dom';


// Style
import './index.css';
import './Landing.css';
import './Navigation.css';
import './Home.css';
import './Listen.css'

import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
