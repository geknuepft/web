import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ButtonNext, ButtonPrevious} from "./Button";
import './ImageScroller.css';
import SmartImage from './SmartImage';

class ImageScroller extends Component {

    constructor(props) {
        super(props);

        this.state = {
            current: 0,
        }
    }

    static propTypes = {
        images: PropTypes.array.isRequired,
    };

    render() {
        // empty gallery
        if (this.props.images.length < 1) return null;

        const image = this.props.images[this.state.current];

        const imageDiv =
            <div>
                <span className="image-scroller-title">{image.imageType}</span>
                <SmartImage path={image.path} height={600}/>
            </div>;

        let buttonPrevious = null;
        if (this.state.current > 0) {
            buttonPrevious = <ButtonPrevious onClick={() => {
                this.setState({current: this.state.current - 1})
            }}/>;
        }

        let buttonNext = null;
        if (this.state.current < this.props.images.length - 1) {
            buttonNext = <ButtonNext onClick={() => {
                this.setState({current: this.state.current + 1})
            }}/>;
        }

        return (
            <div className="image-scroller">
                <div className="button-wrap">
                    {buttonPrevious}
                    {buttonNext}
                </div>
                {imageDiv}
            </div>
        );
    }


}

export default ImageScroller;