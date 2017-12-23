import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './ImageScroller.css';
import SmartImage from './SmartImage';
import {Carousel, Modal} from 'react-bootstrap'

class ImageScroller extends Component {
    static propTypes = {
        images: PropTypes.array.isRequired,
    };

    constructor(props) {
        super(props);

        this.state = {
            fullScreen: false,
        }
    }

    render() {
        // empty gallery
        if (this.props.images.length < 1) return null;

        let FullScreenModal = null;
        if (this.state.fullScreen) {
            FullScreenModal =
                <Modal show={true}
                       onHide={() => this.setState({fullScreen: false})}
                       dialogClassName="image-scroller-modal">
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <Modal.Body>
                        <Carousel>
                            {this.props.images.map(
                                (image, idx) =>
                                    <Carousel.Item key={idx}>
                                        <SmartImage path={image.path} height={900}/>
                                        <Carousel.Caption>
                                            <h3>{image.imageType}</h3>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                            )}
                        </Carousel>
                    </Modal.Body>
                </Modal>;
        }

        return <div className="image-scroller">
            <Carousel>
                {this.props.images.map(
                    (image, idx) =>
                        <Carousel.Item key={idx} onClick={() => (this.setState({fullScreen: true}))}>
                            <SmartImage path={image.path} height={600}/>
                            <Carousel.Caption>
                                <h3>{image.imageType}</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                )}
            </Carousel>
            {FullScreenModal}
        </div>
    }
}

export default ImageScroller;