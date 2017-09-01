import React from 'react';
import './Specifics.css';
import verkleinern from '../public/verkleinern.svg';
import config from 'react-global-configuration';

const ArticleExist = () => (
    <div className="article-exist">
        <span className="detail-desc-title">Armband mit Eingeknüpftem</span>
        <table className="tech-data">
            <tbody>
            <tr>
                <td>Artikel-Nr.</td>
                <td className="article-desc">1100</td>
            </tr>
            <tr>
                <td>Instanz-Nr.</td>
                <td className="article-desc">1234</td>
            </tr>
            <tr>
                <td>Länge</td>
                <td className="article-desc">&#126; 14 cm</td>
            </tr>
            <tr>
                <td>Breite</td>
                <td className="article-desc">&#126; 5 cm</td>
            </tr>
            <tr>
                <td>Höhe</td>
                <td className="article-desc">&#126; 1 cm</td>
            </tr>
            <tr>
                <td>Anzahl Fäden</td>
                <td className="article-desc">18</td>
            </tr>
            <tr>
                <td>Garntyp</td>
                <td className="article-desc">Catania fine</td>
            </tr>
            <tr>
                <td>Anzahl Farben</td>
                <td className="article-desc">4</td>
            </tr>
            <tr>
                <td>Farbnamen</td>
                <td className="article-desc">mango, créme, weiss, schwarz</td>
            </tr>
            <tr>
                <td>Eingeknüpftes</td>
                <td className="article-desc">20x Japanische Roccailles<br/>1x Silberfaden</td>
            </tr>
            <tr>
                <td>Muster</td>
                <td className="article-desc">Nr. 209</td>
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
                <td>Abschluss</td>
                <td className="article-desc">Zopf</td>
            </tr>
            <tr>
                <td>Lieferzeit</td>
                <td className="article-desc">2-5 Tage</td>
            </tr>
            <tr>
                <td className="spacer" colSpan={2}/>
            </tr>
            <tr>
                <td>Preis</td>
                <td className="article-desc">CHF 18.00</td>
            </tr>
            <tr>
                <td>Rabatt</td>
                <td className="article-desc">20%</td>
            </tr>
            <tr>
                <td>Total</td>
                <td className="article-desc"><span className="bold">CHF 16.00</span></td>
            </tr>
            </tbody>
        </table>
        <button type="submit">in den Warenkorb</button>
    </div>
)

const ArticleComputed = () => (
    <div className="article-computed">
        <table className="tech-data">
            <tbody>
            <tr>
                <td>Gewünschte Länge</td>
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
                        <option value="lose">lose Fäden</option>
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
                <td className="article-desc"><span className="bold">CHF 16.00</span></td>
            </tr>
            </tbody>
        </table>
        <button type="submit">in den Warenkorb</button>
    </div>
)


const Specifics = () => (
    <div className="detail-wrap">
        <div className="button-wrap">
            <button type="submit" className="close"><img src={verkleinern} alt="verkleinern"/></button>
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
                <img src={config.get('imageUrl') + '600p/cma0/161116_4/IMG_4080.JPG'} alt="Artikel">
                </img>
            </div>
            <div className="detail-desc">
                <ArticleExist/>
            </div>
        </div>
    </div>
);

export default Specifics;