import React from 'react';
import Page from './Page';
import config from 'react-global-configuration';
import {Link} from 'react-router-dom';

const Home = () => (
    <Page
        title="Willkommen"
        headImagePath={config.get('apiUrl') + 'Image/800p/content/head/artikel_1.jpg'}
        >
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
                    <img src={config.get('apiUrl') + 'Image/800p/content/overview/herstellung5.jpg'}
                         alt="Armband"/>
                    <div className="overview-text">
                        <Link to="/Shop/Armbänder"><br/>Armbänder</Link>
                    </div>
                </div>
                <div className="intro-desc overview">
                    <img src={config.get('apiUrl') + 'Image/800p/content/overview/wallisellen.jpg'} alt="Marktstand"/>
                    <div className="overview-text">
                        <Link to="/Shop/Marktplatz"><br/>Marktplatz</Link>
                    </div>
                </div>
            </div>
            <div className="intro">
                <div className="intro-desc overview">
                    <img src={config.get('apiUrl') + 'Image/800p/content/overview/buchzeichen.jpg'} alt="Buchzeichen"/>
                    <div className="overview-text">
                        <Link to="/Shop/Buchzeichen"><br/>Buchzeichen</Link>
                    </div>
                </div>
                <div className="intro-desc overview">
                    <img src={config.get('apiUrl') + 'Image/800p/content/overview/schluessel.jpg'}
                         alt="Schlüsselanhänger"/>
                    <div className="overview-text">
                        <Link to="/Shop/Schlüsselanhänger"><br/>Schlüsselanhänger</Link>
                    </div>
                </div>
            </div>
        </div>
    </Page>
);

export default Home;
