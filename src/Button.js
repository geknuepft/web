import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Button.css';
import verkleinern from '../public/verkleinern.svg';
import Tooltip from 'rc-tooltip';



class ButtonNext extends Component {

    static propTypes = {
        onClick: PropTypes.func,
    };

    render() {
        return (
            <div className="gallery-button">
                <button type="submit" className="next" onClick={this.props.onClick}/>
            </div>
        );
    }

}


class ButtonPrevious extends Component {

    static propTypes = {
        onClick: PropTypes.func,
    };

    render() {
        return (
            <div className="gallery-button">
                <button type="submit" className="prev" onClick={this.props.onClick}/>
            </div>
        );
    }

}

class ButtonClose extends Component {

    static propTypes = {
        onClick: PropTypes.func,
    };

    render() {
        return (
            <button type="submit" className="close" onClick={this.props.onClick}>
                <img src={verkleinern} alt="verkleinern"/>
            </button>
        )
    }
}

class ButtonInfo extends Component {

    static propTypes = {
        text: PropTypes.string.isRequired,
    };

    render() {
        return (
            <Tooltip overlay={this.props.text} placement="top">
                <button className="info">i</button>
            </Tooltip>
        )
    }
}

export {ButtonNext, ButtonPrevious, ButtonClose, ButtonInfo};