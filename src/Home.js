import React from 'react'
import Page from './Page'
import config from 'react-global-configuration'
import {Link} from 'react-router-dom'
import NavigationImage from "./NavigationImage"
import {Row, Col} from 'reactstrap'

const Home = () => (
    <Page
        title="Willkommen"
        headImagePath={config.get('imageUrl') + '800p/content/head/artikel_1.jpg'}
    >
        <div>
            <Row>
                <Col xs={12} sm={6}>
                    <p>Über 1400 verschiedene Armänder, Schlüsselanhänger und Buchzeichen bieten wir an. Stöbern Sie
                        auf dem <Link to="/Shop/Marktplatz">Marktplatz</Link> oder suchen Sie gezielt nach einem Muster
                        und wir knüpfen es Ihnen in Ihrer gewünschten Länge.</p>
                </Col>
                <Col xs={12} sm={6}>
                    <p>
                    </p>
                </Col>
            </Row>
            <Row>
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
            </Row>
            <Row>
                <Col xs={12} sm={6}>
                    <p>
                        Knüpfen Sie selbst und kommen bei einem Muster nicht weiter? Oder möchten Sie selbst das Knüpfen
                        erlernen? Besuchen Sie einen unserer Knüpfkurse oder nehmen Sie unverbindlich mit uns Kontakt
                        auf.
                    </p>
                </Col>
                <Col xs={12} sm={6}>
                    <p>
                    </p>
                </Col>
            </Row>
            <Row>
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
            </Row>
        </div>
    </Page>
);

export default Home;
