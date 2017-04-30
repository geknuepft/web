import React from 'react';
import Page from './Page'
import {Link} from 'react-router-dom';

const Warenkorb = () => (
    <Page
        title="Warenkorb"
        headImagePath="http://api0.geknuepft.ch/v0/Image/800p/content/marktstand.jpg"
    >
        <div className="intro">
            <div className="intro-desc wide center">
                <h4>Vielen Dank für Ihre Bestellung!</h4>
                <p>Sie erhalten demnächst eine Bestellbestätigung auf Ihre angegebene E-Mail-Adresse.</p>
            </div>
        </div>
        <div className="intro">
            <div className="intro-desc wide">
                <h4>Es befinden sich folgende Artikel in Ihrem Warenkorb:</h4>
            </div>
        </div>
        <table className="cart">
            <tr>
                <th colSpan={2}>&nbsp;</th>
                <th>Preis</th>
                <th className="qty" colSpan={2}>Anzahl</th>
                <th>Total</th>
            </tr>
            <tr>
                <td className="center img"><img
                    src="http://api0.geknuepft.ch/v0/Image/150p/cma0/160523_1/IMG_3079.JPG" alt="Artikel"/></td>
                <td className="left">
                    <h4>Armband</h4>
                    <p>Länge:
                        <input type="number" step="0.5" name="length" value="14.5" min="10" max="30"
                               className="inline"/>cm
                    </p>
                    <p>Abschluss:
                        <select required className="inline">
                            <option value="zopf">Zopf</option>
                            <option value="lose">lose F&auml;den</option>
                        </select>
                    </p>
                    <p>wird neu geknüpft, Lieferzeit: 14 Tage</p>
                </td>
                <td className="price">CHF 15.00</td>
                <td className="qty">2</td>
                <td className="qty-button">
                    <div className="qty-button">
                        <button><span>&#43;</span></button>
                        <button><span>&#45;</span></button>
                    </div>
                </td>
                <td className="price">CHF 30.00</td>
            </tr>
            <tr>
                <td className="center img"><img
                    src="http://api0.geknuepft.ch/v0/Image/150p/cma0/160523_1/IMG_3232.JPG" alt="Artikel"/></td>
                <td className="left">
                    <h4>Armband</h4>
                    <p>Länge: 15cm</p>
                    <p>Abschluss: Zopf</p>
                    <p>ab Lager, Lieferzeit: 3 Werktage</p>
                </td>
                <td className="price">CHF 38.00</td>
                <td className="qty">1</td>
                <td className="qty-button">
                    <div className="qty-button">
                        <button><span>&#43;</span></button>
                        <button><span>&#45;</span></button>
                    </div>
                </td>
                <td className="price">CHF 38.00</td>
            </tr>
            <tr>
                <td className="spacer" colSpan={6}/>
            </tr>
            <tr>
                <td className="left total" colSpan={5}>
                    <h4>Zwischentotal Artikel</h4></td>
                <td className="price total">CHF 68.00</td>
            </tr>
            <tr>
                <td className="left" colSpan={6}>
                    <h4>Versand und Verpackung</h4></td>
            </tr>
            <tr>
                <td className="left" colSpan={5}>
                    <div>
                        Wählen Sie Ihr Lieferland:
                        <select className="small">
                            <option value="swiss">Schweiz</option>
                            <option value="germany">Deutschland</option>
                            <option value="austria">&Ouml;sterreich</option>
                        </select>
                    </div>
                </td>
                <td className="price"> CHF 2.00</td>
            </tr>
            <tr>
                <td className="spacer" colSpan={6}/>
            </tr>
            <tr>
                <td className="left total" colSpan={5}>
                    <h4>Total</h4></td>
                <td className="price total"><span className="bold">CHF 70.00</span></td>
            </tr>
        </table>
        <div className="intro">
            <div className="intro-desc">
            </div>
        </div>
        <div className="intro">
            <div className="intro-desc">
                <h4>Ihre Kontaktdaten:</h4>
                <form>
                    <input type="text" name="mail" value="" placeholder="E-Mail-Adresse"/>
                    <input type="number" name="phone" value="" placeholder="Telefon"/>
                </form>
            </div>
            <div className="intro-desc">
            </div>
        </div>
        <div className="intro">
            <div className="intro-desc">
                <h4>Ihre Lieferadresse:</h4>
                <form>
                    <select required>
                        <option value="" selected disabled>Anrede</option>
                        <option value="w">Frau</option>
                        <option value="m">Herr</option>
                    </select>
                    <input type="text" name="firstname" value="" placeholder="Vorname"/>
                    <input type="text" name="name" value="" placeholder="Nachname"/>
                    <input type="text" name="street" value="" placeholder="Strasse"/>
                    <input type="number" name="streetnumber" value="" placeholder="Hausnummer"/>
                    <input type="number" name="plz" value="" placeholder="Postleitzahl"/>
                    <input type="text" name="city" value="" placeholder="Stadt"/>
                    <input type="text" name="country" value="" placeholder="Land"/>
                    <p><a>Klicke Sie bitte hier, sollte die Lieferadresse von der Rechnungsadresse abweichen</a>
                    </p>
                </form>
            </div>
            <div className="intro-desc">
                <h4>Ihre Rechnungsadresse:</h4>
                <form>
                    <select required>
                        <option value="" selected disabled>Anrede</option>
                        <option value="w">Frau</option>
                        <option value="m">Herr</option>
                    </select>
                    <input type="text" name="firstname" value="" placeholder="Vorname"/>
                    <input type="text" name="name" value="" placeholder="Nachname"/>
                    <input type="text" name="street" value="" placeholder="Strasse"/>
                    <input type="number" name="streetnumber" value="" placeholder="Hausnummer"/>
                    <input type="number" name="plz" value="" placeholder="Postleitzahl"/>
                    <input type="text" name="city" value="" placeholder="Stadt"/>
                    <input type="text" name="country" value="" placeholder="Land"/>
                </form>
            </div>
        </div>
        <div className="intro">
            <div className="intro-desc">
                <form>
                    <textarea name="message" rows="8" cols="10" value="" placeholder="Ihre Nachricht"/>
                </form>
            </div>
            <div className="intro-desc center">
                <div className="agb">
                    <div className="check">
                        <input type="checkbox" value="None" id="check" name="check"/>
                        <label htmlFor="check"/>
                    </div>
                    <p>Ich habe die <Link to="/Agb">Allgemeinen Gesch&auml;ftsbedingungen</Link> gelesen und bin
                        damit
                        einverstanden.</p>
                </div>
                <button type="submit" className="order">Bestellung senden</button>
            </div>
        </div>
    </Page>
);

export default Warenkorb;