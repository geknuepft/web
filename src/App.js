import React, {Component} from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import {Navigation, NavigationElement} from './Navigation'
import {Route} from 'react-router-dom'
import {Grid, Row, Col} from 'react-bootstrap'
import logo from '../public/logo.png'
import Home from './Home'
import Shop from './Shop'
import Herstellung from './Herstellung'
import Materialien from './Materialien'
import Markttage from './Markttage'
import Kurse from './Kurse'
import Kontakt from './Kontakt'
import Warenkorb from './Warenkorb'
import Agb from './Agb'
import Impressum from './Impressum'

class App extends Component {
    render() {
        return (
            <Grid fluid id="page">
                <Row id="header">
                    <Col xs={3} id="logo">
                        <img src={logo} alt="geknüpft.ch"/>
                    </Col>
                    <Col xs={3} id="navigation-main">
                        <Navigation>
                            <NavigationElement name="Home"/>
                            <NavigationElement name="Shop"/>
                            <NavigationElement name="Herstellung"/>
                            <NavigationElement name="Materialien"/>
                            <NavigationElement name="Markttage"/>
                            <NavigationElement name="Kurse"/>
                            <NavigationElement name="Kontakt"/>
                        </Navigation>
                    </Col>
                    <Col xs={3} id="cart">
                        <Navigation>
                            <NavigationElement name="Warenkorb"/>
                        </Navigation>
                    </Col>
                </Row>
                <Col xs={12} id="line">
                </Col>
                <Row id="main">
                    <Route exact path='/' component={Home}/>
                    <Route path='/Shop' component={Shop}/>
                    <Route path='/Herstellung' component={Herstellung}/>
                    <Route path='/Materialien' component={Materialien}/>
                    <Route path='/Markttage' component={Markttage}/>
                    <Route path='/Kurse' component={Kurse}/>
                    <Route path='/Kontakt' component={Kontakt}/>
                    <Route path='/Warenkorb' component={Warenkorb}/>
                    <Route path='/AGB' component={Agb}/>
                    <Route path='/Impressum' component={Impressum}/>
                </Row>
                <Col xs={12} id="line">
                </Col>
                <Row>
                    <Col xs={12} id="footer">
                        <Navigation>
                            <NavigationElement name="AGB"/>
                            <NavigationElement name="Impressum"/>
                        </Navigation>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default App;
