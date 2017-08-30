import React from 'react';
import Page from './Page'

const Impressum = () => (
    <Page
        title="Impressum"
        headImagePath="http://api0.geknuepft.ch/v0/Image/800p/content/head/artikel_15.jpg"
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