import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SmartImage from './SmartImage'
import { Row, Col } from 'reactstrap'
import './ImageScroller.css'

class ImageScroller extends Component {

    static propTypes = {
        images: PropTypes.array.isRequired,
    }

    state = {
        activeImageIndex: 0
    }

    onImageSelect (imageIndex) {
        const newImageIndex = Math.max(0, Math.min(this.props.images.length - 1, imageIndex))
        if (newImageIndex === this.state.activeImageIndex) return
        this.setState({activeImageIndex: newImageIndex})
    }

    render () {
        if (this.props.images.length < 1) return null

        let imageSelector = null
        if (this.props.images.length > 1) {
            imageSelector = <ul className="image-selector">
                {this.props.images.map((image, index) =>
                    <li key={index} className={index === this.state.activeImageIndex ? 'active' : ''}>
                        <a onClick={() => this.onImageSelect(index)}>
                            <SmartImage path={image.path} height={20}/>
                        </a>
                    </li>
                )}
            </ul>
        }

        const image = <SmartImage path={this.props.images[this.state.activeImageIndex].path} height={600}/>

        return <Row className="image-scroller">
            <Col>{imageSelector}</Col>
            <Col className="main">{image}</Col>
        </Row>
    }

}

export default ImageScroller
