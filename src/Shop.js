import React from 'react';
import Page from './Page';
import {
    FilterContainer,
    LengthFilter,
    OverlengthFilter,
    WidthFilter,
    PriceFilter,
    ColorFilter,
    CategoryFilter,
    ThemeFilter,
    GarnFilter,
    EingeknuepftesFilter,
    DeleteFilter
} from './Filter';
import Gallery from './Gallery';
import Specifics from './Specifics';
import {Navigation, NavigationElement} from './Navigation';
import {Route, Link} from 'react-router-dom';
import config from 'react-global-configuration';
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
                <img src={config.get('apiUrl') + 'Image/800p/content/overview/coll_11.jpg'}
                     alt="türkisblauer Sandstrand"/>
                <div className="overview-text">
                    <Link to="/Shop/Armbänder"><span>Unsere neuste Kollektion:</span><br/>Türkisblauer Sandstrand</Link>
                </div>
            </div>
            <div className="intro-desc overview">
                <img src={config.get('apiUrl') + 'Image/800p/content/overview/wallisellen.jpg'} alt="Marktstand"/>
                <div className="overview-text">
                    <Link to="/Shop/Marktplatz"><br/>Marktplatz</Link>
                </div>
            </div>
        </div>
        <div className="intro">
            <div className="intro-desc overview">
                <img src={config.get('apiUrl') + 'Image/800p/content/overview/buchzeichen.jpg'} alt="Buchzeichen"/>
                <div className="overview-text">
                    <Link to="/Shop/Buchzeichen"><br/>Buchzeichen</Link>
                </div>
            </div>
            <div className="intro-desc overview">
                <img src={config.get('apiUrl') + 'Image/800p/content/overview/schluessel.jpg'}
                     alt="Schlüsselanhänger"/>
                <div className="overview-text">
                    <Link to="/Shop/Schlüsselanhänger"><br/>Schlüsselanhänger</Link>
                </div>
            </div>
        </div>
        <div className="intro">
            <div className="intro-desc wide">
                <p>Finden sie hier unsere neusten Kollektionen auf einen Blick. Klicken Sie auf jene Farbkombination,
                    die Ihnen am Besten gefällt, und sie gelangen direkt zu allen Artikel, die es mit diesen Farbe gibt.
                </p>
            </div>
        </div>
        <div className="intro">
            <div className="intro-desc overview">
                <img src={config.get('apiUrl') + 'Image/800p/content/overview/coll_11.jpg'}
                     alt="türkisblauer Sandstrand"/>
                <div className="overview-text">
                    <Link to="/Shop/Armbänder"><span>Unsere neuste Kollektion:</span><br/>Türkisblauer Sandstrand</Link>
                </div>
            </div>
            <div className="intro-desc overview">
                <img src={config.get('apiUrl') + 'Image/800p/content/overview/coll_15.jpg'} alt="schwarzweiss"/>
                <div className="overview-text">
                    <Link to="/Shop/Armbänder"><br/>schwarz-weiss</Link>
                </div>
            </div>
        </div>
        <div className="intro">
            <div className="intro-desc overview">
                <img src={config.get('apiUrl') + 'Image/800p/content/overview/coll_18.jpg'}
                     alt="rot"/>
                <div className="overview-text">
                    <Link to="/Shop/Armbänder"><br/>Rottöne</Link>
                </div>
            </div>
            <div className="intro-desc overview">
                <img src={config.get('apiUrl') + 'Image/800p/content/overview/coll_24.jpg'} alt="Steinperlen"/>
                <div className="overview-text">
                    <Link to="/Shop/Armbänder"><br/>mit Steinperlen</Link>
                </div>
            </div>
        </div>
    </div>
);

const ShopArmbaender = () => (
    <div>
        <div className="intro">
            <div className="intro-desc">
                <p>Hier finden Sie alle Muster und die passenden Suchfunktionen für ein Armband. Sind Sie unsicher,
                    wie lange Ihr Armband sein soll? <a>Lesen Sie hier mehr darüber!</a></p>
            </div>
            <div className="intro-desc">
                <p>Möchten Sie ein besonders langes Armand bzw. das Armband doppelt oder dreifach um das Handgelenk
                    wickeln, wählen Sie die Überlänge aus.</p>
            </div>
        </div>
        <FilterContainer>
            <DeleteFilter/>
            <div className="intro">
                <div className="intro-desc">
                    <div className="filter">
                        <OverlengthFilter/>
                        <WidthFilter/>
                        <PriceFilter/>
                    </div>
                </div>
                <div className="intro-desc">
                    <div className="filter">
                        <ColorFilter/>
                        <GarnFilter/>
                        <EingeknuepftesFilter/>
                    </div>
                </div>
            </div>
        </FilterContainer>
        <Gallery/>
        <Specifics/>
    </div>
);

const ShopBuchzeichen = () => (
    <div>
        <div className="intro">
            <div className="intro-desc">
                <p>Hier finden Sie alle Muster und die passenden Suchfunktionen für unsere Buchzeichen.</p>
            </div>
            <div className="intro-desc">
                <p></p>
            </div>
        </div>
        <FilterContainer>
            <DeleteFilter/>
            <div className="intro">
                <div className="intro-desc">
                    <div className="filter">
                        <LengthFilter/>
                        <WidthFilter/>
                        <PriceFilter/>
                    </div>
                </div>
                <div className="intro-desc">
                    <div className="filter">
                        <ColorFilter/>
                        <GarnFilter/>
                    </div>
                </div>
            </div>
        </FilterContainer>
        <Gallery/>
        <Specifics/>
    </div>
);

const ShopSchluesselanhaenger = () => (
    <div>
        <div className="intro">
            <div className="intro-desc">
                <p>Hier finden Sie alle Muster und die passenden Suchfunktionen für unsere Schlüsselanhänger.</p>
            </div>
            <div className="intro-desc">
                <p></p>
            </div>
        </div>
        <FilterContainer>
            <DeleteFilter/>
            <div className="intro">
                <div className="intro-desc">
                    <div className="filter">
                        <LengthFilter/>
                        <WidthFilter/>
                        <PriceFilter/>
                    </div>
                </div>
                <div className="intro-desc">
                    <div className="filter">
                        <ColorFilter/>
                        <GarnFilter/>
                        <EingeknuepftesFilter/>
                    </div>
                </div>
            </div>
        </FilterContainer>
        <Gallery/>
        <Specifics/>
    </div>
);

const ShopMarktplatz = () => (
    <div>
        <div className="intro">
            <div className="intro-desc">
                <p>Stöbern Sie auf unserem Marktplatz. Sie finden hier alle Artikel, die wir bereits geknüpft haben und
                    an Lager sind. Wir liefern innerhalb von 3-5 Werktagen.</p>
            </div>
            <div className="intro-desc">
                <p></p>
            </div>
        </div>
        <FilterContainer>
            <DeleteFilter/>
            <div className="intro">
                <div className="intro-desc">
                    <div className="filter">
                        <LengthFilter/>
                        <WidthFilter/>
                        <PriceFilter/>
                    </div>
                </div>
                <div className="intro-desc">
                    <div className="filter">
                        <CategoryFilter/>
                        <ColorFilter/>
                        <GarnFilter/>
                        <EingeknuepftesFilter/>
                    </div>
                </div>
            </div>
        </FilterContainer>
        <Gallery/>
        <Specifics/>
    </div>
);

const Shop = () => (
    <Page
        title="Shop"
        headImagePath={config.get('apiUrl') + 'Image/800p/content/head/artikel_1.jpg'}
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
