import React, {Component} from 'react';
import config from 'react-global-configuration';
import {ColorPixList, ColorPixListItem} from './ColorPix';
import './Filter.css';
import axios from 'axios';
import Slider from './Slider';

const FilterContainer = (props) => (
    <div className="filter-wrap">
        {props.children}
    </div>
);

const SliderFilter = (props) => (
    <div className="filter-slider">
        {props.children}
        <h4>{props.name_de}:</h4>
        <Slider {...props} />
    </div>
);

const LengthArmbandSelector = () => (
    <SliderFilter
        name_de="Länge"
        min={10}
        max={18}
        step={0.5}
        markStep={1}
        defaultValue={[14]}
    >
        <div className="tag">
            <button>Überlänge</button>
        </div>
    </SliderFilter>
);

const LengthBuchzeichenSelector = () => (
    <SliderFilter
        name_de="Länge"
        min={16}
        max={35}
        step={0.5}
        defaultValue={[20]}
    >
        <div className="tag">
            <button>Überlänge</button>
        </div>
    </SliderFilter>
);

const LengthSchluesselSelector = () => (
    <SliderFilter
        name_de="Länge"
        min={3}
        max={12}
        step={0.5}
        defaultValue={[6]}
    >
        <div className="tag">
            <button>Überlänge</button>
        </div>
    </SliderFilter>
);

const LengthFilter = () => (
    <SliderFilter
        name_de="Länge"
        min={10}
        max={18}
        step={0.5}
        defaultValue={[12, 14]}
    >
        <div className="tag">
            <button>Überlänge</button>
        </div>
    </SliderFilter>
);

const WidthFilter = () => (
    <SliderFilter
        name_de="Breite"
        min={1}
        max={6}
        step={0.2}
        markStep={1}
        markLabel="cm"
        defaultValue={[2, 4]}
    />
);

const PriceFilter = () => (
    <SliderFilter
        name_de="Preis"
        min={2}
        max={70}
        step={2}
        markStep={10}
        defaultValue={[10, 20]}
    />
);

const MultiselectFilter = (props) => (
    <div className="filter-box">
        <h4>{props.name_de}:</h4>
        <ul className="filter-list">
            {props.children}
        </ul>
    </div>
);

const MultiselectFilterItem = (props) => (
    <li>
        <div className="desc">{props.name_de}</div>
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

class ColorFilter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            colorCats: null,
        }
    }

    componentDidMount() {
        axios.get(config.get('apiUrl') + 'ColorCat')
            .then(res => {
                this.setState({colorCats: res.data});
            });
    }

    render() {
        if (this.state.colorCats === null) {
            return null;
        }

        return (
            <div className="filter-box">
                <h4>Farben:</h4>
                <ColorPixList>
                    {this.state.colorCats.map(
                        (colorCat) => (
                            <ColorPixListItem key={colorCat.colorCatId} {...colorCat} />
                        )
                    )}
                </ColorPixList>
            </div>
        );
    }
}

const PatternFilter = () => (
    <div className="filter-box">
        <form>
            <input type="number" name="pattern" value="" placeholder="Suche nach einem Muster"/>
        </form>
    </div>
);

const DeleteFilter = () => (
    <div className="intro filter-delete">
        <div className="intro-desc wide">
            <button>alle Filter zurücksetzen</button>
        </div>
    </div>
);

export {
    FilterContainer,
    LengthArmbandSelector,
    LengthBuchzeichenSelector,
    LengthSchluesselSelector,
    LengthFilter,
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