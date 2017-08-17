import React from 'react';
import Page from './Page';
import Filter from './Filter';
import Gallery from './Gallery';
import Specifics from './Specifics';
import {Navigation, NavigationElement} from './Navigation';
import {Route, Link} from 'react-router-dom';
import './Shop.css';

const ShopDefault = () => (
    <div>
        <div className="intro">
            <div className="intro-desc">
                <p>Über 1400 verschiedene Armbänder, Schlüsselanhänger und Buchzeichen bieten wir an. Stöbern Sie auf
                    dem <Link to="/Shop/Marktplatz">Marktplatz</Link> oder suchen Sie gezielt nach einem Muster und wir
                    knüpfen es Ihnen in Ihrer gewünschten Länge.</p>
            </div>
            <div className="intro-desc">
            </div>
        </div>
        <div className="intro">
            <div className="intro-desc overview">
                <img src="http://api0.geknuepft.ch/v0/Image/800p/content/coll.jpg" alt="türkisblauer Sandstrand"/>
                <div className="overview-text">
                    <Link to="/Shop/Armbänder"><span>Unsere neuste Kollektion:</span><br/>Türkisblauer Sandstrand</Link>
                </div>
            </div>
            <div className="intro-desc overview">
                <img src="http://api0.geknuepft.ch/v0/Image/800p/content/marktstand.jpg" alt="Marktstand"/>
                <div className="overview-text">
                    <Link to="/Shop/Marktplatz"><br/>Marktplatz</Link>
                </div>
            </div>
        </div>
    </div>
);

const ShopArmbaender = () => (
    <div>
        <div className="intro">
            <div className="intro-desc">
                <p>Hier finden Sie alle Muster und die passenden Suchfunktionen f&uuml;r ein Armband. Sind Sie unsicher,
                    wie lange Ihr Armband sein soll? <a>Lesen Sie hier mehr darüber!</a></p>
                <br/>
                <p>Möchten Sie ein besonders langes Armand bzw. das Armband doppelt oder dreifach um das Handgelenk
                    wickeln, w&auml;hlen Sie die &Uuml;berl&auml;nge aus.</p>
            </div>
        </div>
        <Filter/>
        <Gallery/>
        <Specifics/>
    </div>
);

const ShopBuchzeichen = () => (
    <h4>Buchzeichen</h4>
);

const ShopSchluesselanhaenger = () => (
    <h4>Schlüsselanhänger</h4>
);

const ShopMarktplatz = () => (
    <h4>Marktplatz</h4>
);

const Shop = () => (
    <Page
        title="Shop"
        headImagePath="http://api0.geknuepft.ch/v0/Image/800p/content/head/artikel_1.jpg"
        navigation={
            <Navigation>
                <NavigationElement pathPrefix="/Shop/" name="Armbänder"/>
                <NavigationElement pathPrefix="/Shop/" name="Buchzeichen"/>
                <NavigationElement pathPrefix="/Shop/" name="Schlüsselanhänger"/>
                <NavigationElement pathPrefix="/Shop/" name="Marktplatz"/>
            </Navigation>
        }>
        <Route exact path="/Shop" component={ShopDefault}/>
        <Route path="/Shop/Armbänder" component={ShopArmbaender}/>
        <Route path="/Shop/Schlüsselanhänger" component={ShopSchluesselanhaenger}/>
        <Route path="/Shop/Buchzeichen" component={ShopBuchzeichen}/>
        <Route path="/Shop/Marktplatz" component={ShopMarktplatz}/>
    </Page>
);

export default Shop;
