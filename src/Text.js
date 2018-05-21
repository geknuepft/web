import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Col} from 'reactstrap'

class Text extends Component {

    static propTypes = {
        text: PropTypes.object,
    };

    render() {
        return (
            <Col xs={12} sm={6}>
                <p>{this.props.text}</p>
            </Col>
        );
    }
}

export default Text;
