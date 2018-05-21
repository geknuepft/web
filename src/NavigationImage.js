import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import config from 'react-global-configuration'
import './NavigationImage.css'

class NavigationImage extends Component {

    static propTypes = {
        imagePath: PropTypes.string.isRequired,
        target: PropTypes.string.isRequired,
        caption: PropTypes.string.isRequired,
        additionalText: PropTypes.string,
        aboveText: PropTypes.object,
    };

    render() {
        return (
            <div className="navigationimage">
                <Link to={this.props.target}>
                    <img
                        src={config.get('imageUrl') + '800p/content/navigationimage/' + this.props.imagePath}
                        alt=""/>
                    <div className="navigationimage-text">
                        <span className="additionaltext">{this.props.additionalText}</span>
                        <br/>
                        <span className="caption">{this.props.caption}</span>
                    </div>
                </Link>
            </div>

        );
    }
}

export default NavigationImage;
