import React, {Component} from 'react';
import PropTypes from 'prop-types';
import config from 'react-global-configuration';
import './GalleryItem.css';
import {Chf, Mm, Cm} from "./Number";
import Specifics from './Specifics';
import {ButtonClose} from './Button';

const GalleryItemDetails = (props) => (
    <div>
        <div className="article-img">
            <img src={config.get('imageUrl') + '150p/' + props.picture0} alt="Makroaufnahme"/>
        </div>
        <div className="article-title">{props.articleName}</div>
        <table>
            <tbody>
            <tr>
                <td>Länge</td>
                <td className="article-desc"><Cm valueMm={props.lengthMm}/></td>
            </tr>
            <tr>
                <td>Breite</td>
                <td className="article-desc"><Mm valueMm={props.widthMm}/></td>
            </tr>
            </tbody>
        </table>
        <div className="article-prize">
            <Chf value={(props.priceCchf - props.discountCchf) / 100}/>
        </div>
    </div>
);

class GalleryItem extends Component {

    static propTypes = {
        instanceId: PropTypes.number.isRequired,
        articleName: PropTypes.string.isRequired,
        lengthMm: PropTypes.number.isRequired,
        widthMm: PropTypes.number.isRequired,
        picture0: PropTypes.string.isRequired,
        priceCchf: PropTypes.number.isRequired,
        discountCchf: PropTypes.number.isRequired,
    };

    constructor(props) {
        super(props);

        this.state = {
            open: false,
        }
    }

    render() {
        if (!this.state.open) {
            return (
                <li className="overview" onClick={() => this.setState({open: true})}>
                    <GalleryItemDetails {...this.props} />
                </li>
            );
        } else {
            return (
                <li className="specifics">
                    <div className="button-wrap">
                        <ButtonClose onClick={() => this.setState({open: false})}/>
                    </div>
                    <div className="content">
                      <Specifics instanceId={this.props.instanceId} />
                    </div>
                </li>
            );
        }
    }
}

export default GalleryItem;