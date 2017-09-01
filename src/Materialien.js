import React from 'react';
import Page from './Page';
import {Navigation, NavigationElement} from './Navigation';
import {Route, Link} from 'react-router-dom';
import config from 'react-global-configuration';
import NavigationImage from "./NavigationImage";

const MaterialienDefault = () => (
    <div>
        <div className="intro">
            <div className="intro-desc">
                <p>Neben stumpfen und spitzen Nadeln, einer guten Schere einem Messband und etwas Klebeband, braucht es
                    natürlich Garn. Dieses sollte genügend fest sein und nicht zu leicht zerreissen, denn beim Knüpfen
                    wirken Zug- und Reibungskräfte, die die einzelnen
                    Fasern beschädigen können. Wir verwenden 100%iges Baumwollgarn in zwei Stärken.</p>
            </div>
            <div className="intro-desc">
                <p>Für die Augen und weil es Freude bereitet, mit kleinen, feinen Dingen zu arbeiten, knüpfen wir gerne
                    Perlen und andere Schmuckstücke ein. Einige Muster eigenen sich dazu besonders gut.</p>
            </div>
        </div>
        <div className="intro">
            <NavigationImage
                imagePath="garn.jpg"
                target="/Materialien/Garne"
                caption="Garne"
            />
            <NavigationImage
                imagePath="perlen.jpg"
                target="/Materialien/Perlen"
                caption="Perlen"
            />
        </div>
    </div>
);

const MaterialienGarne = () => (
    <div>
        <div className="intro">
            <div className="intro-desc">
                <p>Die Garne, welche wir zum Knüpfen verwenden, bestehen aus reiner Baumwolle, welche nach der
                    Verzwirnung merceriert wurde. Die Merzerisation ist ein Veredelungsverfahren, welches die Struktur
                    der Baumwollfasern verändert und so zu einer höheren
                    Festigkeit, mehr Glanz und einer besseren Färbbarkeit führt.
                </p>
            </div>
            <div className="intro-desc">
                <p>Baumwolle ist sehr hautfreundlich. Anfänglich noch etwas steif, wird es mit längerem Tragen weicher
                    und runder. Wir empfehlen, die geknüpften Bändeli & Co. nicht heisser als 40°C zu waschen.</p>
            </div>
        </div>
        <div className="intro">
            <div className="intro-desc">
                <h2>Das dickere Garn</h2>
                <p>Unser hauptsächlich verwendetes Garn ist das Catania von Schachenmayr. Es ist in über 75 Farben
                    erhältlich und uns gefällt seine Art, wie es in der Hand liegt und sich knüpfen lässt. Die Knoten
                    werden fest und gerade. Gut kombinieren lässt es
                    sich mit dem Capri von Katia und dem Quattro von Langyarns, welche die Farbpalette bereichern. Mehr
                    Glanz bietet das Golf-Garn von Langyarns. Es ist noch etwas edler und leuchtet stärker, dafür ist
                    das
                    Knüpfen mit ihm nicht ganz so einfach,
                    da sich die einzelnen Zwirngarne gerne voneinander trennen. </p>
            </div>
            <div className="intro-desc">
                <img src={config.get('imageUrl') + '800p/content/box/garn.jpg'} alt="Garn"/>
            </div>
        </div>
        <div className="intro">
            <div className="intro-desc">
                <h2>Das feinere Garn</h2>
                <p>Angefangen hat unsere Geschichte des Knüpfens aber mit dem Schulgarn von Langyarns. Dieses Garn ist
                    relativ dünn und nicht ganz so fest, wie die andern beschriebenen Garne. Dafür werden die genküpften
                    Muster feiner und die Armbänder dünner. Das Schulgarn von Langyarns kombinieren wir mit dem Catania
                    fine von Schachenmayr und dem Schulgarn Bernetta.
                </p>
            </div>
            <div className="intro-desc">
                <img src={config.get('imageUrl') + '800p/content/box/garn.jpg'} alt="Garn"/>
            </div>
        </div>
    </div>
);

const MaterialienPerlen = () => (
    <div>
        <div className="intro">
            <div className="intro-desc">
                <p>Perlen erfreuen sich zunehmender Beliebtheit.</p>
            </div>
            <div className="intro-desc">
                <p></p>
            </div>
        </div>
        <div className="intro">
            <div className="intro-desc">
                <h2>Steinperlen</h2>
                <p>Perlen aus Stein bieten einen wunderschönen Anblick. Es gib sie in allen Grössen und Farben.</p>
            </div>
            <div className="intro-desc">
                <img src={config.get('imageUrl') + '800p/content/box/stein.jpg'} alt="Steinperlen"/>
            </div>
        </div>
        <div className="intro">
            <div className="intro-desc">
                <h2>Metallperlen</h2>
                <p>Unter anderem verwenden wir Metallperlen aus Chirurgenstahl.</p>
            </div>
            <div className="intro-desc">
                <img src={config.get('imageUrl') + '800p/content/box/metall.jpg'} alt="Steinperlen"/>
            </div>
        </div>
        <div className="intro">
            <div className="intro-desc">
                <h2>Holzperlen</h2>
                <p>Perlen aus Holz sind sehr beliebt und auch angenehm zum Tragen. Aufpassen muss man mit Kontakt mit
                    Wasser, da die
                    Holzperlen aufquellen können. Geknüpfte Bändeli & Co. mit eingearbeiteten Holzperlen sollte nicht in
                    der Waschmaschine
                    gewaschen und beim Baden ausgezogen werden.
                </p>
            </div>
            <div className="intro-desc">
                <img src={config.get('imageUrl') + '800p/content/box/holz.jpg'} alt="Holzperlen"/>
            </div>
        </div>
        <div className="intro">
            <div className="intro-desc">
                <h2>Keramik- und andere Perlen</h2>
                <p>Des Weiteren verwenden wir Perlen aus Keramik, Glas und Wachs. Diese gibt es in nahezu allen Farben
                    und Formen.</p>
            </div>
            <div className="intro-desc">
                <img src={config.get('imageUrl') + '800p/content/box/keramik.jpg'}
                     alt="Keramik und andere Perlen"/>
            </div>
        </div>
    </div>
);

const Materialien = () => (
    <Page
        title="Materialien"
        headImagePath={config.get('imageUrl') + '800p/content/head/perlen.jpg'}
        navigation={
            <Navigation>
                <NavigationElement pathPrefix="/Materialien/" name="Garne"/>
                <NavigationElement pathPrefix="/Materialien/" name="Perlen"/>
            </Navigation>
        }>
        <Route exact path="/Materialien" component={MaterialienDefault}/>
        <Route path="/Materialien/Garne" component={MaterialienGarne}/>
        <Route path="/Materialien/Perlen" component={MaterialienPerlen}/>
    </Page>
);

export default Materialien;
