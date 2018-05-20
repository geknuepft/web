import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './GalleryItem.css'
import { Chf, Mm, Cm } from './Number'
import SmartImage from './SmartImage'

const GalleryItemDetails = (props) => (
    <div>
        <div className="article-img">
            <SmartImage path={props.picture0} height={150} alt="Makroaufnahme"/>
        </div>
        <div className="article-title">
            <div>{props.articleName}</div>
            <div className="article-ids">I {props.instanceId}</div>
        </div>
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
)

class GalleryItem extends Component {

    static propTypes = {
        instanceId: PropTypes.number.isRequired,
        articleName: PropTypes.string.isRequired,
        lengthMm: PropTypes.number.isRequired,
        widthMm: PropTypes.number.isRequired,
        picture0: PropTypes.string.isRequired,
        priceCchf: PropTypes.number.isRequired,
        discountCchf: PropTypes.number.isRequired,
        open: PropTypes.func,
    }

    render () {
        return <li className="gallery overview" onClick={this.props.open}>
            <GalleryItemDetails {...this.props} />
        </li>
    }
}

export default GalleryItem
