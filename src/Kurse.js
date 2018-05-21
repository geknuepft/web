import React from 'react';
import Page from './Page';
import {Navigation, NavigationElement} from './Navigation';
import {Route} from 'react-router-dom';
import config from 'react-global-configuration';
import ContentLayouter from "./ContentLayouter"
import SmartImage from './SmartImage'
import Textbox from './Textbox'

const KurseDefault = () => (
    <ContentLayouter>
        <Textbox>
            <p>Unsere Kurse sind für Anfänger und Fortgeschrittene gleichermassen gedacht. Wir gehen gerne
                individuell auf Ihre Wünsche ein. Es wird an einem grossen Tisch geknüpft, gefaltet und geklebt.
            </p>
        </Textbox>
        <Textbox>
            <h2>Die nächsten Kursdaten</h2>
            <p>Samstag, 13. Januar 2018</p>
            <p>Samstag, 27. Januar 2018</p>
            <p>andere oder weitere Daten gerne auf Anfrage</p>
        </Textbox>
    </ContentLayouter>
);

const KurseKnuepfen = () => (
    <ContentLayouter>
        <Textbox>
            <h2>Der Knüpfkurs</h2>
            <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
                ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
                magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
        </Textbox>
        <SmartImage
            path="/content/box/herstellung5.jpg"
            height="800"
            fullscreen="true"
            alt="Armband"
        />
    </ContentLayouter>
);

const KurseFalten = () => (
    <ContentLayouter>
        <Textbox>
            <h2>Der Faltkurs</h2>
            <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
                ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
                magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
        </Textbox>
        <SmartImage
            path="/content/box/kraniche.jpg"
            height="800"
            fullscreen="true"
            alt="Kraniche"
        />
    </ContentLayouter>
);

const KurseKleben = () => (

    <ContentLayouter>
        <Textbox>
            <h2>Der Klebekurs</h2>
            <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
                ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
                magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
        </Textbox>
        <SmartImage
            path="/content/box/schachtel.jpg"
            height="800"
            fullscreen="true"
            alt="Schachteln"
        />
    </ContentLayouter>
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
