import React from 'react'
import Page from './Page'
import {Link} from 'react-router-dom'
import config from 'react-global-configuration'
import ContentLayouter from "./ContentLayouter"
import Textbox from "./Textbox"

const Impressum = () => (
    <Page
        title="Impressum"
        headImagePath={config.get('imageUrl') + '800p/content/head/artikel_15.jpg'}
    >
        <ContentLayouter>
            <Textbox>
                <h4>Die Webseite www.geknüpft.ch wird betrieben von:</h4>
                <p>Familie Koestler<br/>
                    Richtiring 22<br/>
                    8304 Wallisellen<br/>
                    Schweiz
                </p>
                <h5>Kontakt:</h5>
                <p>
                    <a href="mailto:info@geknüpft.ch?Subject=info@geknüpft.ch"
                       target="_top">info@geknüpft.ch</a><br/>
                    oder über das <Link to="/Kontakt">Kontaktformular</Link>
                </p>
                <h5>Nutzung von Inhalt und Bildmaterial:</h5>
                <p>Sofern nicht anders vermerkt, sind alle Inhalte dieser Webseite Eigentum der Familie Koestler. Die
                    Nutzung unterliegt dem Urheberrecht. Kopien von Inhalten und Bildern dieser Webseite sind
                    ausschliesslich für private Zwecke erlaubt. Alle anderen Nutzungen bedürfen unserer schriftlichen
                    Zustimmung. Bitte nehmen Sie mit uns Kontakt auf.</p>
            </Textbox>
        </ContentLayouter>
    </Page>
);

export default Impressum;
