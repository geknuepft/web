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

const ColorPixList = (props) => (
    <ul className="color-pix-list">
        {props.children}
    </ul>
);

const ColorPixListItem = (props) => (
    <li className="color-pix-list">
        <ColorPix {...props}/>
    </li>
);

export {ColorPix, ColorPixList, ColorPixListItem};
