import React from 'react';
import Page from './Page'

const Kontakt = () => (
    <Page
        title="Kontakt"
        headImagePath="http://api0.geknuepft.ch/v0/Image/800p/content/marktstand.jpg"
    >
        <div className="intro">
            <div className="intro-desc">
                <h2>Anschrift</h2>
                <p>Familie Koestler<br/>Richtiring 22<br/> CH-8304 Wallisellen<br/>
                    <span className="bold"><a href="mailto:info@gekn&uuml;pft.ch?Subject=info@gekn&uuml;pft.ch"
                                              target="_top">info@geknüpft.ch</a></span></p>
            </div>
            <div className="intro-desc">
                <p>Gerne nehmen wir Ihre ganz pers&ouml;nlichen W&uuml;nsche entgegen.</p>
                <p>Schreiben Sie uns eine E-Mail auf <a
                    href="mailto:info@gekn&uuml;pft.ch?Subject=info@gekn&uuml;pft.ch"
                    target="_top">info@geknüft.ch
                </a> oder nehmen Sie &uuml;ber das Formular mit uns Kontakt auf.
                    Wir antworten Ihnen so rasch wie m&ouml;glich.
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
                    <p>Wir werden Ihnen so bald wie m&ouml;glich antworten.</p>
                </div>
            </div>
        </div>
    </Page>
);

export default Kontakt;