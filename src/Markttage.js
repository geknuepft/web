import React from 'react';
import Page from './Page';
import config from 'react-global-configuration';
import ContentLayouter from "./ContentLayouter"
import Textbox from './Textbox'
import SmartImage from './SmartImage';

const Markttage = () => (
    <Page
        title="Markttage"
        headImagePath={config.get('imageUrl') + '800p/content/head/artikel_7.jpg'}
    >
        <div>
            <ContentLayouter>
                <Textbox>
                    <p>Unsere handgefertigkten Artikel präsentieren wir regelmässig an verschiedenen Märkten
                        in
                        der Region Winterthur und Zürich, u.a. am Kunst- und Handwerkermarkt in Winterthur, am
                        Walliseller
                        Frühlingsmarkt und am Weltmarkt
                        in Zürich Oerlikon. Die genauen Daten, Zeiten und Lokalitäten sind untenstehend zu finden
                        und
                        werden laufend ergänzt. Wir freuen uns auf Ihren persönlichen Besuch!</p>
                </Textbox>
                <Textbox>
                    <p>Das Wetter macht leider nicht immer mit. Spätestens am Vorabend jedes Marktes entscheiden wir, ob
                        es
                        genügend trocken ist, um am Markt teilzunehmen und schalten dies hier auf.</p>
                </Textbox>
            </ContentLayouter>
            <ContentLayouter>
                <Textbox>
                    <h2>Kunst- und Handwerkermarkt Winterthur</h2>
                    <table>
                        <tbody>
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
                        </tbody>
                    </table>
                    <p>Am Kunst- und Handwerkermarkt präsentieren zwischen 10 und 20 Ständen aus der Region ihre
                        selbst hergestellen Produkte.</p>
                </Textbox>
                <SmartImage
                    path="/content/box/khw.jpg"
                    height={800}
                    fullscreen={true}
                    alt="Marktstand Winterthur"
                />
            </ContentLayouter>
            <ContentLayouter>
                <Textbox>
                    <h2>Riedenermarkt Wallisellen</h2>
                    <table>
                        <tbody>
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
                            <td><a href="http://map.search.ch/d/zdkodrmzd" target="_blank">Wallisellen, in der
                                Bahnhofstrasse</a></td>
                        </tr>
                        </tbody>
                    </table>
                    <p>Jedes Jahr organisiert der Gewerbeverein Wallisellen ein buntes Markttreiben in der
                        Bahnhofstrasse.</p>
                </Textbox>
                <SmartImage
                    path="/content/box/wallisellen.jpg"
                    height={800}
                    fullscreen={true}
                    alt="Marktstand Wallisellen"
                />
            </ContentLayouter>
            <ContentLayouter>
                <Textbox>
                    <h2>Kunst- und Handwerkermarkt Winterthur</h2>
                    <table>
                        <tbody>
                        <tr>
                            <th>Datum:</th>
                            <td>30. Oktober 2017</td>
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
                        </tbody>
                    </table>
                    <p>Jedes Jahr organisiert der Gewerbeverein Wallisellen ein buntes Markttreiben in der
                        Bahnhofstrasse.</p>
                </Textbox>
                <SmartImage
                    path="/content/box/khw_winter.jpg"
                    height={800}
                    fullscreen={true}
                    alt="Marktstand Winterthur im Winter"
                />
            </ContentLayouter>
        </div>
    </Page>
);

export default Markttage;
