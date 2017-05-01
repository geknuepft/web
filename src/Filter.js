import React from 'react';
import './Filter.css';

const Filter = () => (
    <div className="filter-wrap">
        <div className="intro filter-delete">
            <div className="intro-desc wide">
                <button>alle Filter zurücksetzen</button>
            </div>
        </div>
        <div className="intro">
            <div className="intro-desc">
                <div className="filter">
                    <div className="filter-slider">
                        <div className="tag">
                            <button>&Uuml;berl&auml;nge</button>
                        </div>
                        <h4>L&auml;nge:</h4>
                        <p>Platz für den Slider</p>
                    </div>
                    <div className="filter-slider">
                        <h4>Breite:</h4>
                        <p>Platz für den Slider</p>
                    </div>
                    <div className="filter-slider">
                        <h4>Preis:</h4>
                        <p>Platz für den Slider</p>
                    </div>
                </div>
            </div>
            <div className="intro-desc">
                <div className="filter">
                    <div className="filter-box">
                        <h4>Farben:</h4>
                        <ul className="filter-list-color">
                            <li>
                                <div className="color-pix tooltip" style={{backgroundColor: '#FFFFFF'}}><span
                                    className="tooltiptext">weiss</span></div>
                            </li>
                            <li>
                                <div className="color-pix tooltip selected" style={{backgroundColor: '#808080'}}><span
                                    className="tooltiptext">grau</span></div>
                            </li>
                            <li>
                                <div className="color-pix tooltip" style={{backgroundColor: '#000000'}}><span
                                    className="tooltiptext">schwarz</span></div>
                            </li>
                            <li>
                                <div className="color-pix tooltip" style={{backgroundColor: '#802B00'}}><span
                                    className="tooltiptext">braun</span></div>
                            </li>
                            <li>
                                <div className="color-pix tooltip" style={{backgroundColor: '#990099'}}><span
                                    className="tooltiptext">violett</span></div>
                            </li>
                            <li>
                                <div className="color-pix tooltip" style={{backgroundColor: '#FF0066'}}><span
                                    className="tooltiptext">pink</span></div>
                            </li>
                            <li>
                                <div className="color-pix tooltip" style={{backgroundColor: '#0000FF'}}><span
                                    className="tooltiptext">blau</span></div>
                            </li>
                            <li>
                                <div className="color-pix tooltip" style={{backgroundColor: '#40E0D0'}}><span
                                    className="tooltiptext">türkis</span></div>
                            </li>
                            <li>
                                <div className="color-pix tooltip" style={{backgroundColor: '#009900'}}><span
                                    className="tooltiptext">grün</span></div>
                            </li>
                            <li>
                                <div className="color-pix tooltip" style={{backgroundColor: '#FFFF00'}}><span
                                    className="tooltiptext">gelb</span></div>
                            </li>
                            <li>
                                <div className="color-pix tooltip" style={{backgroundColor: '#FF9900'}}><span
                                    className="tooltiptext">orange</span></div>
                            </li>
                            <li>
                                <div className="color-pix tooltip" style={{backgroundColor: '#FF0000'}}><span
                                    className="tooltiptext">rot</span></div>
                            </li>
                        </ul>
                    </div>
                    <div className="filter-box">
                        <h4>Garn:</h4>
                        <ul className="filter-list">
                            <li className="selected">
                                <div className="desc">d&uuml;nneres Garn</div>
                            </li>
                            <li>
                                <div className="desc">dickeres Garn</div>
                            </li>
                        </ul>
                    </div>
                    <div className="filter-box">
                        <h4>Thema:</h4>
                        <ul className="filter-list">
                            <li>
                                <div className="desc">Musik</div>
                            </li>
                            <li>
                                <div className="desc">Tiere</div>
                            </li>
                            <li>
                                <div className="desc">Jahreszeiten</div>
                            </li>
                        </ul>
                    </div>
                    <div className="filter-box">
                        <h4>Eingekn&uuml;pftes:</h4>
                        <ul className="filter-list">
                            <li>
                                <div className="desc">Steinperlen</div>
                            </li>
                            <li>
                                <div className="desc">Holzperlen</div>
                            </li>
                            <li>
                                <div className="desc">Wachsperlen</div>
                            </li>
                            <li>
                                <div className="desc">anderes</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Filter;