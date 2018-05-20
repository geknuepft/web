import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SmartImage from './SmartImage'
import { Carousel, CarouselIndicators, CarouselItem, CarouselControl, CarouselCaption } from 'reactstrap'

class ImageScroller extends Component {

    static propTypes = {
        images: PropTypes.array.isRequired,
    }

    constructor (props) {
        super(props)
        this.state = {activeIndex: 0}
        this.next = this.next.bind(this)
        this.previous = this.previous.bind(this)
        this.goToIndex = this.goToIndex.bind(this)
        this.onExiting = this.onExiting.bind(this)
        this.onExited = this.onExited.bind(this)
    }

    onExiting () {
        this.animating = true
    }

    onExited () {
        this.animating = false
    }

    next () {
        if (this.animating) return
        const nextIndex = this.state.activeIndex === this.props.images.length - 1 ? 0 : this.state.activeIndex + 1
        this.setState({activeIndex: nextIndex})
    }

    previous () {
        if (this.animating) return
        const nextIndex = this.state.activeIndex === 0 ? this.props.images.length - 1 : this.state.activeIndex - 1
        this.setState({activeIndex: nextIndex})
    }

    goToIndex (newIndex) {
        if (this.animating) return
        this.setState({activeIndex: newIndex})
    }

    render () {
        if (this.props.images.length < 1) return null

        const {activeIndex} = this.state

        const slides = this.props.images.map((image) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={image.path}
                >
                    <SmartImage path={image.path} height={600}/>
                    <CarouselCaption captionText={image.imageType}/>
                </CarouselItem>
            )
        })

        return (
            <Carousel
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
            >
                <CarouselIndicators items={this.props.images} activeIndex={activeIndex} onClickHandler={this.goToIndex}/>
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous}/>
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next}/>
            </Carousel>
        )
    }

}

export default ImageScroller
