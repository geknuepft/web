import React from 'react'
import Page from './Page'
import {
    FilterContainer,
    LengthFilter,
    WidthFilter,
    PriceFilter,
    CategoryFilter,
    GarnFilter,
    EingeknuepftesFilter,
    CollectionFilter,
    PatternFilter,
    ColorFilter,
    DeleteFilter
} from './Filter'
import {
    LengthArmbandSelector,
    LengthBuchzeichenSelector,
    LengthSchluesselSelector,
} from './LengthSelector'
import Gallery from './Gallery'
import Textbox from './Textbox'
import {Navigation, NavigationElement} from './Navigation'
import {Route, Link} from 'react-router-dom'
import config from 'react-global-configuration'
import './Shop.css'
import NavigationImage from "./NavigationImage"
import {Row} from 'reactstrap'

const ShopDefault = () => (
    <div>
        <Row>
            <Textbox
                text={<span>Über 1400 verschiedene Armbänder, Schlüsselanhänger und Buchzeichen bieten wir an. Stöbern Sie auf
                    dem <Link to="/Shop/Marktplatz">Marktplatz</Link> oder suchen Sie gezielt nach einem Muster und wir
                    knüpfen es Ihnen in Ihrer gewünschten Länge.</span>}
            />
            <Textbox/>
        </Row>
        <Row>
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
        </Row>
        <Row>
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
        </Row>
        <Row>
            <Textbox
                text={<span>Finden sie hier unsere neusten Kollektionen auf einen Blick. Klicken Sie auf jene Farbkombination,
                    die Ihnen am Besten gefällt, und sie gelangen direkt zu allen Artikel, die es mit diesen Farbe gibt.</span>}
            />
            <Textbox/>
        </Row>
        <Row>
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
        </Row>
        <Row>
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
        </Row>
    </div>
);

const ShopArmbaender = () => (
    <div>
        <Row>
            <Textbox
                text={<span>Hier finden Sie alle Muster und die passenden Suchfunktionen für ein Armband. Sind Sie unsicher,
                    wie lange Ihr Armband sein soll? <a>Lesen Sie hier mehr darüber!</a></span>}
            />
            <Textbox
                text={<span>Möchten Sie ein besonders langes Armand bzw. das Armband doppelt oder dreifach um das Handgelenk
                    wickeln, wählen Sie die Überlänge aus.</span>}
            />
        </Row>
        <FilterContainer>
            <DeleteFilter/>
            <div className="intro">
                <div className="intro-desc">
                    <div className="filter">
                        <LengthArmbandSelector/>
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
    </div>
);

const ShopBuchzeichen = () => (
    <div>
        <Row>
            <Textbox
                text={<span>Hier finden Sie alle Muster und die passenden Suchfunktionen für unsere Buchzeichen.</span>}
            />
            <Textbox/>
        </Row>
        <FilterContainer>
            <DeleteFilter/>
            <div className="intro">
                <div className="intro-desc">
                    <div className="filter">
                        <LengthBuchzeichenSelector/>
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
    </div>
);

const ShopSchluesselanhaenger = () => (
    <div>
        <Row>
            <Textbox
                text={<span>Hier finden Sie alle Muster und die passenden Suchfunktionen für unsere Schlüsselanhänger.</span>}
            />
            <Textbox/>
        </Row>
        <FilterContainer>
            <DeleteFilter/>
            <div className="intro">
                <div className="intro-desc">
                    <div className="filter">
                        <LengthSchluesselSelector/>
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
    </div>
);

const ShopMarktplatz = () => (
    <div>
        <Row>
            <Textbox
                text={<span>Stöbern Sie auf unserem Marktplatz. Sie finden hier alle Artikel, die wir bereits geknüpft haben und
                    an Lager sind. Wir liefern innerhalb von 3-5 Werktagen.</span>}
            />
            <Textbox/>
        </Row>
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
