import React from 'react';
import Page from './Page';
import {Navigation, NavigationElement} from './Navigation';
import {Route, Link} from 'react-router-dom';
import config from 'react-global-configuration';

const HerstellungDefault = () => (
    <div>
        <div className="intro">
            <div className="intro-desc">
                <p>Knopf um Knopf stellen wir alles selber her. Vom Zuschneiden der F&auml;den in der richtigen L&auml;
                    nge bis zum abschliessenden Z&ouml;pfeln ist jeder Artikel von uns selbst gekn&uuml;pft.</p>
            </div>
            <div className="intro-desc">
                <p>Haben Sie auch schon gekn&uuml;pft und eine Frage dazu oder kommen Sie bei einem Muster nicht weiter?
                    Wir helfen Ihnen gerne. Kommen Sie doch mit Ihrer Arbeit am n&auml;chsten Markttage vorbei.</p>
            </div>
        </div>
        <div className="intro">
            <div className="intro-desc overview">
                <img src={config.get('apiUrl') + 'Image/800p/content/overview/herstellung5.jpg'}
                     alt="Ein Armband entsteht"/>
                <div className="overview-text">
                    <Link to="/Herstellung/Armband"><br/>Ein Armband entsteht</Link>
                </div>
            </div>
            <div className="intro-desc overview">
                <img src={config.get('apiUrl') + 'Image/800p/content/overview/wallisellen.jpg'} alt="Länge"/>
                <div className="overview-text">
                    <Link to="/Herstellung/Länge"><br/>Die richtige Länge für ein Armband</Link>
                </div>
            </div>
        </div>
    </div>
);

const HerstellungArmband = () => (
    <div>
        <div className="intro">
            <div className="intro-desc">
                <p>Wie und wo kn&uuml;pfen wir?</p>
            </div>
            <div className="intro-desc">
            </div>
        </div>
        <div className="intro">
            <div className="intro-desc">
                <h2>Muster- und Farbauswahl</h2>
                <p>Das eine ist vom andern nicht wegzudenken. Manchmal w&auml;hle ich zuerst das Muster und suche
                    passende Farben. Manchmal m&ouml;chte ich unbedingt mit gewissen Farben etwas kn&uuml;pfn und suche
                    mir ein entsprechendes Muster.</p>
                <br/>
                <p>Um sp&auml;ter ein Muster nachkn&uuml;pfen zu k&ouml;nnen, ist es hilfreich, einen Plan zu zeichnen,
                    auf dem alle F&auml;den und Kn&ouml;pfe ersichtlich sind. Hilfreich hierbei sind auch Generatoren,
                    wie friendship-bracelet.net, ihn zur Verf&uuml;gung stellt.
                </p>
            </div>
            <div className="intro-desc">
                <img src={config.get('apiUrl') + 'Image/800p/content/box/muster.jpg'} alt="Muster"/>
            </div>
        </div>
        <div className="intro">
            <div className="intro-desc">
                <h2>Vorbereitung</h2>
                <p>Ich habe mich f&uuml;r ein Muster von friendship-bracelets.net entschieden, denn es ist mit 38
                    F&auml;den eher breit und erm&ouml;glicht in drei Farbnuancen zu kn&uuml;pfen. Als Hintergrundfarben
                    dienen mir crème und braun.</p>
                <br/>
                <p>Zuerst schneide ich die 38 F&auml;den zu. Da ich das Muster zum ersten Mal kn&uuml;pfe, w&auml;hle
                    ich f&uuml;r alle F&auml;den 150 cm. Ich klebe sie sogf&auml;ltig in der richtigen Reihenfolge auf
                    den Tisch. In diesem Fall habe ich zuerst die 22 crèmefarbenen F&auml;den aufgeklebt und
                    anschliessend die andersfarbigen F&auml;den am richtigen Ort hinzugef&uuml;gt.</p>
            </div>
            <div className="intro-desc">
                <img src={config.get('apiUrl') + 'Image/800p/content/box/herstellung1.jpg'} alt="Vorbereitung"/>
            </div>
        </div>
        <div className="intro">
            <div className="intro-desc">
                <h2>Anfang</h2>
                <p>Die erste Reihe gerade hinzubekommen ist mitunter am Schwierigsten. Auch ich gerate etwas schief,
                    weiss aber, dass ich dies sp&auml;ter noch ausgleichen kann. So kn&uuml;pfe ich die ersten 5-10
                    Reihen, sodass alle F&auml;den gut ineinander verknotet sind und sich keiner mehr herausziehen
                    l&auml;sst.</p>
                <br/>
                <p>Inzwischen erkenne ich, in welcher Reihenfolge ich vorgehen muss, um mit einem Faden m&ouml;glichst
                    lange Abschnitte zu kn&uuml;pfen. Meistens sind die Abschnitte begrenzt durch Wendekn&ouml;pfe, d.h.
                    Knicke im Farbverlauf.</p>
            </div>
            <div className="intro-desc">
                <img src={config.get('apiUrl') + 'Image/800p/content/box/herstellung2.jpg'} alt="Anfang"/>
            </div>
        </div>
        <div className="intro">
            <div className="intro-desc">
                <h2>Kn&uuml;pfen</h2>
                <p>W&auml;hrend dem Kn&uuml;pfen achte ich darauf, m&ouml;glichst gleichm&auml;ssig die Knoten
                    anzuziehen. Das ist nicht immer einfach. Gerade die Wendekn&ouml;pfe geraten meist etwas gr&ouml;
                    sser. Passiert mir einen Fehler, hilft eine stumpfe Nadel.</p>
                <br/>
                <p>Habe ich die gew&uuml;nschte L&auml;nge erreicht, gleiche ich mit zus&auml;tzlichen Kn&ouml;pfen oder
                    dem &ouml;ffnen von Kn&ouml;pfen auf beiden Seiten den Rand aus, sodass er gerade wird.</p>
            </div>
            <div className="intro-desc">
                <img src={config.get('apiUrl') + 'Image/800p/content/box/herstellung3.jpg'} alt="Knüpfen"/>
            </div>
        </div>
        <div className="intro">
            <div className="intro-desc">
                <h2>Abschluss</h2>
                <p>Bin ich mit der L&auml;nge zufrieden, klebe ich das Armband so auf den Tisch, dass die losen F&auml;
                    den zu mir zeigen. In diesem Fall, bei 38 F&auml;den, teile ich die losen F&auml;den durch 3 und
                    stelle also 3 Z&ouml;pfe her. Bei d&uuml;nnen Armb&auml;ndern ist ein Zopf ausreichend, bei
                    mitteldicken zwei Z&ouml;pfe. Um den Zopf abzuschliessen, ziehe ich einen festen Knoten.</p>
                <br/>
                <p>Ich kehre das Armband und z&ouml;pfle auch die andere Seite. Dabei achte ich darauf, dass alle
                    Z&ouml;pfe gleich lange werden. Ganz am Schluss, schneide ich die &uuml;berstehenden F&auml;den
                    ab.</p>
            </div>
            <div className="intro-desc">
                <img src={config.get('apiUrl') + 'Image/800p/content/box/herstellung4.jpg'} alt="Abschluss"/>
            </div>
        </div>
        <div className="intro">
            <div className="intro-desc">
                <h2>Und fertig...</h2>
                <p>...ist das Armband. </p>
                <br/>
                <p>Lesen Sie hier mehr dar&uuml;ber, welche Abschl&uuml;sse auch noch m&ouml;glich sind.</p>
            </div>
            <div className="intro-desc">
                <img src={config.get('apiUrl') + 'Image/800p/content/box/herstellung5.jpg'} alt="Fertig"/>
            </div>
        </div>
    </div>
);

const HerstellungAbschluesse = () => (
    <h4>Abschluss</h4>
);

const HerstellungLaenge = () => (
    <h4>Länge</h4>
);

const Herstellung = () => (
    <Page
        title="Herstellung"
        headImagePath={config.get('apiUrl') + 'Image/800p/content/head/artikel_18.jpg'}
        navigation={
            <Navigation>
                <NavigationElement pathPrefix="/Herstellung/" name="Armband" title="Ein Armband entsteht"/>
                <NavigationElement pathPrefix="/Herstellung/" name="Abschlüsse"/>
                <NavigationElement pathPrefix="/Herstellung/" name="Länge"/>
            </Navigation>
        }>
        <Route exact path="/Herstellung" component={HerstellungDefault}/>
        <Route path="/Herstellung/Armband" component={HerstellungArmband}/>
        <Route path="/Herstellung/Abschlüsse" component={HerstellungAbschluesse}/>
        <Route path="/Herstellung/Länge" component={HerstellungLaenge}/>
    </Page>
);

export default Herstellung;