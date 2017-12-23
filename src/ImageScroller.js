import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './ImageScroller.css';
import SmartImage from './SmartImage';
import {Carousel, Glyphicon, Button} from 'react-bootstrap'
import {ButtonClose} from './Button'

class ImageScroller extends Component {
    static propTypes = {
        images: PropTypes.array.isRequired,
    };

    constructor(props) {
        super(props);

        this.state = {
            index: 0,
            direction: null,
            fullScreen: false,
        }
    }

    render() {
        // empty gallery
        if (this.props.images.length < 1) return null;

        const handleSelect = (selectedIndex, e) => (
            this.setState({
                index: selectedIndex,
                direction: e.direction,
            })
        );

        const onPrev = () => {
            let index = this.state.index - 1;
            if (index < 0) index = this.props.images.length - 1;
            this.setState({index: index})
        };

        const onNext = () => {
            let index = this.state.index + 1;
            if (index >= this.props.images.length) index = 0;
            this.setState({index: index})
        };

        return <div className="image-scroller">
            <Carousel
                activeIndex={this.state.index}
                direction={this.state.direction}
                onSelect={handleSelect}
                interval={null}
                slide={false}

            >
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
            {this.state.fullScreen &&
            <FullScreenImageScroller
                images={this.props.images}
                index={this.state.index}
                onClose={() => (this.setState({fullScreen: false}))}
                onPrev={onPrev}
                onNext={onNext}
            />
            }
        </div>
    }
}

class FullScreenImageScroller extends Component {

    static propTypes = {
        images: PropTypes.array.isRequired,
        index: PropTypes.number.isRequired,
        onClose: PropTypes.func,
        onPrev: PropTypes.func,
        onNext: PropTypes.func,
    };

    render() {
        const image = this.props.images[this.props.index];
        return <div className="full-screen-image-scroller">
            <ButtonClose onClick={this.props.onClose}/>
            <SmartImage path={image.path} height={1200}/>
            <div className="nav prev" onClick={this.props.onPrev}>
                <Button><Glyphicon glyph="glyphicon-menu-left"/></Button>
            </div>
            <div className="nav next" onClick={this.props.onNext}>
                <Button><Glyphicon glyph="glyphicon-menu-left"/></Button>
            </div>
        </div>
    }

}

export default ImageScroller;