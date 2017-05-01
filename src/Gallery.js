import React from 'react';
import './Gallery.css';

const Gallery = () => (
    <div>
        <div className="intro">
            <div className="intro-desc wide">
                <p>Ihre Auswahl umfasst folgende <span className="bold">304</span> Aritkel:</p>
            </div>
        </div>
        <ul className="article">
            <li>
                <div className="article-img">
                    <img src="http://api0.geknuepft.ch/v0/Image/150p/cma0/160523_1/IMG_3079.JPG"
                         alt="Makroaufnahme"/>
                </div>
                <div className="article-title">Artikel-Nr.</div>
                <table>
                    <tbody>
                    <tr>
                        <td>L&auml;nge</td>
                        <td className="article-desc">Länge in cm</td>
                    </tr>
                    <tr>
                        <td>Breite</td>
                        <td className="article-desc">&#126;Breite in cm</td>
                    </tr>
                    </tbody>
                </table>
                <div className="article-prize">CHF 16.00</div>
            </li>
            <li className="empty"/>
            <li className="empty"/>
            <li className="empty"/>
            <li className="empty"/>
            <li className="empty"/>
            <li className="empty"/>
            <li className="empty"/>
            <li className="empty"/>
        </ul>
    </div>
);

export default Gallery;