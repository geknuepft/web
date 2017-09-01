import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {BrowserRouter} from 'react-router-dom'
import config from 'react-global-configuration';

config.set({
    apiUrl: 'http://192.168.1.2:8002/v0/',
    imageUrl: 'http://192.168.1.2:8002/v0/Image/',
});

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);
