import React, {Component} from 'react';
import './App.css';
import {Navigation, NavigationElement} from './Navigation';
import {Route} from 'react-router-dom';
import logo from '../public/logo.png';
import Home from './Home';
import Shop from './Shop';
import Herstellung from './Herstellung';
import Materialien from './Materialien';
import Markttage from './Markttage';
import Kontakt from './Kontakt';
import Warenkorb from './Warenkorb';
import Agb from './Agb';
import Impressum from './Impressum';

class App extends Component {
    render() {
        return (
            <div id="page">
                <div id="header">
                    <Logo/>
                    <div id="navigation-main">
                        <Navigation>
                            <NavigationElement name="Home"/>
                            <NavigationElement name="Shop"/>
                            <NavigationElement name="Herstellung"/>
                            <NavigationElement name="Materialien"/>
                            <NavigationElement name="Markttage"/>
                            <NavigationElement name="Kontakt"/>
                        </Navigation>
                    </div>
                    <div id="cart">
                        <Navigation>
                            <NavigationElement name="Warenkorb"/>
                        </Navigation>
                    </div>
                </div>
                <div id="line">
                </div>
                <div id="main">
                    <Route path='/Home' component={Home}/>
                    <Route path='/Shop' component={Shop}/>
                    <Route path='/Herstellung' component={Herstellung}/>
                    <Route path='/Materialien' component={Materialien}/>
                    <Route path='/Markttage' component={Markttage}/>
                    <Route path='/Kontakt' component={Kontakt}/>
                    <Route path='/Warenkorb' component={Warenkorb}/>
                    <Route path='/AGB' component={Agb}/>
                    <Route path='/Impressum' component={Impressum}/>
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