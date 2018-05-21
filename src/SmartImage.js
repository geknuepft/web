import React, {Component} from 'react'
import PropTypes from 'prop-types'
import config from 'react-global-configuration'
import {Col} from 'reactstrap'
import './SmartImage.css'


class SmartImage extends Component {

    static propTypes = {
        path: PropTypes.string.isRequired,
        height: PropTypes.number.isRequired,
        fullscreen: PropTypes.bool,
        alt: PropTypes.string,
    };

    render() {
        return (
            <Col xs={12} sm={6} className="smartimage">
                        <img src={config.get('imageUrl') + this.props.height + 'p/' + this.props.path}
                             alt={this.props.alt}/>
            </Col>
        );
    }
}

export default SmartImage;
