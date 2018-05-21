import React from 'react'
import Page from './Page'
import config from 'react-global-configuration'
import {Link} from 'react-router-dom'
import ContentLayouter from "./ContentLayouter"
import NavigationImage from "./NavigationImage"
import Textbox from './Textbox'

const Home = () => (
    <Page
        title="Willkommen"
        headImagePath={config.get('imageUrl') + '800p/content/head/artikel_1.jpg'}
    >
        <div>
            <ContentLayouter>
                <Textbox>
                    <p>Über 1400 verschiedene Armänder, Schlüsselanhänger und Buchzeichen bieten wir an. Stöbern Sie
                        auf dem <Link to="/Shop/Marktplatz">Marktplatz</Link> oder suchen Sie gezielt nach einem Muster
                        und wir knüpfen es Ihnen in Ihrer gewünschten Länge.</p>
                </Textbox>
            </ContentLayouter>
            <ContentLayouter>
                <NavigationImage
                    imagePath="coll_18.jpg"
                    target="/Shop"
                    caption="Unser Onlineshop"
                />
                <NavigationImage
                    imagePath="wallisellen.jpg"
                    target="/Markttage"
                    caption="Wann wir wo sind"
                />
            </ContentLayouter>
            <ContentLayouter>
                <Textbox>
                    <p>Knüpfen Sie selbst und kommen bei einem Muster nicht weiter? Oder möchten Sie selbst das Knüpfen
                        erlernen? Besuchen Sie einen unserer Knüpfkurse oder nehmen Sie unverbindlich mit uns Kontakt
                        auf.</p>
                </Textbox>
            </ContentLayouter>
            <ContentLayouter>
                <NavigationImage
                    imagePath="buchzeichen.jpg"
                    target="/Markttage"
                    caption="Kurse"
                />
                <NavigationImage
                    imagePath="khw.jpg"
                    target="/Kontakt"
                    caption="Kontakt"
                />
            </ContentLayouter>
        </div>
    </Page>
);

export default Home;
