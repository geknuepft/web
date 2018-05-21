import React, {Component} from 'react'
import PropTypes from 'prop-types'
import config from 'react-global-configuration'


class SmartImage extends Component {

    static propTypes = {
        path: PropTypes.string.isRequired,
        height: PropTypes.number.isRequired,
        fullscreen: PropTypes.bool,
        alt: PropTypes.string,
    };

    render() {
        return (
            <img src={config.get('imageUrl') + this.props.height + 'p/' + this.props.path}
                 alt={this.props.alt}/>
        );
    }
}

export default SmartImage;
