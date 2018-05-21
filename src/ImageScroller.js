import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SmartImage from './SmartImage'

class ImageScroller extends Component {

    static propTypes = {
        images: PropTypes.array.isRequired,
    }

    render () {
        if (this.props.images.length < 1) return null

        return <ul className="image-scroller">
            {this.props.images.map((image, k) =>
                <li key={k}><SmartImage path={image.path} height={600}/></li>
            )}
        </ul>
    }

}

export default ImageScroller
