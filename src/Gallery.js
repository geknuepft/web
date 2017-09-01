import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Gallery.css';
import axios from 'axios';
import config from 'react-global-configuration';
import {Chf, Mm, Cm} from "./Number";

const GallerySorter = () => (
    <select className="inline">
        <option value="new">Neuste zuoberst</option>
        <option value="old">Älteste zuoberst</option>
        <option value="price_up">Preis aufsteigend</option>
        <option value="price_down">Preis absteigend</option>
    </select>
);

class GalleryIntro extends Component {

    static propTypes = {
        numberOfItems: PropTypes.number.isRequired,
    };

    render() {
        return (
            <div className="intro">
                <div className="intro-desc">
                    <p>Ihre Auswahl umfasst folgende <span className="bold">{this.props.numberOfItems}</span> Aritkel:
                    </p>
                </div>
                <div className="intro-desc right">
                    <p>sortieren nach:
                        <GallerySorter/>
                    </p>
                </div>
            </div>
        );
    }
}

class GalleryItem extends Component {

    static propTypes = {
        instanceId: PropTypes.number.isRequired,
        articleId: PropTypes.number.isRequired,
        lengthMm: PropTypes.number.isRequired,
        widthMm: PropTypes.number.isRequired,
        picture0: PropTypes.string.isRequired,
        priceCchf: PropTypes.number.isRequired,
        discountCchf: PropTypes.number.isRequired,
    };

    render() {
        const props = this.props;

        return (
            <li>
                <div className="article-img">
                    <img src={config.get('imageUrl') + '150p/' + props.picture0} alt="Makroaufnahme"/>
                </div>
                <div className="article-title">Artikel-Nr. {props.articleId}</div>
                <table>
                    <tbody>
                    <tr>
                        <td>Länge</td>
                        <td className="article-desc"><Cm valueMm={props.lengthMm}/></td>
                    </tr>
                    <tr>
                        <td>Breite</td>
                        <td className="article-desc">&#126;<Mm valueMm={props.widthMm}/></td>
                    </tr>
                    </tbody>
                </table>
                <div className="article-prize">
                    <Chf value={(props.priceCchf - props.discountCchf) / 100}/>
                    (<Chf value={props.discountCchf / 100}/> Rabatt)
                </div>
            </li>
        );
    }
}

class Gallery extends Component {

    constructor(props) {
        super(props);

        this.state = {
            instanceList: null,
        }
    }

    fetchDataFromApi = () => {
        axios.get(config.get('apiUrl') + 'Instance')
            .then(res => {
                this.setState({instanceList: res.data});
            });
    };

    componentDidMount() {
        this.fetchDataFromApi();
    }

    render() {
        // render nothing if list is not loaded
        if (this.state.instanceList === null) {
            return null;
        }

        return (
            <div>
                <GalleryIntro numberOfItems={this.state.instanceList.length}/>
                <ul className="article">
                    {this.state.instanceList.map((instance) =>
                        <GalleryItem
                            key={instance.instanceId}
                            {...instance}
                        />
                    )}
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
    }
}

export default Gallery;