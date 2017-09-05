import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './ColorPix.css';

class ColorPix extends Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        hex: PropTypes.string.isRequired,
    };

    render() {
        return (
            <div className="color-pix tooltip" style={{backgroundColor: '#' + this.props.hex}}>
                <span className="tooltiptext">
                    {this.props.name}
                </span>
            </div>
        );
    }
}

export default ColorPix;