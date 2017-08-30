import React from 'react';
import Page from './Page';
import config from 'react-global-configuration';

const Impressum = () => (
    <Page
        title="Impressum"
        headImagePath={config.get('apiUrl') + 'Image/800p/content/head/artikel_15.jpg'}
    >
        <div>
            <div className="intro">
                <div className="intro-desc wide">
                    <p>Text für Impressum.
                    </p>
                </div>
            </div>
        </div>
    </Page>
);

export default Impressum;