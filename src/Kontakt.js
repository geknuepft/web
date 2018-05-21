import React from 'react'
import Page from './Page'
import config from 'react-global-configuration'
import ContentLayouter from "./ContentLayouter"
import Textbox from './Textbox'

const Kontakt = () => (
    <Page
        title="Kontakt"
        headImagePath={config.get('imageUrl') + '800p/content/head/artikel_2.jpg'}
    >
        <ContentLayouter>
            <Textbox>
                <h2>Anschrift</h2>
                <p>Familie Koestler<br/>Richtiring 22<br/> CH-8304 Wallisellen<br/>
                    <span className="bold"><a href="mailto:info@geknüpft.ch?Subject=info@geknüpft.ch"
                                              target="_top">info@geknüpft.ch</a></span></p>
            </Textbox>
            <Textbox>
                <p>Gerne nehmen wir Ihre ganz persönlichen Wünsche entgegen.</p>
                <p>Schreiben Sie uns eine E-Mail auf <a
                    href="mailto:info@geknüpft.ch?Subject=info@geknüpft.ch"
                    target="_top">info@geknüft.ch
                </a> oder nehmen Sie über das Formular mit uns Kontakt auf.
                    Wir antworten Ihnen so rasch wie möglich.
                </p>
            </Textbox>
        </ContentLayouter>
    </Page>
);

export default Kontakt;
