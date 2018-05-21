import React from 'react';
import Page from './Page';
import config from 'react-global-configuration';
import FormContact from './Forms';

const Kontakt = () => (
    <Page
        title="Kontakt"
        headImagePath={config.get('imageUrl') + '800p/content/head/artikel_2.jpg'}
    >
        <div className="intro">
            <div className="intro-desc">
                <h2>Anschrift</h2>
                <p>Familie Koestler<br/>Richtiring 22<br/> CH-8304 Wallisellen<br/>
                    <span className="bold"><a href="mailto:info@geknüpft.ch?Subject=info@geknüpft.ch"
                                              target="_top">info@geknüpft.ch</a></span></p>
            </div>
            <div className="intro-desc">
                <h>Gerne nehmen wir Ihre ganz persönlichen Wünsche entgegen.</h>
                <p>Schreiben Sie uns eine E-Mail auf <a
                    href="mailto:info@geknüpft.ch?Subject=info@geknüpft.ch"
                    target="_top">info@geknüft.ch
                </a> oder nehmen Sie über das Formular mit uns Kontakt auf.
                    Wir antworten Ihnen so rasch wie möglich.
                </p>
                
            </div>
        </div>
        <div className="intro">
            <div className="intro-desc">
                <FormContact/>
            </div>
            <div className="intro-desc">
            </div>
        </div>
    </Page>
);

export default Kontakt;
