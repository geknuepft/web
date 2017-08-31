import React from 'react';
import Page from './Page'
import config from 'react-global-configuration';

const Kontakt = () => (
    <Page
        title="Kontakt"
        headImagePath={config.get('apiUrl') + 'Image/800p/content/head/artikel_2.jpg'}
    >
        <div className="intro">
            <div className="intro-desc">
                <h2>Anschrift</h2>
                <p>Familie Koestler<br/>Richtiring 22<br/> CH-8304 Wallisellen<br/>
                    <span className="bold"><a href="mailto:info@geknüpft.ch?Subject=info@geknüpft.ch"
                                              target="_top">info@geknüpft.ch</a></span></p>
            </div>
            <div className="intro-desc">
                <p>Gerne nehmen wir Ihre ganz persönlichen Wünsche entgegen.</p>
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
                <div className="form-wrap">
                    <h2>Kontaktformular</h2>
                    <p>Bitte alle mit * gekennzeichneten Felder ausfüllen.</p>
                    <form>
                        <input type="text" name="firstname" value="" placeholder="Vorname*"/>
                        <input type="text" name="name" value="" placeholder="Nachname*"/>
                        <input type="text" name="mail" value="" placeholder="E-Mail-Adresse*"/>
                        <input type="text" name="address" value="" placeholder="Adresse"/>
                        <input type="number" name="phone" value="" placeholder="Telefonnummer"/>
                        <textarea name="message" rows="8" cols="40" value=""
                                  placeholder="Ihre Nachricht*">
                                            </textarea>
                        <p>Ihre Nachricht wird an info@geknüpft.ch gesendet. Sie erhalten auf
                            Ihre angegebene E-Mail-Adresse eine Kopie.</p>
                        <button type="submit">Nachricht senden</button>
                    </form>
                </div>
            </div>
            <div className="intro-desc center">
                <div> {/* todo: show/hide this */}
                    <h4>Vielen Dank für Ihre Nachricht!</h4>
                    <p>Wir werden Ihnen so bald wie möglich antworten.</p>
                </div>
            </div>
        </div>
    </Page>
);

export default Kontakt;