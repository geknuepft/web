import React from 'react';
import Page from './Page';
import {Navigation, NavigationElement} from './Navigation';
import {Route, Link} from 'react-router-dom';
import config from 'react-global-configuration';

const HerstellungDefault = () => (
    <div>
        <div className="intro">
            <div className="intro-desc">
                <p>Knopf um Knopf stellen wir alles selber her. Vom Zuschneiden der Fäden in der richtigen Lä
                    nge bis zum abschliessenden Zöpfeln ist jeder Artikel von uns selbst geknüpft.</p>
            </div>
            <div className="intro-desc">
                <p>Haben Sie auch schon geknüpft und eine Frage dazu oder kommen Sie bei einem Muster nicht weiter?
                    Wir helfen Ihnen gerne. Kommen Sie doch mit Ihrer Arbeit am nächsten Markttage vorbei.</p>
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
                <p>Wie und wo knüpfen wir?</p>
            </div>
            <div className="intro-desc">
            </div>
        </div>
        <div className="intro">
            <div className="intro-desc">
                <h2>Muster- und Farbauswahl</h2>
                <p>Das eine ist vom andern nicht wegzudenken. Manchmal wähle ich zuerst das Muster und suche
                    passende Farben. Manchmal möchte ich unbedingt mit gewissen Farben etwas knüpfn und suche
                    mir ein entsprechendes Muster.</p>
                <br/>
                <p>Um später ein Muster nachknüpfen zu können, ist es hilfreich, einen Plan zu zeichnen,
                    auf dem alle Fäden und Knöpfe ersichtlich sind. Hilfreich hierbei sind auch Generatoren,
                    wie friendship-bracelet.net, ihn zur Verfügung stellt.
                </p>
            </div>
            <div className="intro-desc">
                <img src={config.get('apiUrl') + 'Image/800p/content/box/muster.jpg'} alt="Muster"/>
            </div>
        </div>
        <div className="intro">
            <div className="intro-desc">
                <h2>Vorbereitung</h2>
                <p>Ich habe mich für ein Muster von friendship-bracelets.net entschieden, denn es ist mit 38
                    Fäden eher breit und ermöglicht in drei Farbnuancen zu knüpfen. Als Hintergrundfarben
                    dienen mir crème und braun.</p>
                <br/>
                <p>Zuerst schneide ich die 38 Fäden zu. Da ich das Muster zum ersten Mal knüpfe, wähle
                    ich für alle Fäden 150 cm. Ich klebe sie sogfältig in der richtigen Reihenfolge auf
                    den Tisch. In diesem Fall habe ich zuerst die 22 crèmefarbenen Fäden aufgeklebt und
                    anschliessend die andersfarbigen Fäden am richtigen Ort hinzugefügt.</p>
            </div>
            <div className="intro-desc">
                <img src={config.get('apiUrl') + 'Image/800p/content/box/herstellung1.jpg'} alt="Vorbereitung"/>
            </div>
        </div>
        <div className="intro">
            <div className="intro-desc">
                <h2>Anfang</h2>
                <p>Die erste Reihe gerade hinzubekommen ist mitunter am Schwierigsten. Auch ich gerate etwas schief,
                    weiss aber, dass ich dies später noch ausgleichen kann. So knüpfe ich die ersten 5-10
                    Reihen, sodass alle Fäden gut ineinander verknotet sind und sich keiner mehr herausziehen
                    lässt.</p>
                <br/>
                <p>Inzwischen erkenne ich, in welcher Reihenfolge ich vorgehen muss, um mit einem Faden möglichst
                    lange Abschnitte zu knüpfen. Meistens sind die Abschnitte begrenzt durch Wendeknöpfe, d.h.
                    Knicke im Farbverlauf.</p>
            </div>
            <div className="intro-desc">
                <img src={config.get('apiUrl') + 'Image/800p/content/box/herstellung2.jpg'} alt="Anfang"/>
            </div>
        </div>
        <div className="intro">
            <div className="intro-desc">
                <h2>Knüpfen</h2>
                <p>Während dem Knüpfen achte ich darauf, möglichst gleichmässig die Knoten
                    anzuziehen. Das ist nicht immer einfach. Gerade die Wendeknöpfe geraten meist etwas grö
                    sser. Passiert mir einen Fehler, hilft eine stumpfe Nadel.</p>
                <br/>
                <p>Habe ich die gewünschte Länge erreicht, gleiche ich mit zusätzlichen Knöpfen oder
                    dem öffnen von Knöpfen auf beiden Seiten den Rand aus, sodass er gerade wird.</p>
            </div>
            <div className="intro-desc">
                <img src={config.get('apiUrl') + 'Image/800p/content/box/herstellung3.jpg'} alt="Knüpfen"/>
            </div>
        </div>
        <div className="intro">
            <div className="intro-desc">
                <h2>Abschluss</h2>
                <p>Bin ich mit der Länge zufrieden, klebe ich das Armband so auf den Tisch, dass die losen Fä
                    den zu mir zeigen. In diesem Fall, bei 38 Fäden, teile ich die losen Fäden durch 3 und
                    stelle also 3 Zöpfe her. Bei dünnen Armbändern ist ein Zopf ausreichend, bei
                    mitteldicken zwei Zöpfe. Um den Zopf abzuschliessen, ziehe ich einen festen Knoten.</p>
                <br/>
                <p>Ich kehre das Armband und zöpfle auch die andere Seite. Dabei achte ich darauf, dass alle
                    Zöpfe gleich lange werden. Ganz am Schluss, schneide ich die überstehenden Fäden
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
                <p>Lesen Sie hier mehr darüber, welche Abschlüsse auch noch möglich sind.</p>
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