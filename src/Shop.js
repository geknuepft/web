import React from 'react';
import Page from './Page';
import {Navigation, NavigationElement} from './Navigation';
import {Route, Link} from 'react-router-dom';

const ShopDefault = () => (
    <div>
        <div className="intro">
            <div className="intro-desc">
                <p>Über 1400 verschiedene Armbänder, Schlüsselanhänger und Buchzeichen bieten wir an. Stöbern Sie auf
                    dem <Link to="/Shop/Marktplatz">Marktplatz</Link> oder suchen Sie gezielt nach einem Muster und wir
                    knüpfen es Ihnen in Ihrer gewünschten Länge.</p>
            </div>
            <div className="intro-desc">
            </div>
        </div>
        <div className="intro">
            <div className="intro-desc overview">
                <img src="http://api0.geknuepft.ch/v0/Image/800p/content/coll.jpg" alt="türkisblauer Sandstrand"/>
                <div className="overview-text">
                    <Link to="/Shop/Armbänder"><span>Unsere neuste Kollektion:</span><br/>Türkisblauer Sandstrand</Link>
                </div>
            </div>
            <div className="intro-desc overview">
                <img src="http://api0.geknuepft.ch/v0/Image/800p/content/marktstand.jpg" alt="Marktstand"/>
                <div className="overview-text">
                    <Link to="/Shop/Marktplatz"><br/>Marktplatz</Link>
                </div>
            </div>
        </div>
    </div>
);

const ShopArmbaender = () => (
    <div>
        <div className="intro">
            <div className="intro-desc">
                <p>Hier finden Sie alle Muster und die passenden Suchfunktionen f&uuml;r ein Armband. Sind Sie unsicher,
                    wie lange Ihr Armband sein soll? <a>Lesen Sie hier mehr darüber!</a></p>
                <br/>
                <p>Möchten Sie ein besonders langes Armand bzw. das Armband doppelt oder dreifach um das Handgelenk
                    wickeln, w&auml;hlen Sie die &Uuml;berl&auml;nge aus.</p>
            </div>
        </div>
        <div className="filter-wrap">
            <div className="intro filter-delete">
                <div className="intro-desc wide">
                    <button>alle Filter zurücksetzen</button>
                </div>
            </div>
            <div className="intro">
                <div className="intro-desc">
                    <div className="filter">
                        <div className="filter-slider">
                            <div className="tag">
                                <button>&Uuml;berl&auml;nge</button>
                            </div>
                            <h4>L&auml;nge:</h4>
                            <p>Platz für den Slider</p>
                        </div>
                        <div className="filter-slider">
                            <h4>Breite:</h4>
                            <p>Platz für den Slider</p>
                        </div>
                        <div className="filter-slider">
                            <h4>Preis:</h4>
                            <p>Platz für den Slider</p>
                        </div>
                    </div>
                </div>
                <div className="intro-desc">
                    <div className="filter">
                        <div className="filter-box">
                            <h4>Farben:</h4>
                            <ul className="filter-list-color">
                                <li>
                                    <div className="color-pix tooltip" style="background-color:#FFFFFF;"><span
                                        className="tooltiptext">weiss</span></div>
                                </li>
                                <li>
                                    <div className="color-pix tooltip selected" style="background-color:#808080;"><span
                                        className="tooltiptext">grau</span></div>
                                </li>
                                <li>
                                    <div className="color-pix tooltip" style="background-color:#000000;"><span
                                        className="tooltiptext">schwarz</span></div>
                                </li>
                                <li>
                                    <div className="color-pix tooltip" style="background-color:#802B00;"><span
                                        className="tooltiptext">braun</span></div>
                                </li>
                                <li>
                                    <div className="color-pix tooltip" style="background-color:#990099;"><span
                                        className="tooltiptext">violett</span></div>
                                </li>
                                <li>
                                    <div className="color-pix tooltip" style="background-color:#FF0066;"><span
                                        className="tooltiptext">pink</span></div>
                                </li>
                                <li>
                                    <div className="color-pix tooltip" style="background-color:#0000FF;"><span
                                        className="tooltiptext">blau</span></div>
                                </li>
                                <li>
                                    <div className="color-pix tooltip" style="background-color:#40E0D0;"><span
                                        className="tooltiptext">türkis</span></div>
                                </li>
                                <li>
                                    <div className="color-pix tooltip" style="background-color:#009900;"><span
                                        className="tooltiptext">grün</span></div>
                                </li>
                                <li>
                                    <div className="color-pix tooltip" style="background-color:#FFFF00;"><span
                                        className="tooltiptext">gelb</span></div>
                                </li>
                                <li>
                                    <div className="color-pix tooltip" style="background-color:#FF9900;"><span
                                        className="tooltiptext">orange</span></div>
                                </li>
                                <li>
                                    <div className="color-pix tooltip" style="background-color:#FF0000;"><span
                                        className="tooltiptext">rot</span></div>
                                </li>
                            </ul>
                        </div>
                        <div className="filter-box">
                            <h4>Garn:</h4>
                            <ul className="filter-list">
                                <li className="selected">
                                    <div className="desc">d&uuml;nneres Garn</div>
                                </li>
                                <li>
                                    <div className="desc">dickeres Garn</div>
                                </li>
                            </ul>
                        </div>
                        <div className="filter-box">
                            <h4>Thema:</h4>
                            <ul className="filter-list">
                                <li>
                                    <div className="desc">Musik</div>
                                </li>
                                <li>
                                    <div className="desc">Tiere</div>
                                </li>
                                <li>
                                    <div className="desc">Jahreszeiten</div>
                                </li>
                            </ul>
                        </div>
                        <div className="filter-box">
                            <h4>Eingekn&uuml;pftes:</h4>
                            <ul className="filter-list">
                                <li>
                                    <div className="desc">Steinperlen</div>
                                </li>
                                <li>
                                    <div className="desc">Holzperlen</div>
                                </li>
                                <li>
                                    <div className="desc">Wachsperlen</div>
                                </li>
                                <li>
                                    <div className="desc">anderes</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="intro">
            <div className="intro-desc wide">
                <p>Ihre Auswahl umfasst folgende <span className="bold">304</span> Aritkel:</p>
            </div>
        </div>
        <div className="detail-wrap">
            <div className="button-wrap">
                <button type="submit" className="close"><img src="pictures/verkleinern.svg" /></button>
            </div>
            <div className="detail">
                <div className="detail-img">
                    <div className="button-wrap">
                        <div className="gallery-button">
                            <button type="submit" className="prev" />
                        </div>
                        <div className="gallery-button">
                            <button type="submit" className="next" />
                        </div>
                    </div>
                    <span className="detail-img-title">Nahaufnahme</span>
                    <img src="http://api0.geknuepft.ch/v0/Image/600p/cma0/161116_4/IMG_4080.JPG">
                    </img>
                </div>
                <div className="detail-desc">
                    <div className="article-computed">
                        <span className="detail-desc-title">Armband mit eingekn&uuml;pften Japanischen Roccailles</span>
                        <table className="tech-data">
                            <tr>
                                <td>Breite</td>
                                <td className="article-desc">&#126; 5 cm</td>
                            </tr>
                            <tr>
                                <td>Anzahl F&auml;den</td>
                                <td className="article-desc">18</td>
                            </tr>
                            <tr>
                                <td>Garntyp</td>
                                <td className="article-desc">Catania fine</td>
                            </tr>
                            <tr>
                                <td>Anzahl Farben</td>
                                <td className="article-desc">5</td>
                            </tr>
                            <tr>
                                <td>Anzahl eingekn&uuml;pfter Japanischer Roccailles</td>
                                <td className="article-desc">20</td>
                            </tr>
                            <tr>
                                <td>Musterwiederholung
                                    <div className="tooltip">
                                        <button className="info">i</button>
                                        <span className="tooltiptext">Info</span>
                                    </div>
                                </td>
                                <td className="article-desc">4 cm</td>
                            </tr>
                            <tr>
                                <td>Gew&uuml;nschte L&auml;nge</td>
                                <td className="article-desc">
                                    <input type="number" step="0.5" name="length" value="14.5" min="10" max="30"
                                           className="inline"/>cm
                                </td>
                            </tr>
                            <tr>
                                <td>Abschluss</td>
                                <td className="article-desc">
                                    <select required className="inline">
                                        <option value="zopf">Zopf</option>
                                        <option value="lose">lose F&auml;den</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Lieferzeit</td>
                                <td className="article-desc">14 Tage</td>
                            </tr>
                            <tr>
                                <td className="spacer" colspan="2"></td>
                            </tr>
                            <tr>
                                <td>Preis</td>
                                <td className="article-desc"><span className="bold">CHF 18.00</span></td>
                            </tr>
                        </table>
                        <button type="submit">in den Warenkorb</button>
                    </div>
                    <div className="article-exist">
                        <p>&Uuml;brigens, dieses Armband ist bereits gekn&uuml;pft und kann wie folgt geliefert
                            werden:</p>
                        <table className="tech-data">
                            <tr>
                                <td>L&auml;nge</td>
                                <td className="article-desc">15 cm</td>
                            </tr>
                            <tr>
                                <td>Abschluss</td>
                                <td className="article-desc">Zopf</td>
                            </tr>
                            <tr>
                                <td>Lieferzeit</td>
                                <td className="article-desc">3 Werktage</td>
                            </tr>
                            <tr>
                                <td className="spacer" colspan="2"></td>
                            </tr>
                            <tr>
                                <td>Preis</td>
                                <td className="article-desc"><span className="bold">CHF 16.00</span></td>
                            </tr>
                        </table>
                        <button type="submit">in den Warenkorb</button>
                    </div>
                </div>
            </div>
        </div>
        <ul className="article">
            <li>
                <div className="article-img">
                    <img src="http://api0.geknuepft.ch/v0/Image/150p/cm0/160523_1/IMG_3079.JPG"
                         alt="Makroaufnahme"/>
                </div>
                <div className="article-title">Artikel-Nr.</div>
                <table>
                    <tr>
                        <td>L&auml;nge</td>
                        <td className="article-desc">Länge in cm</td>
                    </tr>
                    <tr>
                        <td>Breite</td>
                        <td className="article-desc">&#126;Breite in cm</td>
                    </tr>
                </table>
                <div className="article-prize">CHF 16.00</div>
            </li>
            <li className="empty"></li>
            <li className="empty"></li>
            <li className="empty"></li>
            <li className="empty"></li>
            <li className="empty"></li>
            <li className="empty"></li>
            <li className="empty"></li>
            <li className="empty"></li>
        </ul>
    </div>
);

const ShopBuchzeichen = () => (
<h4>Buchzeichen</h4>
);

const ShopSchluesselanhaenger = () => (
<h4>Schlüsselanhänger</h4>
);

const ShopMarktplatz = () => (
<h4>Marktplatz</h4>
);

const Shop = () => (
<Page
    title="Shop"
    headImagePath="http://api0.geknuepft.ch/v0/Image/800p/content/head_artikel.jpg"
    navigation={
        <Navigation>
            <NavigationElement pathPrefix="/Shop/" name="Armbänder"/>
            <NavigationElement pathPrefix="/Shop/" name="Buchzeichen"/>
            <NavigationElement pathPrefix="/Shop/" name="Schlüsselanhänger"/>
            <NavigationElement pathPrefix="/Shop/" name="Marktplatz"/>
        </Navigation>
    }>
    <Route exact path="/Shop" component={ShopDefault}/>
    <Route path="/Shop/Armbänder" component={ShopArmbaender}/>
    <Route path="/Shop/Schlüsselanhänger" component={ShopSchluesselanhaenger}/>
    <Route path="/Shop/Buchzeichen" component={ShopBuchzeichen}/>
    <Route path="/Shop/Marktplatz" component={ShopMarktplatz}/>
</Page>
);

export default Shop;
