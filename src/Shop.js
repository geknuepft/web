import React from 'react';
import Page from './Page';
import {
    FilterContainer,
    LengthFilter,
    OverlengthFilter,
    WidthFilter,
    PriceFilter,
    CategoryFilter,
    GarnFilter,
    EingeknuepftesFilter,
    CollectionFilter,
    PatternFilter,
    ColorFilter,
    DeleteFilter
} from './Filter';
import Gallery from './Gallery';
import Specifics from './Specifics';
import {Navigation, NavigationElement} from './Navigation';
import {Route, Link} from 'react-router-dom';
import config from 'react-global-configuration';
import './Shop.css';
import NavigationImage from "./NavigationImage";

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
            <NavigationImage
                imagePath="herstellung5.jpg"
                target="/Shop/Armbänder"
                caption="Armbänder"
            />
            <NavigationImage
                imagePath="wallisellen.jpg"
                target="/Shop/Marktplatz"
                caption="Marktplatz"
            />
        </div>
        <div className="intro">
            <NavigationImage
                imagePath="buchzeichen.jpg"
                target="/Shop/Buchzeichen"
                caption="Buchzeichen"
            />
            <NavigationImage
                imagePath="schluessel.jpg"
                target="/Shop/Schlüsselanhänger"
                caption="Schlüsselanhänger"
            />
        </div>
        <div className="intro">
            <div className="intro-desc wide">
                <p>Finden sie hier unsere neusten Kollektionen auf einen Blick. Klicken Sie auf jene Farbkombination,
                    die Ihnen am Besten gefällt, und sie gelangen direkt zu allen Artikel, die es mit diesen Farbe gibt.
                </p>
            </div>
        </div>
        <div className="intro">
            <NavigationImage
                imagePath="coll_11.jpg"
                target="/Shop/Armbänder"
                caption="Türkisblauer Sandstrand"
                additionalText="Unsere neuste Kollektion:"
            />
            <NavigationImage
                imagePath="coll_15.jpg"
                target="/Shop/Armbänder"
                caption="schwarz-weiss"
            />
        </div>
        <div className="intro">
            <NavigationImage
                imagePath="coll_24.jpg"
                target="/Shop/Armbänder"
                caption="mit Steinperlen"
            />
            <NavigationImage
                imagePath="coll_18.jpg"
                target="/Shop/Armbänder"
                caption="Rottöne"
                additionalText="Der Klassiker:"
            />
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
                        <CollectionFilter/>
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
                        <CollectionFilter/>
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
                        <CollectionFilter/>
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
                        <PatternFilter/>
                    </div>
                </div>
                <div className="intro-desc">
                    <div className="filter">
                        <CategoryFilter/>
                        <ColorFilter/>
                        <GarnFilter/>
                        <EingeknuepftesFilter/>
                        <CollectionFilter/>
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
        headImagePath={config.get('imageUrl') + '800p/content/head/artikel_1.jpg'}
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
