import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SmartImage from './SmartImage'
import { Row, Col } from 'reactstrap'
import './ImageScroller.css'

class ImageSelector extends Component {

    static propTypes = {
        images: PropTypes.array.isRequired,
        activeImageIndex: PropTypes.number.isRequired,
        onImageSelect: PropTypes.func,
    }

    render () {
        return <ul className="image-selector">
            {this.props.images.map((image, index) =>
                <li key={index} className={index === this.props.activeImageIndex ? 'active' : ''}>
                    <a onClick={this.props.onImageSelect ? () => this.props.onImageSelect(index) : null}>
                        <SmartImage path={image.path} height={20}/>
                    </a>
                </li>
            )}
        </ul>
    }

}

class CarouselImage extends Component {

    render () {
        return <div className={'carousel-image ' + this.props.animation}>
            <SmartImage path={this.props.images[this.props.index].path} height={600}/>
        </div>
    }
}

class ImageScroller extends Component {

    static propTypes = {
        images: PropTypes.array.isRequired,
    }

    state = {
        activeImageIndex: 0,
        lastImageIndex: null,
        animating: 0,
    }

    onImageSelect (imageIndex) {
        const newImageIndex = Math.max(0, Math.min(this.props.images.length - 1, imageIndex))
        if (newImageIndex === this.state.activeImageIndex) return

        this.setState({
            activeImageIndex: newImageIndex,
            lastImageIndex: this.state.activeImageIndex,
            animating: newImageIndex > this.state.activeImageIndex ? 1 : -1
        })
    }

    handleKeyDown = (event) => {
        if (event.key === 'ArrowDown') {
            this.onImageSelect(this.state.activeImageIndex + 1)
        } else if (event.key === 'ArrowUp') {
            this.onImageSelect(this.state.activeImageIndex - 1)
        }
    }

    componentWillMount () {
        document.addEventListener('keydown', this.handleKeyDown)
    }

    componentWillUnmount () {
        document.removeEventListener('keydown', this.handleKeyDown)
    }

    render () {
        console.log('state=')
        console.log(this.state)

        if (this.props.images.length < 1) return null

        const imageSelector = this.props.images.length > 1 ?
            <ImageSelector
                images={this.props.images}
                activeImageIndex={this.state.activeImageIndex}
                onImageSelect={this.onImageSelect.bind(this)}
            /> : null

        let animation = ''
        if (this.state.animating === 1) {
            animation = 'move-down';
        } else if (this.state.animating === 1) {
            animation = 'move-up';
        }

        const carousel = <div className="carousel">
            {this.state.animating === 1 &&
            <CarouselImage images={this.props.images} index={this.state.lastImageIndex}/>}
            <CarouselImage images={this.props.images} index={this.state.activeImageIndex} animation={animation}/>
            {this.state.animating === -1 &&
            <CarouselImage images={this.props.images} index={this.state.lastImageIndex}/>}
        </div>

        return <Row className="image-scroller">
            <Col xs={2}>{imageSelector}</Col>
            <Col xs={10}>{carousel}</Col>
        </Row>
    }

}

export default ImageScroller
