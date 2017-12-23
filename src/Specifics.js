import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Specifics.css';
import axios from 'axios';
import config from 'react-global-configuration';
import {Chf, Mm, Cm} from './Number';
import ImageScroller from './ImageScroller';
import {ColorPixList, ColorPixListItem} from './ColorPix';
import {ButtonInfo} from './Button';

class InstanceProperty extends Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.element,
        ]),
    };

    render() {
        if (this.props.value === undefined || this.props.value === null) {
            return null;
        }

        const items = (this.props.items === undefined) ? this.props.value : this.props.items;

        return (
            <tr>
                <td>{this.props.name}</td>
                <td className="article-desc">{items}</td>
            </tr>
        );
    }
}
;

class Instance extends Component {

    static propTypes = {
        instanceId: PropTypes.number.isRequired,
        articleId: PropTypes.number.isRequired,
        patternId: PropTypes.number.isRequired,
        lengthMm: PropTypes.number,
        widthMm: PropTypes.number,
        heightMm: PropTypes.number,
        priceCchf: PropTypes.number.isRequired,
        discountCchf: PropTypes.number.isRequired,
        articleName: PropTypes.string.isRequired,
        articleDesc: PropTypes.string,
        numbStrings: PropTypes.number,
        garnType: PropTypes.string,
        colorss: PropTypes.array,
    };

    render() {
        return (
            <div className="article-exist">
                <div className="detail-desc-title">{this.props.articleName}</div>
                <div className="detail-desc-ids">
                    <div>A {this.props.articleId}</div>
                    <div>I {this.props.instanceId}</div>
                    <div>P {this.props.patternId}</div>
                </div>
                <div className="detail-desc-de">
                    <p>{this.props.articleDesc}</p>
                </div>
                <table className="tech-data">
                    <tbody>
                    <InstanceProperty name="Länge" value={this.props.lengthMm}>
                        <Cm valueMm={this.props.lengthMm}/>
                    </InstanceProperty>
                    <InstanceProperty name="Breite" value={this.props.widthMm}>
                        <Mm valueMm={this.props.widthMm}/>
                    </InstanceProperty>
                    <InstanceProperty name="Höhe" value={this.props.heightMm}>
                        <Cm valueMm={this.props.heightMm}/>
                    </InstanceProperty>
                    <InstanceProperty name="Anzahl Fäden" value={this.props.numbStrings}/>
                    <tr>
                        <td>Musterwiederholung
                            <ButtonInfo text="Test"/>
                        </td>
                        <td className="article-desc">alle 4 cm</td>
                    </tr>
                    <InstanceProperty name="garnType" value={this.props.garnType}/>
                    <InstanceProperty name="Anzahl Farben" value={this.props.colors.length}/>
                    <tr>
                        <td>Farben</td>
                        <td className="article-desc">
                            <ColorPixList>
                                {this.props.colors.map(
                                    (color) => (
                                        <ColorPixListItem key={color.colorId} name={color.colorName} hex={color.hex}/>
                                    )
                                )}
                            </ColorPixList>
                        </td>
                    </tr>
                    <tr>
                        <td>Eingeknüpftes</td>
                        <td className="article-desc">20x Japanische Roccailles<br/>1x Silberfaden</td>
                    </tr>
                    <tr>
                        <td>Abschluss</td>
                        <td className="article-desc">Zopf</td>
                    </tr>
                    <tr>
                        <td>Lieferzeit</td>
                        <td className="article-desc">2-5 Tage</td>
                    </tr>
                    <tr>
                        <td className="spacer-line" colSpan={2}/>
                    </tr>
                    <tr>
                        <td>Preis</td>
                        <td className="article-desc price"><Chf
                            value={(this.props.priceCchf - this.props.discountCchf) / 100}/></td>
                    </tr>
                    </tbody>
                </table>
                <button type="submit">in den Warenkorb</button>
            </div>
        );
    }
}

class Specifics extends Component {
    static propTypes = {
        instanceId: PropTypes.number.isRequired,
    };

    constructor(props) {
        super(props);

        this.state = {
            instanceData: null,
        }
    }

    componentDidMount() {
        axios.get(config.get('apiUrl') + 'Instance/' + this.props.instanceId)
            .then(res => {
                this.setState({instanceData: res.data});
            });
    }

    render() {
        if (this.state.instanceData === null) {
            return null;
        }

        return <div className="detail">
            <ImageScroller images={this.state.instanceData.images}/>
            <div className="detail-desc">
                <Instance {...this.state.instanceData} />
            </div>
        </div>
    }
}

export default Specifics;