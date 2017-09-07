import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './ColorPix.css';
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';
import './Tooltip.css';

class ColorPix extends Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        hex: PropTypes.string.isRequired,
    };

    render() {
        return (
            <Tooltip overlay={this.props.name} placement="top">
                <div className="color-pix" style={{backgroundColor: '#' + this.props.hex}}/>
            </Tooltip>
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
