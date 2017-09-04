import React from 'react';
import Page from './Page';
import {Navigation, NavigationElement} from './Navigation';
import {Route} from 'react-router-dom';
import config from 'react-global-configuration';

const KurseDefault = () => (
    <div>
        <div className="intro">
            <div className="intro-desc">
                <p>Unsere Kurse sind für Anfänger und Fortgeschrittene gleichermassen gedacht. Wir gehen gerne
                    individuell auf Ihre Wünsche ein. Es wird an einem grossen Tisch geknüpft, gefaltet und geklebt.
                </p>
            </div>
            <div className="intro-desc center">
                <h2>Die nächsten Kursdaten</h2>
                <p>Samstag, 13. Januar 2018</p>
                <p>Samstag, 27. Januar 2018</p>
                <p>andere oder weitere Daten gerne auf Anfrage</p>
            </div>
        </div>
    </div>
);

const KurseKnuepfen = () => (
        <div className="intro">
            <div className="intro-desc">
                <h2>Der Knüpfkurs</h2>
                <p></p>
            </div>
            <div className="intro-desc">
                <img src={config.get('imageUrl') + '800p/content/box/herstellung5.jpg'} alt="Armband"/>
            </div>
        </div>
);

const KurseFalten = () => (
        <div className="intro">
            <div className="intro-desc">
                <h2>Der Faltkurs</h2>
                <p></p>
            </div>
            <div className="intro-desc">
                <img src={config.get('imageUrl') + '800p/content/box/kraniche.jpg'} alt="Kraniche"/>
            </div>
        </div>
);

const KurseKleben = () => (
        <div className="intro">
            <div className="intro-desc">
                <h2>Der Klebkurs</h2>
                <p></p>
            </div>
            <div className="intro-desc">
                <img src={config.get('imageUrl') + '800p/content/box/schachtel.jpg'} alt="Schachteln"/>
            </div>
        </div>
);



const Kurse = () => (
    <Page
        title="Kurse"
        headImagePath={config.get('imageUrl') + '800p/content/head/artikel_21.jpg'}
        navigation={
            <Navigation>
                <NavigationElement pathPrefix="/Kurse/" name="Knüpfen"/>
                <NavigationElement pathPrefix="/Kurse/" name="Falten"/>
                <NavigationElement pathPrefix="/Kurse/" name="Kleben"/>
            </Navigation>
        }>
        <Route exact path="/Kurse" component={KurseDefault}/>
        <Route path="/Kurse/Knüpfen" component={KurseKnuepfen}/>
        <Route path="/Kurse/Falten" component={KurseFalten}/>
        <Route path="/Kurse/Kleben" component={KurseKleben}/>
    </Page>
);

export default Kurse;