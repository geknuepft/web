import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Button.css';
import verkleinern from '../public/verkleinern.svg';

const ButtonNext = () => (
        <div className="gallery-button">
            <button type="submit" className="next"/>
        </div>
);

const ButtonPrevious = () => (
    <div className="gallery-button">
        <button type="submit" className="prev"/>
    </div>
);

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

export {ButtonNext, ButtonPrevious, ButtonClose};