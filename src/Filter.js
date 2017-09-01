import React from 'react';
import './Filter.css';

const FilterContainer = (props) => (
    <div className="filter-wrap">
        { props.children }
    </div>
);

const SliderFilter = (props) => (
    <div className="filter-slider">
        { props.children }
        <h4>{ props.name_de }:</h4>
        <p>Platz für den Slider</p>
    </div>
);

const LengthFilter = () => (
    <SliderFilter name_de="Länge"/>
);

const OverlengthFilter = () => (
    <SliderFilter name_de="Länge">
        <div className="tag">
            <button>Überlänge</button>
        </div>
    </SliderFilter>
);

const WidthFilter = () => (
    <SliderFilter name_de="Breite"/>
);

const PriceFilter = () => (
    <SliderFilter name_de="Preis"/>
);

const MultiselectFilter = (props) => (
    <div className="filter-box">
        <h4>{ props.name_de }:</h4>
        <ul className="filter-list">
            { props.children }
        </ul>
    </div>
);

const MultiselectFilterItem = (props) => (
    <li>
        <div className="desc">{ props.name_de }</div>
    </li>
);

const CategoryFilter = () => (
    <MultiselectFilter name_de="Kategorie">
        <MultiselectFilterItem name_de="Armband"/>
        <MultiselectFilterItem name_de="Schlüsselanhänger"/>
        <MultiselectFilterItem name_de="Buchzeichen"/>
    </MultiselectFilter>
);

const GarnFilter = () => (
    <MultiselectFilter name_de="Garn">
        <MultiselectFilterItem name_de="dünneres Garn"/>
        <MultiselectFilterItem name_de="dickeres Garn"/>
    </MultiselectFilter>
);

const EingeknuepftesFilter = () => (
    <MultiselectFilter name_de="Eingeknüpftes">
        <MultiselectFilterItem name_de="Steinperlen"/>
        <MultiselectFilterItem name_de="Holzperlen"/>
        <MultiselectFilterItem name_de="Wachsperlen"/>
        <MultiselectFilterItem name_de="Metallperlen"/>
    </MultiselectFilter>
);

const CollectionFilter = () => (
    <MultiselectFilter name_de="Kollektion">
        <MultiselectFilterItem name_de="Phlox und Flieder"/>
        <MultiselectFilterItem name_de="Türkisblauer Sandstrand"/>
        <MultiselectFilterItem name_de="Roter Ocean"/>
        <MultiselectFilterItem name_de="Kornblumenwiese"/>
        <MultiselectFilterItem name_de="Mango auf Moos"/>
        <MultiselectFilterItem name_de="Regenbogen"/>
        <MultiselectFilterItem name_de="Aprikosenduft"/>
        <MultiselectFilterItem name_de="Weihnachtszeit"/>
        <MultiselectFilterItem name_de="Sand am Meer"/>
        <MultiselectFilterItem name_de="Burgunder Beeren"/>
    </MultiselectFilter>
);

const ColorFilter = () => (
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
);

const PatternFilter = () => (
    <div className="filter-box">
        <form>
            <input type="number" name="pattern" value="" placeholder="Suche nach einem Muster"/>
        </form>
    </div>
)

const DeleteFilter = () => (
    <div className="intro filter-delete">
        <div className="intro-desc wide">
            <button>alle Filter zurücksetzen</button>
        </div>
    </div>
);

export {
    FilterContainer,
    LengthFilter,
    OverlengthFilter,
    WidthFilter,
    PriceFilter,
    CategoryFilter,
    GarnFilter,
    EingeknuepftesFilter,
    CollectionFilter,
    ColorFilter,
    PatternFilter,
    DeleteFilter
};