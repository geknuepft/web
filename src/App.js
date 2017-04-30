import React, {Component} from 'react';
import './App.css';
import Navigation from './Navigation'

class App extends Component {
    render() {
        return (
            <div id="page">
                <div id="header">
                    <div id="logo">
                        <img alt="gekn&uuml;pft.ch" src="static/pictures/logo.png"/>
                    </div>
                    <Navigation />
                    <div id="cart">
                        <ul className="nav">
                            <li><a >Warenkorb<span>(leer)</span></a></li>
                        </ul>
                    </div>
                </div>
                <div id="line">
                </div>
                <div id="main">
                </div>
                <div id="line">
                </div>
                <div id="footer">
                    <ul className="nav nav-footer">
                        <li><a >AGB</a></li>
                        <li><a >Impressum</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default App;
