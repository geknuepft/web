import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {BrowserRouter} from 'react-router-dom'
import {IntlProvider} from 'react-intl';
import {addLocaleData} from 'react-intl';
import de from 'react-intl/locale-data/de';
import config from 'react-global-configuration';
import {IntlFormats} from "./Number"

addLocaleData([...de]);

config.set({
    apiUrl: 'http://192.168.1.2:8002/v0/',
    imageUrl: 'http://192.168.1.2:8002/v0/Image/',
});

ReactDOM.render(
    <IntlProvider locale="de-CH" formats={IntlFormats}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </IntlProvider>,
    document.getElementById('root')
);
