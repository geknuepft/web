import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SmartImage from './SmartImage'
import { Carousel } from 'react-bootstrap'

class ImageScroller extends Component {
    static propTypes = {
        images: PropTypes.array.isRequired,
    }

    constructor (props) {
        super(props)

        this.state = {
            index: 0,
            direction: null,
        }
    }

    handleSelect = (selectedIndex, e) => (
        this.setState({
            index: selectedIndex,
            direction: e.direction,
        })
    )

    onPrev = () => {
        let index = this.state.index - 1
        if (index < 0) index = this.props.images.length - 1
        this.setState({index: index})
    }

    onNext = () => {
        let index = this.state.index + 1
        if (index >= this.props.images.length) index = 0
        this.setState({index: index})
    }

    render () {
        // empty gallery
        if (this.props.images.length < 1) return null

        return <div className="image-scroller">
            <Carousel
                activeIndex={this.state.index}
                direction={this.state.direction}
                onSelect={this.handleSelect}
                interval={null}
                slide={false}

            >
                {this.props.images.map(
                    (image, idx) =>
                        <Carousel.Item key={idx}>
                            <SmartImage path={image.path} height={600}/>
                            <Carousel.Caption>
                                <h3>{image.imageType}</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                )}
            </Carousel>
        </div>
    }
}

export default ImageScroller
