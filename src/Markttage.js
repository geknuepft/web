import React from 'react';
import Page from './Page';
import config from 'react-global-configuration';

const Markttage = () => (
    <Page
        title="Markttage"
        headImagePath={config.get('apiUrl') + 'Image/800p/content/head/artikel_7.jpg'}
    >
        <div className="intro">
            <div className="intro-desc">
                <p>Unsere handgefertigkten Artikel präsentieren wir regelmässig an verschiedenen Märkten
                    in
                    der Region Winterthur und Zürich, u.a. am Kunst- und Handwerkermarkt in Winterthur, am
                    Walliseller
                    Frühlingsmarkt und am Weltmarkt
                    in Zürich Oerlikon. Die genauen Daten, Zeiten und Lokalitäten sind untenstehend zu finden
                    und
                    werden laufend ergänzt. Wir freuen uns auf Ihren persönlichen Besuch!</p>
            </div>
            <div className="intro-desc">
                <p>Das Wetter macht leider nicht immer mit. Spätestens am Vorabend jedes Marktes entscheiden wir, ob es
                    genügend trocken ist, um am Markt teilzunehmen und schalten dies hier auf.</p>
            </div>
        </div>
        <div className="intro">
            <div className="intro-desc">
                <h2>Kunst und Handwerkermarkt Winterthur</h2>
                <table>
                    <tr>
                        <th>Datum:</th>
                        <td>15. September 2017</td>
                    </tr>
                    <tr>
                        <th>Zeit:</th>
                        <td>8 Uhr bis 16 Uhr</td>
                    </tr>
                    <tr>
                        <th>Ort:</th>
                        <td><a href="http://map.search.ch/d/zdkodrmzd" target="_blank">Winterthur, im Neumarkt (s.
                            Karte)</a></td>
                    </tr>
                </table>
                <p>Am Kunst- und Handwerkermarkt präsentieren zwischen 10 und 20 Ständen aus der Region ihre
                    selbst hergestellen Produkte.</p>
            </div>
            <div className="intro-desc">
                <img src={config.get('apiUrl') + 'Image/800p/content/box/khw.jpg'} alt="Marktstand Winterthur"/>
            </div>
        </div>
        <div className="intro">
            <div className="intro-desc">
                <h2>Riedenermarkt Wallisellen</h2>
                <table>
                    <tr>
                        <th>Datum:</th>
                        <th>30. September 2017</th>
                    </tr>
                    <tr>
                        <th>Zeit:</th>
                        <td>10 Uhr bis 17 Uhr</td>
                    </tr>
                    <tr>
                        <th>Ort:</th>
                        <td><a href="http://map.search.ch/d/zdkodrmzd" target="_blank">Wallisellen, in der
                            Bahnhofstrasse</a></td>
                    </tr>
                </table>
                <p>Jedes Jahr organisiert der Gewerbeverein Wallisellen ein buntes Markttreiben in der
                    Bahnhofstrasse.</p>
            </div>
            <div className="intro-desc">
                <img src={config.get('apiUrl') + 'Image/800p/content/box/wallisellen.jpg'} alt="Marktstand Wallisellen"/>
            </div>
        </div>
        <div className="intro">
            <div className="intro-desc">
                <h2>Kunst- und Handwerkermarkt Winterthur</h2>
                <table>
                    <tr>
                        <th>Datum:</th>
                        <th>30. Oktober 2017</th>
                    </tr>
                    <tr>
                        <th>Zeit:</th>
                        <td>9 Uhr bis 16 Uhr</td>
                    </tr>
                    <tr>
                        <th>Ort:</th>
                        <td><a href="http://map.search.ch/d/zdkodrmzd" target="_blank">Winterthur, im Neumarkt (s.
                            Karte)</a></td>
                    </tr>
                </table>
            </div>
            <div className="intro-desc">
                <img src={config.get('apiUrl') + 'Image/800p/content/box/khw_winter.jpg'} alt="Marktstand Winterthur im Winter"/>
            </div>
        </div>
    </Page>
);

export default Markttage;