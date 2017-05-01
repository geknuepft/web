import React from 'react';
import './Specifics.css';
import verkleinern from './verkleinern.svg';

const Specifics = () => (
    <div className="detail-wrap">
        <div className="button-wrap">
            <button type="submit" className="close"><img src={verkleinern.svg} alt="verkleinern"/></button>
        </div>
        <div className="detail">
            <div className="detail-img">
                <div className="button-wrap">
                    <div className="gallery-button">
                        <button type="submit" className="prev"/>
                    </div>
                    <div className="gallery-button">
                        <button type="submit" className="next"/>
                    </div>
                </div>
                <span className="detail-img-title">Nahaufnahme</span>
                <img src="http://api0.geknuepft.ch/v0/Image/600p/cma0/161116_4/IMG_4080.JPG" alt="Artikel">
                </img>
            </div>
            <div className="detail-desc">
                <div className="article-computed">
                    <span className="detail-desc-title">Armband mit eingekn&uuml;pften Japanischen Roccailles</span>
                    <table className="tech-data">
                        <tbody>
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
                                <input type="number" step="0.5" name="length" defaultValue={14.5} min="10" max="30"
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
                            <td className="spacer" colSpan={2}/>
                        </tr>
                        <tr>
                            <td>Preis</td>
                            <td className="article-desc"><span className="bold">CHF 18.00</span></td>
                        </tr>
                        </tbody>
                    </table>
                    <button type="submit">in den Warenkorb</button>
                </div>
                <div className="article-exist">
                    <p>&Uuml;brigens, dieses Armband ist bereits gekn&uuml;pft und kann wie folgt geliefert
                        werden:</p>
                    <table className="tech-data">
                        <tbody>
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
                            <td className="spacer" colSpan={2}/>
                        </tr>
                        <tr>
                            <td>Preis</td>
                            <td className="article-desc"><span className="bold">CHF 16.00</span></td>
                        </tr>
                        </tbody>
                    </table>
                    <button type="submit">in den Warenkorb</button>
                </div>
            </div>
        </div>
    </div>
);

export default Specifics;