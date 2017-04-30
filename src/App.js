import React, {Component} from 'react';
import './App.css';
import {Navigation, NavigationElement} from './Navigation'
import {Route} from 'react-router-dom'
import logo from './logo.png'
import Herstellung from './Herstellung'
import Markttage from './Markttage'
import Kontakt from './Kontakt'
import Agb from './Agb'

class App extends Component {
    render() {
        return (
            <div id="page">
                <div id="header">
                    <Logo/>
                    <Navigation>
                        <NavigationElement name="Home"/>
                        <NavigationElement name="Artikel"/>
                        <NavigationElement name="Herstellung"/>
                        <NavigationElement name="Materialen"/>
                        <NavigationElement name="Markttage"/>
                        <NavigationElement name="Kontakt"/>
                    </Navigation>
                    <div id="cart">
                        <ul className="navigation">
                            <li><a >Warenkorb<span>(leer)</span></a></li>
                        </ul>
                    </div>
                </div>
                <div id="line">
                </div>
                <div id="main">
                    <Route path='/Markttage' component={Markttage}/>
                    <Route path='/Herstellung' component={Herstellung}/>
                    <Route path='/Kontakt' component={Kontakt}/>
                    <Route path='/AGB' component={Agb}/>
                </div>
                <div id="line">
                </div>
                <div id="footer">
                    <Navigation>
                        <NavigationElement name="AGB"/>
                        <NavigationElement name="Impressum"/>
                    </Navigation>
                </div>
            </div>
        );
    }
}

const Logo = () => (
    <div id="logo">
        <img src={logo} alt="geknüpft.ch"/>
    </div>
);

export default App;