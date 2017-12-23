import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './ImageScroller.css';
import SmartImage from './SmartImage';
import {Carousel} from 'react-bootstrap'

class ImageScroller extends Component {

    static propTypes = {
        images: PropTypes.array.isRequired,
    };

    constructor(props) {
        super(props);

        this.state = {
            fullscreen: false,
        }
    }

    render() {
        // empty gallery
        if (this.props.images.length < 1) return null;

        return <Carousel>
            {this.props.images.map(
                (image, idx) => <Carousel.Item key={idx}>
                    <SmartImage path={image.path} height={600}/>
                    <Carousel.Caption>
                        <h3>{image.imageType}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            )}
        </Carousel>
    }
}

export default ImageScroller;