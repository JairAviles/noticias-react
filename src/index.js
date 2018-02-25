import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './routes';
import Header from './components/Header';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div>
        <Header />
        <Routes />
    </div>
    , document.getElementById('root'));
registerServiceWorker();
